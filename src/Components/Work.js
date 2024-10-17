import React, { useEffect } from 'react'
import { Heading } from './Heading'
import { WorkCard } from './WorkCard'
import pp from "../Images/portfolio.png"
import disnep from "../Images/disnep.png"
import google from "../Images/google.png"
import messnger from "../Images/messenger.png"
import burger from "../Images/burger.png"
import hurst from "../Images/hurst.png"
import real_estate from "../Images/real estate.png"
import weather from "../Images/wheather.png"
import contactbook from "../Images/contact.png"
import paradiseuser from "../Images/paradise-user.png"
import paradisehotel from "../Images/paradise-hotel.png"
import paradiseadmin from "../Images/paradise-admin.png"

function Work() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <div>
        <Heading heading={"My Work"}/>
        <WorkCard sno="1" title="Super Admin Panel" des="Introducing a cutting-edge Super Admin Panel for a Hotel Reservation App, leveraging the latest technologies to deliver a seamless user experience.The Super Admin Panel oversees the entire hotel reservation system, including both customer-facing reservations and the internal hotel admin panel." skills={["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "Mongo DB", "Node JS", "Express JS"]} plink="https://paradise-super-admin.web.app/" git="https://github.com/arhammunir1104/Paradise-Hotel-Admin-Panel-Frontend" pic={paradiseadmin} />
        <WorkCard sno="2" title="Hotel Management Admin Panel" des="Presenting a state-of-the-art Hotel Management Application designed to enhance the operational efficiency of hotel reservations. Access real-time data visualization and analytics to monitor hotel performance and make informed decisions." skills={["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "Mongo DB", "Node JS", "Express JS"]} plink="https://paradise-hotel-admin.web.app/" git="https://github.com/arhammunir1104/Paradise-Hotel-Admin-Panel-Frontend" pic={paradisehotel} />
        <WorkCard sno="3" title="Paradise - Room Reservation Application" des="Presenting an innovative Room Reservation Application designed to simplify and enhance the booking experience.Real-time updates on room availability, enabling customers to book rooms with confidence." skills={["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "Mongo DB", "Node JS", "Express JS"]} plink="https://paradise-user.web.app/" git="https://github.com/arhammunir1104/Paradise-User-Frontend" pic={paradiseuser} />
        <WorkCard sno="4" title="Contact Saving Application" des="Presenting an advanced Contact Information Saving Application designed to securely manage and store contact details. Effortlessly create, read, update, and delete contact information, ensuring organized and up-to-date records." skills={["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "Mongo DB", "Node JS", "Express JS"]} plink="https://contact-book-63496.web.app/" git="https://github.com/arhammunir1104/contact-book" pic={contactbook} />
        <WorkCard sno="5" title="Disnep Clone" des="Presenting a captivating Disney+ Clone Application designed to replicate the user experience of the popular streaming service.Secure user registration and login system, ensuring personalized and safe access to content.Fetch and display movies and TV shows using third-party APIs, providing a rich and up-to-date content library." skills={["HTML", "CSS", "JavaScript",  "React JS", "API"]} plink="https://disnep-be589.web.app/" git="https://github.com/arhammunir1104/disnep-clone" pic={disnep} />
        <WorkCard sno="6" title="Google Clone" des="Presenting a sophisticated Google Clone Application designed to replicate the search functionality of the world's most popular search engine.Utilize the Google Custom Search API to provide accurate and relevant search results, mirroring the performance of Google Search." skills={["HTML", "CSS", "JavaScript", "React JS", "Google Custom Search API"]} plink="https://clone-5408a.web.app/" git="https://github.com/arhammunir1104/google-clone" pic={google} />
        <WorkCard sno="7" title="Weather App" des="Presenting an innovative Real-Time Weather Application designed to provide accurate and up-to-date weather information.Provide detailed weather forecasts, including temperature, humidity, wind speed, and more." skills={["HTML", "CSS", "JavaScript",  "React JS", "API"]} plink="https://weather-2a43e.web.app/" git="https://github.com/arhammunir1104/weather-application" pic={weather} />
        <WorkCard sno="8" title="Messenger Clone" des="Presenting a Messenger Clone Application designed to replicate the features and user experience of popular messaging platforms.Seamlessly send and receive messages in real-time, providing an instant communication experience." skills={["HTML", "CSS", "JavaScript", "React JS", "Firebase Database"]} plink="https://clone-5e7c8.web.app/" git="https://github.com/arhammunir1104/messenger-clone" pic={messnger} />
        <WorkCard sno="9" title="Real Estate" des="Introducing a visually stunning Real Estate Website crafted with HTML, CSS, JavaScript, and Bootstrap. This website showcases an elegant and user-friendly interface designed to provide a seamless property browsing experience." skills={["HTML", "CSS", "JavaScript", "Bootstraps"]} plink="https://city-space-33a93.web.app/" git="https://github.com/arhammunir1104/city-space-real-estate" pic={real_estate} />
        <WorkCard sno="10" title="Furniture" des="Introducing an elegant Furniture Business Website designed to showcase a range of furniture products with style and functionality. Built using HTML, CSS, JavaScript, and Bootstrap, this website offers a visually appealing and user-friendly platform for customers to explore and purchase furniture items." skills={["HTML", "CSS", "JavaScript",  "Bootstraps"]} plink="https://hurst-f0c7a.web.app/" git="https://github.com/arhammunir1104/hurst-furniture-website" pic={hurst} />
        <WorkCard sno="11" title="Burger Shop" des="Introducing a charming Restaurant Website designed to showcase culinary offerings and provide an inviting digital experience for visitors. Built using HTML and CSS, this website emphasizes simplicity and elegance to reflect the restaurant's ambiance and menu." skills={["HTML", "CSS",]} plink="https://burger-c0af3.web.app/" git="https://github.com/arhammunir1104/burger-resturant-website" pic={burger} />
    </div>
    </>
  )
}

export {Work}