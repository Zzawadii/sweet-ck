import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homecacke.jpeg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> Sweet's cackes</h1>
                <p> CACKES FOR ANY TASTE</p>
                <Link to="/menu">
                    <button> OUR MENU</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;