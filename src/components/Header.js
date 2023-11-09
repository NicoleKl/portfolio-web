import React, { useState, useEffect } from "react";
import NavLink from './NavLink';
import './css/Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  const sections = [...document.querySelectorAll('div.section')];

  const sectionNames = sections.map((section) => section.id);
  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight - 150;
      const selected = sections.find((section) => {
        const { offsetBottom, offsetTop } = getDimensions(section);
        return scrollPosition > offsetTop && scrollPosition <= offsetBottom
      });
      
      selected && setActiveSection(selected.id)
    };

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
            {sectionNames.map((section) =>
              <NavLink sectionName={section} isActive={activeSection === section} handleClick={scrollTo} />
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
