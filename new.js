const roles = ["Data Analyst"];
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
}
// Project data
const projects = [

    {
        id: 1,
        title: "Job Market Trending Job Analysis",
        description: "A data analysis project focusing on trending job markets, utilizing Python and data analysis tools to uncover insights into job demand across various industries.",
        thumbnail: "image copy 3.png",
        screenshots: [
            "./images/jobmarket1.png",
            "./images/jobmarket2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/DataAnalysisProject/blob/main/JobMarketTrendingJob.ipynb",
        technologies: ["Python", "Pandas", "Matplotlib"]
    },
    {
        id: 2,
        title: "Netflix Movie Data Analysis",
        description: "Analyzed Netflix movie data using Python and visualization tools to gain insights into trends, genres, and viewer preferences.",
        thumbnail: "image.png",
        screenshots: [
            "./images/netflix1.png",
            "./images/netflix2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/NetFilx-Movie_DataAnalysis",
        technologies: ["Python", "Pandas", "Seaborn"]
    },
    {
        id: 3,
        title: "SQL and Python Sales Data Insight Analysis",
        description: "A project that utilizes SQL and Python to analyze datasets, perform data cleaning, and generate insights for business decisions.",
        thumbnail: "image copy.png",
        screenshots: [
            "./images/sqlpython1.png",
            "./images/sqlpython2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/SQL_and_Python_DataAnalysis",
        technologies: ["SQL", "Python", "Data Analysis"]
    },
    {
        id: 4,
        title: "Power BI Dashboard Design",
        description: "Designed interactive dashboards in Power BI to visualize key business metrics and provide actionable insights.",
        thumbnail: "image copy 2.png",
        screenshots: [
            "./images/powerbi1.png",
            "./images/powerbi2.png"
        ],
        githubUrl: "https://github.com/Roksana18cse04/PowerBIDashboadDesign",
        technologies: ["Power BI", "DAX", "Data Visualization"]
    }
];

// Initialize the portfolio section
function initializePortfolio() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        container.appendChild(projectCard);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePortfolio);
