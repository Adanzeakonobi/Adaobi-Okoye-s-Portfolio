let projectsArray = [
    {
        title: 'Vehicle Booking App',
        description: "An App where people can rent or book any vintage vehicle of their choice for the number of days they want. Utilizes React-Redux and Ruby on Rails.",
        languages: ['Bootstrap', 'Ruby', 'React', 'Crypto-js', 'Axios'],
        livelink: 'https://bookit-fe.netlify.app/',
        sourcelink: 'https://github.com/Adanzeakonobi/bookit-fe.git',
        image:"Images/bookit.png",
      },
    {
      title: 'Recipe App',
      description: "This keeps track of all your recipes and ingredients. It allows you to create recipes and generate shopping list based on what you have and what you are missing from a recipe.",
      languages: ['Rails', 'Bootstrap', 'Ruby'],
      livelink: 'https://aj-recipeapp-staging.herokuapp.com/',
      sourcelink: 'https://github.com/Adanzeakonobi/Recipe-App',
      image:'Images/Recipe.png',
    },
    {
      title: 'Budget App',
      description: "This is a mobile web application where you can manage your budget, you have a list of transactions associated with categories, to enable you see amount spent.",
      languages: ['Rails', 'Bootstrap', 'Ruby '],
      livelink: 'https://personal-budgetlist.herokuapp.com/',
      sourcelink: 'https://github.com/Adanzeakonobi/Budget_App.git',
      image:"Images/Transations.png",
    },
    {
      title: 'Space Travel',
      description: "This App is for a company that provides commercial and scientific space travel services. The website allow users to book rockets and join selected space missions.",
      languages: ['HTML', 'CSS', 'React', 'Redux'],
      livelink: 'https://space-travelers-hubby.netlify.app/',
      sourcelink: 'https://github.com/Adanzeakonobi/Space--Travelers-App.git',
      image:"Images/Space-travel.png",
    },
    {
      title: 'Covid-19 Update',
      description: "This is a mobile web application that displays details of Covid cases in Africa. This details is gotten/fetched from a Covid-19 API.",
      languages: ['HTML', 'CSS', 'React', 'Redux'],
      livelink: 'https://react-capstone-project-metric.herokuapp.com/',
      sourcelink: 'https://github.com/Adanzeakonobi/React-Redux-Capstone-Project',
      image:"Images/Covid19.png",
    },
    {
      title: 'Conference Page',
      description: "This is a mobile and web app designed for a planned graduate trainee program. I created to pages for home page and about page. ",
      languages: ['HTML', 'CSS', 'JavaScript'],
      livelink: 'https://adanzeakonobi.github.io/Conference-Page/',
      sourcelink: 'https://github.com/Adanzeakonobi/Conference-Page.git',
      image:"Images/conference.png",
    },
  ];

const projectContainer = document.querySelector('.projects-container');

projectsArray.forEach(project => {
    console.log(project);
    projectContainer.innerHTML += `
    <div class="project-card">
    <div style="background-image: url(${project.image}); width: 100%; height: 230px; background-size: cover ">
     
      </div>
        
        <div class="content">
            <h3 class="project-name">${project.title}</h3>
            <p class="workgridp2">${project.description}</p>
            <span class="tags">${project.languages}</span>
            <div class="live-version">
            <a href="${project.sourcelink}" class="live">Github</a>
            <a href="${project.livelink}" class="live">See Live</a>
            </div>
        </div>
    </div>
    `;
})
