import mercuryImage from "../assets/mercury.png";
import venusImage from "../assets/venus.png";
import earthImage from "../assets/earth.png";
import marsImage from "../assets/mars.png";
import jupiterImage from "../assets/jupiter.png";
import saturnImage from "../assets/saturn.png";
import uranusImage from "../assets/uranus.png";
import neptuneImage from "../assets/neptune.png";

const planets = [
    {
        name: "Mercury",
        image: mercuryImage,
        challenge: {
            type: "science",
            question: "Mercury is closest to the sun, but it's not the hottest planet. Which planet is the hottest in our solar system?",
            answers: ["Venus"],
        },
    },
    {
        name: "Venus",
        image: venusImage,
        challenge: {
            type: "math",
            question: "If you travel from Earth to Venus at a speed of 30,000 km/h and the distance is approximately 41 million km, how many hours will the journey take? (Round to the nearest whole number)",
            answers: ["1367"],
        },
    },
    {
        name: "Earth",
        image: earthImage,
        challenge: {
            type: "geography",
            question: "Name the largest ocean on Earth.",
            answers: ["Pacific Ocean", "Pacific"],
        },
    },
    {
        name: "Mars",
        image: marsImage,
        challenge: {
            type: "language",
            prompt: "Write a short mission log (at least 50 words) describing your first steps on Mars.",
        },
    },
    {
        name: "Jupiter",
        image: jupiterImage,
        challenge: {
            type: "science",
            question: "Jupiter is known for its Great Red Spot. What is this spot?",
            answer: "A giant storm",
        },
    },
    {
        name: "Saturn",
        image: saturnImage,
        challenge: {
            type: "science",
            question: "Saturn is famous for its rings. What are they primarily made of?",
            answer: "Ice and rock",
        },
    },
    {
        name: "Uranus",
        image: uranusImage,
        challenge: {
            type: "science",
            question: "Uranus has a unique rotation. How is it different from most other planets?",
            answer: "It rotates on its side",
        },
    },
    {
        name: "Neptune",
        image: neptuneImage,
        challenge: {
            type: "science",
            question: "Neptune has the strongest winds in the solar system. How fast can they reach?",
            answer: "2,100 km/h",
        },
    },
];

export default planets;