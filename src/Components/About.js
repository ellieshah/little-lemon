import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="about-description">
                        Little Lemon is a charming family-owned Mediterranean restaurant located in the heart of Chicago. 
                        We focus on traditional recipes with a modern twist, using only the freshest ingredients to ensure 
                        an authentic and unforgettable dining experience.
                    </p>
                    <p>
                        Founded by two Italian brothers, Mario and Adrian, Little Lemon brings the flavors of the 
                        Mediterranean coast to your table, with each dish carefully crafted to transport you 
                        to the sunny shores of the Mediterranean Sea.
                    </p>
                </div>
                <div className="about-images">
                    <img src="./owner1.jpg" alt="Mario, co-owner of Little Lemon" className="owner-img" />
                    <img src="./owner2.jpg" alt="Adrian, co-owner of Little Lemon" className="owner-img" />
                </div>
            </div>
        </section>
    );
};

export default About;