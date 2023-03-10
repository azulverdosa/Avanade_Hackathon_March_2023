# BRIDGE

> An algorithm that plots data based on employee demographics. Live demo [here](https://avanade-iwd.devpost.com/project-gallery 'devpost link') .

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Limitations](#limitations)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

Bridge is a dashboard tool for a company's HR team to easily monitor their company culture in a quantitative and effective way.

The gender gap in pay has remained relatively stable in the United States over the past 20 years or so. In 2022, women earned an average of 82% of what men earned, according to a new Pew Research Center analysis of median hourly earnings of both full and part-time workers. These results are similar to where the pay gap stood in 2002, when women earned 80% as much as men.

At the heart of this issue, we believe that companies could be more transparent about their hiring practices but also monitor the diversity of their employee more regularly, striving to Bridge the gap and promote fair treatment of all employees, no matter their gender or background.

> UPDATE<br/>
> This project was named the winner in the MLH Avanade International Women's Day Hackathon, for the "Avanade 'Reducing Bias' Challenge" category (March 2023).
> <br/> <br/> https://avanade-iwd.devpost.com/project-gallery > <br/> <br/> ![metric selection](src/images/winner.png 'Home Page')

## Tech Stack

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![Python](https://img.shields.io/badge/Python-47A248.svg?style=for-the-badge&logo=Python&logoColor=white)

## Features

Welcome to BRIDGE:

- Landing Page

  ![Home Page](src/images/home.png 'Home Page')

Selecting Paramters:

- Which metrics you want in your graph <br/>
  ![metric selection](src/images/selectingparameters.png 'Home Page')

Graph Generator:

- Generates a visualisation based on the parameters you entered
  ![graph](src/images/graph.png 'Home Page')

Employees Included:

- Complete list of the employees included in the data set:

  ![employees](src/images/employees.png 'Home Page')

Next Steps:

- Suggestions based on the results:

  ![Nextsteps](src/images/suggestions.png 'Home Page')

Activity Log:

- Company and employee highlighths:

  ![highlights](src/images/highlights.png 'Home Page')

Articles:

- List of trending articles:

  ![articles](src/images/articles.png 'Home Page')

Learning Tools:

- Training for employees, it's not currently set up for internal training but it sends you to Udemy for courses

  ![learning tools](src/images/learning.png 'Home Page')
  Description of screenshot here

## Limitations

> Currently the graphs are not dynamically generated because it took too much time to figure out out to connect an API to make requests to generate the visialise ations. The only graphs that generate are the Females at Work and Ffnance report in the favouroites list, the Work Life Balance report in the Lifestyle reports, the selected parameters of Gender+ Salary + Position will generate an image and, Gender + Position. We plan on continuing to develop the APi to be able to generate the graph dynamically.

## Setup

### Run Locally

1. Clone repo locally
2. Change into API folder
3. Run `npm install` in your bash/command line
4. Change into UI folder
5. Run `npm install` in your bash/command line
6. In the API folder, run `npm run dev` in your bash/command line
7. Open [http://localhost:4000/hello-world](http://localhost:4000/hello-world) to view it in the browser.
8. In the UI folder, run `npm start` in your bash/command line
9. Open [http://localhost:3000](http://localhost:3000) to view it n the browser.

### Available Commands

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

`npm run dev`

Runs the server. Open [http://localhost:4040](http://localhost:4040) to view it in your browser. I am also using nodemon.

<!-- ## Usage

How does one go about using it? Provide various use cases and code examples here.

    write-your-code-here -->

## Project Status

Status: In Progress

## Room for Improvement

Improvement Thoughts:

- Currently the graphs are not dynamically generated, would like to learn more about using React+Python and be able to create custom graphs.

- Finish the 'Training' aspect with course links available.

- Styling needs to be updated a bit.

- The favourites section is hard coded and I want to make it dynamic.

To do:

- [ ] Training Tab
- [ ] Develop favourites
- [ ] Allow for custom graphs

## Acknowledgements

Many thanks to [Emilie Z](https://github.com/EmilieYZhang), this project was created for the Avanade Internaltional Woman's Day Hackathon and Emilie was a great teamate!

## Contact

Created by [@azulverdosa](ellemocambo@gmail.com) - feel free to contact me!

- [LinkedIn](https://www.linkedin.com/in/avatorre/ 'linked')

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

## License

MIT License Copyright (c) [2023] [AvaElise]
