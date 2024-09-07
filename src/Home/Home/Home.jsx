import React, { useEffect } from "react";
import MiddelPart from "../MiddelPart/MiddelPart";
import TabSection from "../TabSection/TabSection";
import SnakeCard from "../TestingComponent/SnakeCard";
import OurTeamCard from "../TestingComponent/OurTeamCard";
import OurTeamCardTow from "../TestingComponent/OurTeamCardTow";
// import './FadingText.css';

const FadingText = ({ text }) => {
    useEffect(() => {
        const textSpans = document.querySelectorAll('.fading-text span');

        textSpans.forEach((span, index) => {
            span.style.animationDelay = `${index * 0.5}s`; // Adjust delay as needed
        });
    }, []);

    return (
        <div className="fading-text">
            {text.split(' ').map((word, index) => (
                <span key={index}>{word} </span>
            ))}
        </div>
    );
};

const Home = () => {

    return (
        <div>
            <TabSection />
            <MiddelPart />
            <div>
                {/* Add the FadingText component with your desired text */}
                <FadingText text="Welcome to Our Website" />
                <SnakeCard></SnakeCard>
                <OurTeamCard></OurTeamCard>
                <OurTeamCardTow></OurTeamCardTow>
            </div>
        </div>
    );
};

export default Home;
