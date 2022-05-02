import React from "react";
//import ReactDOM from "react-dom";
import './../css/App.css';
const bgBannerImage =  'https://952219.smushcdn.com/2603432/wp-content/uploads/2021/08/non-descript-delivery.jpg?lossy=0&strip=1&webp=1';

//const prevImg = 'https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg';
const sectionStyle = {
    backgroundImage: 'url("'+bgBannerImage+'")',
    minHeight: '350px',
    marginBottom: '20px'
};

const introStyle = {
    width:'350px',
}


const About = () => {
    return <>

    <div className="section" style={sectionStyle}>
            <h1>Welcome to Blueprint Ecommerce!</h1>

            <i><b>Lost Fear Barso pehle</b></i>

            <p style={introStyle}>AdNabu helps improve sales in Google Ads for eCommerce companies. If you are running search, shopping or display campaigns in Google Ads, Our software will be able to increase your sales. Sign up today for a 14-day free trial


            </p>

    </div>


    </>
}


export default About;