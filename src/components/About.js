import React from "react";
import './css/About.css';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const About = () => {
    return (
        <div id="about" className="section aboutSection">
            <div className="container mx-auto">
                <h1 className="aboutSection_header">
                    About
                </h1>
                <p>As a front-end developer, I am dedicated to ensuring exceptional user experiences.</p>
                <h2 className="aboutSection_header2">Why me?</h2>
                <div className="aboutSection_highlights">
                    <div className='highlight'>
                        <VerifiedUserIcon fontSize="large"/>
                        <p className="highlight_text">3+ years of experience</p>
                    </div>
                    <div className='highlight'>
                        <AspectRatioIcon fontSize="large"/>
                        <p className="highlight_text">proficient in modern front-end libraries and frameworks</p>
                    </div>
                    <div className='highlight'>
                        <PsychologyIcon fontSize="large"/>
                        <p className="highlight_text">proactive, problem-solving mindset</p>
                    </div>
                </div>
                <a className="resumeBtn" target="_blank" href="https://drive.google.com/file/d/1zs8XQ5DoDGi24aM8FqP_4XFPnQ-70LPK/view?usp=sharing">more details in my resume</a>

            </div>
        </div>
    );
};

export default About;