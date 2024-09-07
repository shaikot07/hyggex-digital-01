import React from 'react';
import { motion } from "framer-motion";
const OurTeamCardTow = () => {
    return (
        <div className="card__collection clear-fix">

            {/* Card Two */}
            <motion.div
                className="cards cards--two"
                whileHover={{
                    translateY: -15,
                    transition: { duration: 0.3 },
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
                    className="img-responsive"
                    alt="Cards Image"
                />
                <span className="cards--two__rect"></span>
                <span className="cards--two__tri"></span>
                <motion.p
                    initial={{ left: '-100%' }}
                    whileHover={{
                        left: '8%',
                        transition: { duration: 0.6 },
                    }}
                >
                    Lucy Grace
                </motion.p>
                <motion.ul className="cards__list">
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-linkedin-in"></i></li>
                </motion.ul>
            </motion.div>

            {/* Card Three */}
            <motion.div
                className="cards cards--three"
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
                    className="img-responsive"
                    alt="Cards Image"
                />
                <span className="cards--three__rect-1">
                    <span className="shadow-1"></span>
                    <p>Chris Levnon</p>
                </span>
                <span className="cards--three__rect-2"></span>
                <span className="cards--three__circle"></span>
                <ul className="cards--three__list">
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-linkedin-in"></i></li>
                </ul>
            </motion.div>
        </div>
    );
};

export default OurTeamCardTow;