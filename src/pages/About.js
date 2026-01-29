import React from "react";
import vanills from "../assets/abpic.jpg"; // hero/top image
import abb from "../assets/abb.jpg";        // big square image
import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="about">

            {/* Top hero image */}
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${vanills})` }}
            >
                <div className="heroText">
                    <h1>Welcome to Sweet’s Cakes</h1>
                    <p>Delicious cakes made with love and creativity</p>
                </div>
            </div>

            {/* Big square image */}
            <div className="aboutContent">
                <div className="aboutImageLeft">
                    <img src={abb} alt="Bakery" />
                </div>

                {/* About text section */}
                <div className="aboutText">
                    <h1>ABOUT US</h1>
                    <p>
                        Sweet’s Cakes is a local bakery passionate about creating high-quality cakes
                        made with care and creativity. We believe every celebration deserves a cake
                        that not only looks beautiful but tastes unforgettable.
                    </p>

                    <p>
                        We specialize in cakes of all sizes — small, medium, and large — for birthdays,
                        weddings, graduations, parties, and other special moments. We also offer single
                        cake slices for customers who want a quick treat without ordering a full cake.
                    </p>

                    <p>
                        Our bakery is built on trust, freshness, and customer satisfaction. Every cake
                        is prepared using carefully selected ingredients, fair pricing, and attention
                        to detail to ensure the best experience for our customers.
                    </p>
                </div>
            </div>
            <Link to="/contact" className="navButton">
                Contact Us
            </Link>
        </div>
    );
}

export default About;
