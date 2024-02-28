// Carousel images
import {
  memoriesImages,
  djangoRealtorImages,
  djangoNotesImages,
  expenseTrackerFirebase,
  attendance_tracker,
  cloudCents,
  trelloImages,
  digitalhippoImages,
  gtCourseTrackerImages,
} from "../../public/images/projects/carousel";

const Project = {
  PROJECT: "Project",
  FEATURED: "Featured Project",
};

// Standard image imports
import deepLearningProject from "public/images/projects/deep-learning.jpg";
import fuelEconomyProject from "public/images/projects/Fuel-Economy.jpg";
import machineLearningProject from "public/images/projects/machine-learning-project.png";
import towerDefenseProject from "public/images/projects/tower-defense.png";
import prophet_stock_prediction from "public/images/projects/ml/streamlit_stock_prediction_prophet.png";
import sklearn_streamlit_visualizer from "public/images/projects/ml/sklearn_streamlit_visualizer.png";
import rate_my_professor_io from "public/images/projects/carousel/rate_my_professor_io/RMP_IO.png";
import cs7450hw1 from "public/images/projects/carousel/cs7450-hw1/cs-7450-hw1.png";

import { TechIcons } from "@/components/icons";

export const project_config = [
  {
    type: Project.PROJECT,
    title: "RateMyProfessorIO",
    summary:
      "For my Literature Media Communication class during my undergrad, we had to present a pitch to the class for a new product that combined AI with education. I pitched RateMyProfessorIO, which was one of the four selected from 20+ presentations. This site is a prototype built with React.js and designed from Figma.",
    images: rate_my_professor_io,
    img: rate_my_professor_io,
    github: "",
    link: "https://williamcaseylucas.github.io/ratemyprofessorio-site/",
    icons: [TechIcons.React, TechIcons.Tailwind, TechIcons.Figma],
  },
  {
    type: Project.PROJECT,
    title: "Recreate Syllabus",
    summary:
      "In this project, I recreated the syllabus for my Information Visualization class at Georgia Tech using Svelte Kit and Css and rendered out information using an imported csv file.",
    images: cs7450hw1,
    img: cs7450hw1,
    github: "",
    link: "https://williamcaseylucas.github.io/cs7450-hw1-live-demo/",
    icons: [TechIcons.Svelte, TechIcons.HTML, TechIcons.CSS],
  },
  {
    type: Project.FEATURED,
    title: "Digital Hippo Marketplace",
    summary:
      "This project utilizes payload CMS as a ORM so that users can add items directly to their store in the frontend. The frontend utilized Next.js 14 along with server side components to create fast loading screens and was connected with Stripe for users to checkout easily. Resend.com was used as a SMTP server to send emails both with order confirmations and login authentication tokens.",
    images: digitalhippoImages,
    img: digitalhippoImages[6],
    github: "",
    link: "",
    icons: [
      TechIcons.Next,
      TechIcons.Typescript,
      TechIcons.Prisma,
      TechIcons.Express,
      TechIcons.Tailwind,
      TechIcons.MySQL,
      TechIcons.TRPC,
      TechIcons.PlanetScale,
    ],
  },
  {
    type: Project.PROJECT,
    title: "Trello Clone",
    summary:
      "This app was created with Next.js 14, Prisma, Clerk (authentication), Stripe, and hello-pangea for draggable cards. Users could sign in, create workspaces, add boards (until their free tier was used up, at which point they had to update their subscription), see an activity log for each action they took, and create sections and new cards with additional details.",
    images: trelloImages,
    img: trelloImages[2],
    github: "",
    link: "",
    icons: [TechIcons.Next, TechIcons.Typescript, TechIcons.Prisma],
  },
  {
    type: Project.PROJECT,
    title: "GT Course Tracker",
    summary:
      "For this project, I wrote a python script that used BeautifulSoup to scrape Georgia Tech's course registration page to identify what the current wait list was for given courses I was interested in taking. I then created a CRON job using a github actions CI/CD pipeline that ran every 15 minutes that continued to scrape this webpage, and if it found that there were seats available for one of my desired courses, I would recieve an email. This was accomplished by creating a basic smtp server that logged in through one of my gmail accounts using github secret variables and the os module in python.",
    images: null,
    img: gtCourseTrackerImages[0],
    github: "",
    link: "",
    icons: [TechIcons.Python, TechIcons.Selenium],
  },
  {
    type: Project.FEATURED,
    title: "Attendance Tracker - Full Stack (FARM)",
    summary:
      "This app was developed as a means of logging the attendance of 50+ students in Georgia Tech's VIP Environmental Flights lab (which focuses on drone-based solutions). This app utilizes NextJS, Typescript, moment.js, and NextAuth in the frontend, and FastAPI with websockets and MongoDB through PyMongo. Only users who are on an email list can view the app. When the user logs in, they can either add students manually or import a csv with a 'name' and 'email' column to import many students at once. The client can also download a csv of the current attendance log of the students with a click of a button and they have a refresh button to resync with the backend. Once the client clicks 'create session', the client's location is passed to the data base as the center of origin and a qr code is displayed for others to login. Once others scan the qr code, allow their location to be logged (they have to be within a mile of the client's location), and they enter a valid email that exists in the database, the students attendance goes up by 1 and a little circle appears on the client's end using websockets to indicate realtime logged students. Once the client clicks 'close session', every student who didn't submit their email address within the last hour of the session being created are marked as absent automatically.",
    images: attendance_tracker,
    img: attendance_tracker[1],
    github: "",
    link: "",
  },
  {
    type: Project.PROJECT,
    title: "Machine Learning Visualizer",
    summary:
      "This web app makes use of KMeans, SVM, Random Forest, and Decision Tree models on the iris, breast cancer, wine, and diabetes datasets. The user can select from various parameters on the side panel, and visualize what contributes to the accuracy score shown. In addition, the user can see the shape of the dataset, the number of classes in the dataset, and can filter how decision trees are displayed by varying column amounts.",
    images: null,
    img: sklearn_streamlit_visualizer,
    github: "https://github.com/williamcaseylucas/streamlit_scikit_learn_basic",
    link: "https://appscikitlearnbasic.streamlit.app/",
  },
  {
    type: Project.PROJECT,
    title: "Stock Price Prediction using Prophet ML, Streamlit, and Plotly",
    summary:
      "This app makes stock predictions on Apple, Google, Microsoft, and Gamestop and lets the user determine how far out predictions should be made. It visualizes time series data from when the stock opened and closed from Yahoo Finance and then uses Facebook's Prophet model to make a prediction on the stock data and then displays the forecast data and components of the prediction.",
    images: null,
    img: prophet_stock_prediction,
    github:
      "https://github.com/williamcaseylucas/stock_forecast_app_streamlit_prophet",
    link: "https://stockforecastappappprophet.streamlit.app/",
  },
  {
    type: Project.PROJECT,
    title: "Study Notes App - Full Stack (React + Django + jsonServer",
    summary:
      "The study notes app is a full stack application intended to mimick the notes app on the iPhone. The user can create a new note, update a note, and delete a note. The app was first constructed using JSON server to simulate an api, and then it was converted to utilizing Django REST framework with CORS properties and a MVC template. This app also took advantage of a Makefile, which allowed me to run custom commands to make migrations and run the database's server.",
    images: djangoNotesImages,
    img: djangoNotesImages[5],
    github:
      "https://github.com/williamcaseylucas/django-react-studynotes/tree/main",
    link: "",
  },
  {
    type: Project.PROJECT,
    title: "Expense Tracker App - Full Stack (NextJS, TypeScript, Firebase)",
    summary:
      "This app was written in NextJS with TypeScript and ESLint for the frontend and utilized Firebase for the backend. The expense tracker could add new values, delete old values, and would display a running total on the bottom.",
    images: expenseTrackerFirebase,
    img: expenseTrackerFirebase[1],
    github: "https://github.com/williamcaseylucas/expense_tracker_firebase",
    link: "",
  },
  {
    type: Project.FEATURED,
    title:
      "Admin Dashboard - Kyndryl Internship - Full Stack (Nextjs, Redux, Redux Query, Azure Functions, Azure Pipeline CI/CD)",
    summary:
      "CloudCents is a SAAS solution that takes credentials for a company's Azure subscription and runs diagnostics on the usage of the most expensive resources in Azure (virtual machines, bastions, storage, app services, application gateways). During this process, Azure functions are filtering through the Azure API and are sending a new JSON object to the frontend so that relevant information can be parsed efficiently. This project made use of NextJS, Redux and Redux Query for state management and cacheing API calls, and allowed the user to add a subscription, select it as the one to view diagnostics on, view general statistics from the overview page, and then click into a specific resource from the table to see why the resource should be modified. The client can also implement these suggesstions by clicking into a resource and clicking the button 'scale up', 'scale down', 'start', or 'stop'. If Kyndryl were to implement all of the suggestions made via this application, the company would drive down Azure costs by 72%.",
    images: cloudCents,
    img: cloudCents[6],
    github: "",
    link: "",
  },
  {
    type: Project.PROJECT,
    title: "Memories App - Full Stack (MERN)",
    summary:
      "This project utilizes ReactJS and Redux on the frontend, and MongoDB through Express.js, Node.js, and Mongoose on the backend. This app allows the user to submit memories with an image attached that then displays on the side panel with an indication of how long ago the submission was made using Javascipts Date class.",
    images: memoriesImages,
    img: memoriesImages[2],
    github: "https://github.com/williamcaseylucas/memories-full-stack",
    link: "",
  },
  {
    type: Project.PROJECT,
    title: "Realtor Site - (HTML, CSS, Bootstrap, Django)",
    summary:
      "This application renders specific html components using Django on the frontend, and then stores realtors and listings via PostgreSQL and Django-REST Framework in the backend. During development, I created a Docker container to hold the PostgreSQL database and PGAdmin for visualization within the docker container.",
    images: djangoRealtorImages,
    img: djangoRealtorImages[0],
    github: "https://github.com/williamcaseylucas/realtor-website-django",
    link: "",
  },
  {
    type: Project.FEATURED,
    title: "Deep Learning - Predict if Brain Tumor is Benign or Malignant",
    summary:
      "Developed deep learning models that accurately detected brain tumors by identifying abnormalities and diseases in MRI scans from patients with nearly 80% accuracy. (RNN, CNN, Attention, Decision Trees)",
    images: null,
    img: deepLearningProject,
    github: "",
    link: "https://drive.google.com/file/d/1L2Q5HMXMFAHfp5cqngXX9j0g0YO0UeQi/view",
  },
  {
    type: Project.PROJECT,
    title: "Machine Learning - Landscape Image Classification",
    summary:
      "Preprocessed 4,000 images and applied unsupervised and supervised techniques to achieve an accuracy of 70% (KMeans, Gaussian Mixture Model, DB-Scan, Silhouette Coefficient, Calinski Score)",
    images: null,
    img: machineLearningProject,
    github: "",
    link: "https://www.youtube.com/watch?v=rz7OoKlQDd8",
  },
  {
    type: Project.PROJECT,
    title: "2D Tower Defense Game",
    summary:
      "Led the development of a 2D 'Tower Defense' game using SceneBuilder, Agile/Scrum methodologies, and Design Patterns like Singleton and Factory Method (Java,  JavaFX, JUnits)",
    images: null,
    img: towerDefenseProject,
    github: "",
    link: "https://www.youtube.com/watch?v=fEl2JX4xtHE",
  },
  {
    type: Project.FEATURED,
    title: "Vehicle with Greatest Fuel Economy Report",
    summary:
      "Collaborated with team to create statistical models that determined the most fuel-efficient vehicle using multivariable analyses (R)",
    images: null,
    img: fuelEconomyProject,
    github: "",
    link: "https://drive.google.com/file/d/1UNwd74NT0bqiqq2S6nOeU_dJMexX6WsR/view",
  },
];
