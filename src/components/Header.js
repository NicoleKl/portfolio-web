import React, { useState, useEffect, useCallback } from "react";
import NavLink from './NavLink';
import './css/Header.css';

const getDimensions = (el) => {
  const { height } = el.getBoundingClientRect();
  const offsetTop = el.offsetTop;
  const offsetBottom = offsetTop + height;
  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [...document.querySelectorAll('div.section')];
  const sectionNames = ['home', 'about', 'projects', 'contacts'];

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight - 150;
    const selected = sections.find((section) => {
      const { offsetBottom, offsetTop } = getDimensions(section);
      return scrollPosition > offsetTop && scrollPosition <= offsetBottom;
    });

    selected && setActiveSection(selected.id);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="header_container">
        <nav>
          <ul className="header_menu">
            {sectionNames.map((section, i) =>
              <NavLink key={i} sectionName={section} isActive={activeSection === section} handleClick={scrollTo} />
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
