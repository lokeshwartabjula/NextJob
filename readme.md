# Assignment 3

- Date Created: 26 Jul 2023
- Last Modification Date: 26 Jul 2023
- GitLab URL: https://git.cs.dal.ca/jeet/webgroup-1/
- Deployment URL: https://legendary-starlight-48dd6e.netlify.app/

## Authors

- Aayush Dakwala (ay383119@dal.ca)

## Project Description

This assignment was aimed at developing a job portal prototype application using the Gin web framework in Golang for backend operations and Next JS for frontend development. The job portal supports features such as user onboarding for job seekers and employers, user authentication, profile management, and a dashboard feature with static data. In its current state, the application serves as a foundation for a full-featured job portal, with scalability and additional feature integration in mind.

## Testing

The testing strategy for this application was primarily manual. Each new feature or bug fix was thoroughly tested in an iterative development process. This involved testing the feature in isolation and then retesting it in the context of the entire application to ensure overall system integrity. Post-deployment, the application was rigorously tested on the live server to verify its functionality and to ensure a seamless user experience.

## Deployment

Frontend deployment was handled using [Netlify](https://www.netlify.com/). The steps to deploy on Netlify are:

1. Push your code to GitLab.
2. Login to your Netlify account.
3. Click on "New site from Git".
4. Select GitLab and choose your repository.
5. Choose your publish directory and build command according to your project.
6. Click on "Deploy site".

The backend was deployed using [Render](https://render.com/). The steps to deploy on Render are:

1. Push your code to GitLab.
2. Login to your Render account.
3. Click on "New Service".
4. Select your repository and branch.
5. Select your environment and build command.
6. Click on "Save & Deploy".

## Technologies used

- [Golang](https://go.dev/) - Programming Language
- [Gin Web Framework](https://gin-gonic.com/) - Backend Framework
- [Next JS](https://nextjs.org/) - Frontend Framework
- [React JS](https://reactjs.org/) - Frontend Framework
- [React Apex Chart](https://apexcharts.com/docs/react-charts/) - Chart Library
- [React Material UI](https://material-ui.com/) - UI Library
- [React Ant Design](https://ant.design/) - UI Library
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) - Maps API
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) - Places API
- [Render](https://render.com/) - Backend Deployment
- [Netlify](https://www.netlify.com/) - Frontend Deployment

## List of Files Created

- [employer.go](backend/api/controllers/employer.go): Contains all the handler functions related to employer routes in the application.
- [seeker.go](backend/api/controllers/seeker.go): Contains all the handler functions related to job seeker routes in the application.
- [main.go](backend/main.go): The main entry point for the backend application where server is started.
- [employerPayload.go](backend/models/payload/employerPayload.go): Defines the data structure for the payload associated with employer requests.
- [seekerPayload.go](backend/models/payload/seekerPayload.go): Defines the data structure for the payload associated with job seeker requests.
- [index.ts](frontend/api/index.ts): Centralizes all the API calls made from the frontend application.
- [BarChart.tsx](frontend/components/BarChart.tsx): Contains the implementation for rendering bar charts in the frontend.
- [Constants.ts](frontend/components/Constants.ts): Defines constant values used across the frontend application.
- [DonutChart.tsx](frontend/components/DonutChart.tsx): Contains the implementation for rendering donut charts in the frontend.
- [LineChart.tsx](frontend/components/LineChart.tsx): Contains the implementation for rendering line charts in the frontend.
- [PieChart.tsx](frontend/components/PieChart.tsx): Contains the implementation for rendering pie charts in the frontend.
- [LocalStorageManager.tsx](<frontend/src/app/(context)/LocalStorageManager.tsx>): Manages interactions with the local storage of the web browser.
- [UserContext.tsx](<frontend/src/app/(context)/UserContext.tsx>): Defines and manages the React context for user session data.
- [layout.tsx](frontend/src/app/auth/layout.tsx): Contains the layout components for the authentication related pages.
- [page.tsx](frontend/src/app/auth/login/page.tsx): Defines the structure and functionality of the login page.
- [page.tsx](frontend/src/app/auth/register/page.tsx): Defines the structure and functionality of the registration page.
- [constants.ts](frontend/src/app/dashboard/constants.ts): Defines constant values used in the dashboard.
- [overviewTile.tsx](frontend/src/app/dashboard/overviewTile.tsx): Contains the implementation for overview tile in the dashboard.
- [page.tsx](frontend/src/app/dashboard/page.tsx): Defines the structure and functionality of the dashboard page.
- [regionSelect.tsx](frontend/src/app/dashboard/regionSelect.tsx): Contains the implementation for the region selection feature in the dashboard.
- [renderChart.tsx](frontend/src/app/dashboard/renderChart.tsx): Contains the implementation for rendering charts in the dashboard.
- [types.ts](frontend/src/app/dashboard/types.ts): Defines TypeScript interfaces and types used in the dashboard.
- [header.tsx](frontend/src/app/header.tsx): Contains the common header component used across the application.
- [Header.tsx](frontend/src/app/header/Header.tsx): Contains the structure and functionality of the header component.
- [constant.ts](frontend/src/app/header/constant.ts): Defines constant values used in the header component.
- [frontend/src/app/header/styles.css](frontend/src/app/header/styles.css): Contains the CSS styles for the header component.
- [types.ts](frontend/src/app/header/types.ts): Defines TypeScript interfaces and types used in the header component.
- [layout.tsx](frontend/src/app/layout.tsx): Contains the layout component used across the entire application.
- [employer.tsx](frontend/src/app/my-profile/employer.tsx): Defines the structure and functionality of the employer profile page.
- [page.tsx](frontend/src/app/my-profile/page.tsx): Contains the main structure for the user profile page.
- [seeker.tsx](frontend/src/app/my-profile/seeker.tsx): Defines the structure and functionality of the job seeker profile page.
- [types.ts](frontend/src/app/my-profile/types.ts): Defines TypeScript interfaces and types used in the profile component.
- [page.tsx](frontend/src/app/onboard/employer/page.tsx): Defines the structure and functionality of the employer onboarding page.
- [page.tsx](frontend/src/app/onboard/seeker/page.tsx): Defines the structure and functionality of the job seeker onboarding page.

## List of Features Developed

Fronted setup and boilerplate code was developed for the application. The following features were developed:

- Boilerplate for frontend
- State management in frontend

Onboarding and authentication features were developed for the application. The following features were developed:

- Frontend of login and signup
- Frontend and backend for onboarding seeker
- Frontend and backend for onboarding employer

Profile management features were developed for the application. The following features were developed:

- Frontend and backend of my profile for employer
- Frontend and backend of my profile for seeker

Dashboard features were developed for the application. The following features were developed:

- Dashboard with static data

Note: Dashboard feature is working with static data and will be updated to work with dynamic data in the future (before demo).

## Code References

- [Gin Web Framework](https://gin-gonic.com/)
- [Next JS](https://nextjs.org/)
- [React JS](https://reactjs.org/)
- [React Apex Chart](https://apexcharts.com/docs/react-charts/)
- [React Material UI](https://material-ui.com/)
- [React Ant Design](https://ant.design/)
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [material-kit-react](https://github.com/devias-io/material-kit-react)

## Code Integration Instructions

1. Clone the repository from GitLab.
2. Install dependencies:
   - For the frontend, navigate to the frontend directory and run `npm install`.
   - For the backend, ensure you have Golang installed and the correct dependencies for the Gin framework.
3. To run the application:
   - For the frontend, use `npm run dev` command.
   - For the backend, use `go run main.go` command.

Please ensure to update tests as appropriate and note that both backend and frontend should be running simultaneously for full functionality.
