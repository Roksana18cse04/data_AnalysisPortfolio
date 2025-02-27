const roles = ["Machine Learning Engineer","Data Analyst"];
    let roleIndex = 0;  // To track the current role
    let charIndex = 0;  // To track the current character in the role
    const dynamicText = document.getElementById("dynamic-text");
    const typingSpeed = 100;    // Speed of typing (in milliseconds)
    const erasingSpeed = 50;    // Speed of erasing (in milliseconds)
    const delayBetweenRoles = 2000; // Delay before switching to the next role

    function typeRole() {
        if (charIndex < roles[roleIndex].length) {
            dynamicText.textContent += roles[roleIndex][charIndex]; // Add the next character
            charIndex++;
            setTimeout(typeRole, typingSpeed); // Type the next character
        } else {
            setTimeout(eraseRole, delayBetweenRoles); // Wait and then erase
        }
    }

    function eraseRole() {
        if (charIndex > 0) {
            dynamicText.textContent = roles[roleIndex].substring(0, charIndex - 1); // Remove the last character
            charIndex--;
            setTimeout(eraseRole, erasingSpeed); // Erase the next character
        } else {
            roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
            setTimeout(typeRole, typingSpeed); // Start typing the new role
        }
    }

    // Start the typing effect
    document.addEventListener("DOMContentLoaded", () => {
        typeRole();
    });

    
// Create project card
function createProjectCard(project) {
    const div = document.createElement('div');
    div.className = 'col-md-4';
    div.innerHTML = `
        <div class="card bg-dark border-light h-100 project-card">
            <img src="${project.thumbnail}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <div class="d-flex gap-2">
                    <!-- Add data-project-id to the anchor tag -->
                    <a href="${project.githubUrl}" class="btn btn-outline-light" target="_blank" data-project-id="${project.id}">
                        <i class="bi bi-github"></i> Source Code
                    </a>
                </div>
            </div>
        </div>
    `;

    // No need for a click handler anymore as there's no "view-project" button
    return div;
}


// Show project modal with carousel
function showProjectModal(project) {
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    const carousel = document.querySelector('#projectCarousel .carousel-inner');
    
    // Clear existing slides
    carousel.innerHTML = '';
    
    // Add screenshots to carousel
    project.screenshots.forEach((screenshot, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${screenshot}" class="d-block w-100" alt="Project screenshot">`;
        carousel.appendChild(slide);
    });
    
    // Update project details
    document.querySelector('.project-title').textContent = project.title;
    document.querySelector('.project-description').textContent = project.description;
    document.querySelector('.source-code-btn').href = project.githubUrl;
    
    modal.show();
}// Project data
const projects = [
    {
        id: 1,
        title: "Job Market Trending Job Analysis",
        description: "A data analysis project focusing on trending job markets, utilizing Python and data analysis tools to uncover insights into job demand across various industries.",
        thumbnail: "./image copy 3.png",
        screenshots: [
            "./images/jobmarket1.png",
            "./images/jobmarket2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/DataAnalysisProject/blob/main/JobMarketTrendingJob.ipynb",
        technologies: ["Python", "Pandas", "Matplotlib"],
        category: "ds" // Data Science/Data Analytics
    },
    {
        id: 2,
        title: "Netflix Movie Data Analysis",
        description: "Analyzed Netflix movie data using Python and visualization tools to gain insights into trends, genres, and viewer preferences.",
        thumbnail: ".image.png",
        screenshots: [
            "./images/netflix1.png",
            "./images/netflix2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/NetFilx-Movie_DataAnalysis",
        technologies: ["Python", "Pandas", "Seaborn"],
        category: "ds" // Data Science/Data Analytics
    },
    {
        id: 3,
        title: "SQL and Python Sales Data Insight Analysis",
        description: "A project that utilizes SQL and Python to analyze datasets, perform data cleaning, and generate insights for business decisions.",
        thumbnail: "./image copy.png",
        screenshots: [
            "./images/sqlpython1.png",
            "./images/sqlpython2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/SQL_and_Python_DataAnalysis",
        technologies: ["SQL", "Python", "Data Analysis"],
        category: "ds" // Data Science/Data Analytics
    },
    {
        id: 4,
        title: "Power BI Dashboard Design",
        description: "Designed interactive dashboards in Power BI to visualize key business metrics and provide actionable insights.",
        thumbnail: "./image copy 2.png",
        screenshots: [
            "./images/powerbi1.png",
            "./images/powerbi2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/PowerBIDashboadDesign",
        technologies: ["Power BI", "DAX", "Data Visualization"],
        category: "ds" // Data Science/Data Analytics
    },
    {
        id: 5,
        title: "Machine Learning Model for Sentiment Analysis",
        description: "Built a sentiment analysis model using Natural Language Processing (NLP) and machine learning techniques.",
        thumbnail: "./sentiment.jpeg",
        screenshots: [
            "./images/ml-screenshot1.png",
            "./images/ml-screenshot2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/Ml-project/blob/main/NLP.ipynb",
        technologies: ["Python", "Scikit-learn", "NLP"],
        category: "ml" // Machine Learning


    },
    {
        id: 6,
        title: "Image Classification using Convolutional Neural Networks (CNN)",
        description: "Developed an image classification model using Convolutional Neural Networks (CNN) to classify images into predefined categories. The model was trained on a large dataset and achieved high accuracy.",
        thumbnail: "./imageclassification.jpeg",
        screenshots: [
            "./images/image-classification-1.png",
            "./images/image-classification-2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/Ml-project/blob/main/image_classification.ipynb",
        technologies: ["Python", "TensorFlow", "Keras", "CNN", "Computer Vision"],
        category: "ml" // Machine Learning
    },
    {
        id: 7,
        title: "Sentence Contradiction Classification using NLP",
        description: "Developed a machine learning model to classify whether pairs of sentences are contradictory, neutral, or entailing. Utilized advanced NLP techniques and transformer-based models for high accuracy.",
        thumbnail: "./sentenceContradiction'.webp",
        screenshots: [
            "./images/sentence-contradiction-1.png",
            "./images/sentence-contradiction-2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/SentenceContradictionClassificationProject",
        technologies: ["Python", "Transformers", "Hugging Face", "BERT", "NLP"],
        category: "ml" // Machine Learning
    },
    ,
    {
        id: 8,
        title: "Atliq Hardware Consumer Domain Analysis",
        description: "Conducted an in-depth analysis of consumer data for Atliq Hardware to uncover trends, customer behavior, and sales insights. Utilized SQL and Power BI for data extraction, transformation, and visualization.",
        thumbnail: "./atliq.png",
        screenshots: [
            "./images/atliq-consumer-1.png",
            "./images/atliq-consumer-2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/Atliq-Hardware-ConsumerDomain-Analysis",
        technologies: ["SQL", "Power BI", "Data Analysis", "Data Visualization"],
        category: "ds" // Data Science/Data Analytics
    }
];

// Initialize the portfolio section
function initializePortfolio() {
    const mlContainer = document.getElementById('ml-projects-container');
    const dsContainer = document.getElementById('ds-projects-container');

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        if (project.category === "ml") {
            mlContainer.appendChild(projectCard);
        } else if (project.category === "ds") {
            dsContainer.appendChild(projectCard);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePortfolio);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePortfolio);
