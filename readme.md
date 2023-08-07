# Assignment 3

In this Assignment 3, my objective was to employ my back-end development skills to build an integral part of a web application, following a specified set of guidelines. This task played a key role in both my individual A3 work and our collective group project. I focused on developing the "behind-the-scenes" mechanism for one specific feature of our project—the same one I planned in Assignment 2.

* *Date Created*: 26 Jul 2023
* *Last Modification Date*: 26 Jul 2023
* *Group Git URL*: <https://git.cs.dal.ca/jeet/webgroup-1>
* *front-end deployment URL*: <https://legendary-starlight-48dd6e.netlify.app/>
* *back-end deployment URL*: <https://group1-assignment3.onrender.com>

# overview

The application developer in Assignment 3, built with Golang, Next.js, and MongoDB, streamlines job listings and applicant management for companies. It consists of two primary features - 'Job Listing for Company Management' and 'Job Applicant Management'.

'Job Listing for Company Management' allows companies to manage their job postings effectively, while 'Job Applicant Management' lets them view and filter applicants efficiently.

The application uses advanced technologies such as the Gin Web Framework and is hosted on Netlify (frontend) and Render (backend). Material UI and Material UI icons are used to ensure a user-friendly interface. The codebase is organized into clear, purpose-specific files for easier comprehension and maintenance.

## Authors

* [Kruti Panchal](kr946702@dal.ca)

## Testing

After creating the basic schema structure for MongoDB and developing the API with the Golang Gin framework, I performed a series of thorough tests to ensure everything was working as expected. I utilized Postman, a popular API testing tool, for this purpose.

Firstly, I ran individual tests for each endpoint of the API to confirm they were responding correctly. This involved sending different types of requests and verifying if the responses were as expected. Additionally, I checked to ensure that error handling was properly set up by deliberately sending malformed requests and observing the responses. Following the individual endpoint tests, I performed integration tests to validate that the API was correctly interacting with MongoDB. I inspected whether the right data was being written to and read from the database for each API call.

Upon verifying the correct working of the API with Postman, I integrated it with the frontend developed in Next.js. I tested the complete flow of the feature, from the frontend interaction triggering the API call, to the API's interaction with MongoDB, and back to the frontend.

Throughout this testing process, I consistently made sure to verify the integrity, reliability, and efficiency of our application to ensure a smooth and robust user experience.

## Deployment

When working on this project, I first focused on the frontend and backend separately. This way, I could make sure that both parts were built and tested thoroughly. Once I was confident that each part was working as expected, I combined them into the main part of the project, which we call the master branch.

Next, it was time to launch our project on the internet. For the frontend, we used Netlify, which is known for handling this kind of work well and can easily keep our project updated. For the backend, we used Render because it makes the process easier by handling everything automatically. This let me focus more on refining the project.

This process was designed to manage the project effectively as it moved from the development stage to being ready for users. It ensured that users would have a smooth and efficient experience when using the application.

## Technologies used

For this project, I used a range of technologies:

* [Golang](https://go.dev/) - The primary programming language used for backend development.
* [Gin Web Framework](https://gin-gonic.com/) - A lightweight framework for building web applications in Golang.
* [Next JS](https://nextjs.org/) - A React.js framework used for the frontend development.
* [Netlify](https://www.netlify.com/) - The platform used for frontend hosting.
* [Render](https://render.com/) - The platform used for backend hosting.
* [MongoDB](https://www.mongodb.com/atlas/database) - A NoSQL database used for storing data.

## External Dependencies
Apart from these, the project also utilized some external dependencies for additional functionalities:

* @mui/material: This dependency from Material UI provides React components for faster and simpler web development. It was used for styling the application.
* @mui/icons-material: This Material UI icons library offers hundreds of delightful open source icons that were used throughout the project.

## List of Files Created

Sure, here are the descriptions for each file, formatted in a clear way:

- [apply.go](backend/api/controllers/apply.go): This file holds the APIs used to retrieve all job information as well as specific job information based on a provided ID.
- [ApplicantInformation.ts](frontend/src/app/applicants/[id]/(constants)/ApplicantInformation.ts): This file defines the types of information that an applicant object can hold.
- [applicants.module.css](frontend/src/app/applicants/[id]/(constants)/applicants.module.css): This file contains the CSS code used to style the applicant module.
- [ApplicantDetails.tsx](frontend/src/app/applicants/[id]/components/ApplicantDetails.tsx): This file is used to display detailed information about the applicant in a dialog box.
- [ApplicantsListing.tsx](frontend/src/app/applicants/[id]/components/ApplicantsListing.tsx): This file displays a list of all candidates who have applied for a job, and also provides the functionality to filter applicants as required.
- [page.tsx](frontend/src/app/applicants/[id]/page.tsx): This file provides the structure for the applicant details page.
- [jobListings.ts](frontend/src/app/job-information/(constants)/jobListings.ts): This file outlines the types of information that a job details object can hold.
- [joblisting.module.css](frontend/src/app/job-information/(constants)/joblisting.module.css): This file contains the CSS code used to style the job listing module.
- [JobListings.tsx](frontend/src/app/job-information/components/JobListings.tsx): This file displays a list of all jobs for the employer and provides the functionality to filter jobs as required.
- [page.tsx](frontend/src/app/job-information/page.tsx): This file provides the structure for the job details page.

# Features and Tasks

In this project, I contributed to the development of two major features, each comprising of several crucial tasks.

### Feature 1: Job Listing for Company Management
This feature is designed to help companies manage their job listings efficiently. The associated tasks for this feature include:

- **Job Listing**: Display a list of jobs posted by the employer.
- **Job Filtering**: Filter jobs based on their title, location, and current status.
- **Job Update/Delete**: Provide functionality to update or delete existing jobs.
- **Job Creation**: Allow the creation of new job postings.
- **Job Detail Display**: Show comprehensive job details in a dialog box.

### Feature 2: Job Applicant Management
This feature aims to help employers manage job applicants effectively. The tasks for this feature include:

- **Applicant Listing**: Display job seekers who have applied for a specific job.
- **Applicant Filtering**: Filter applicants based on their degree, education, and experience.
- **Applicant Detail Display**: Show detailed information about an applicant in a dialog box.

Each of these features and tasks was developed with an emphasis on enhancing usability and ensuring a smooth management process for both job postings and job applicants.

# Pre-requisites
#### Next.js Installation
Before cloning the repository, ensure that [Node.js](https://nodejs.org/en/download) is installed in your system. You can download it from the official Node.js website.

Next.js is built with Node.js, so you'll need to have it installed first. To install Next.js, use the following command in your terminal:

* npx create-next-app@latest

#### Golang Gin Framework Installation
Before you can use the [Gin Web Framework](https://gin-gonic.com/), make sure Golang is installed on your system. You can download it from the official Golang website.

Once Golang is installed, you can install the Gin Web Framework with the following command in your terminal:
## Code Reference

- [Gin Web Framework](https://gin-gonic.com/)
- [React JS](https://reactjs.org/)
- [Next JS](https://nextjs.org/)
- [React Material UI](https://material-ui.com/)
- [material-kit-react](https://github.com/devias-io/material-kit-react)

* go get -u github.com/gin-gonic/gin

## Code Integration Instructions

#### Clone from Git
Begin by cloning the repository from Git using the appropriate command in your terminal.

#### Frontend Setup

Navigate to the frontend directory by typing cd frontend in your terminal.
Install all the necessary packages by running npm i.
Start the frontend server by executing npm run dev.

### Backend Setup

Navigate to the backend directory by typing cd backend in your terminal.
Download the required dependencies by running go get.
Start the backend server by executing go run ..
Remember, these steps are necessary to successfully set up and run the application on your local system.

