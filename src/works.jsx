import { useState } from "react";
import "./Home.css";

const projects = [
    {
        name: "MyFleeApp",
        category: "Android",
        description: "A marketplace for students to buy and sell items.",
        github: "https://github.com/victesa/myFleeApp",
        image: "/my-flee-app-pic.png" // Add project image
    },
    {
        name: "Farm Tracker",
        category: "Android",
        description: "An android app that helps farmers manage their farm data",
        github: "https://github.com/victesa/FarmTracker",
        image: "/farmtracker-pic.png" // Add project image
    },
    {
        name: "Relaxify",
        category: "Android",
        description: "An app to help manage anxiety with journaling and ambient sounds.",
        github: "https://github.com/victesa/CalmSpotter",
        image: "/relaxify-pic.png"
    },
    {
        name: "Event Spotter",
        category: "Web",
        description: "A web app that helps people find and book events in Nairobi, Kenya",
        github: "https://github.com/yourusername/portfolio",
        image: "/event-spotter-pic.png"
    },
    {
        name: "ServiceHub",
        category: "Web",
        description: "A web app for buying and selling services",
        github: "https://github.com/victesa/ServiceHub_2024",
        image: "/servicehub-pic.png"
    }
];

const categories = ["All", "Android", "Web"];

const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <div id="works" className="works">
            <h1>Projects</h1>
            <p>Here are some of the projects I've worked on.</p>

            <div className="tabs">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`tab-button ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="project-card" onClick={() => window.open(project.github, "_blank")}>
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
