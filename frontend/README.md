<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Assignment 3 (Individual Deliverable)

- _Date Created_: 26 JULY 2023
- _Last Modification Date_: 26 JULY 2023
- _Group Git URL_: <https://git.cs.dal.ca/jeet/webgroup-1/-/tree/jeet?ref_type=heads>
- _Group Git Branch URL_: <https://git.cs.dal.ca/jeet/webgroup-1/-/tree/jeet?ref_type=heads>
- _Individual Repository Git URL_: <https://git.cs.dal.ca/jeet/csci_5709_mehta_jeet_b00945900>
- _Individual Repository Assignment 1 Git URL_: <https://git.cs.dal.ca/jeet/csci_5709_mehta_jeet_b00945900/-/tree/main/Assignments/Assignment%201>
- _Deployment URL_: <https://jeetdal.netlify.app/home/jobradius>

## Authors

- [Jeet Mehta](jt429386@dal.ca) - _(Developer)_

## Feature & Task

For this assignment, I have worked on the following features and tasks: - Fetching Jobs Based on Location Radius, Golang Server Setup, & Authentication Module. For Jobs Based on Location Radius, I have used the Google Maps API. Here the user will be dropping a pin on the displayed map and based on that pin's location jobs will be fetched from the database. I have returned the jobs which are in radius of 3KM from the dropped pin's location. Once the jobs have been fetched and displayed the user can click on the job card and it will redirect the user to the job details page. Here the Apply button will be only visible if the login user is a seeker type category. For Golang Server Setup, I have implemented the bareflow/boilerplate code for the server after that the integration for the authentication module was added. For Authentication Module, I have used the JWT token for authentication. Here the user will be able to login and register. Also the need to setup proper CORS policy was also handled in this module. Also the middleware for the server was setup, this is done to check if the user is authenticated or not.

## Testing

For testing of the location based feature, I tried to drop the pin in location where there are no jobs or jobs available based on the radius. Also I tried to drop the pin in the ocean and the application was able to handle that. For testing of the authentication module, I tried to login with the wrong credentials and the application was able to handle that. Also I tried to register with the same email address and the application was able to handle that. Also I tried to register with the wrong email address and the application was able to handle that. Also I tried to register with the wrong password and the application was able to handle that.

## Deployment

For deployment purposes, I have used Netlify for FrontEnd and for backend services I have used Render. 

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

- [Next.js](https://nextjs.org/) - The web framework used for developing Front-End
- [Netlify](https://www.netlify.com/) - Netlify helped in deploying the application
- [Render](https://render.com/) - Render helped in deploying the backend of application

## Technologies & Services Used

### Backend

- [Golang](https://go.dev/) - Golang was used for developing the backend of the application
- [Gin](https://gin-gonic.com/) - Gin was used as the web framework for the backend
- [Gorm](https://gorm.io/) - Gorm was used as the ORM for the backend
- [MongoDB](https://www.mongodb.com/) - MongoDB was used as the database for the backend
- [JWT](https://jwt.io/) - JWT was used for authentication purposes

### Frontend

- [Next.js](https://nextjs.org/) - Next.js was used as the web framework for the frontend
- [React](https://reactjs.org/) - React was used as the frontend library
- [Material UI](https://mui.com/) - Material UI was used as the UI library
- [Google Maps API](https://developers.google.com/maps) - Google Maps API was used for the location based feature
- [Axios](https://axios-http.com/) - Axios was used for making API calls
- [Ant Design](https://ant.design/) - Ant Design was used for the UI components

## Code Integration Instructions

### Backend

- Clone the repository using the following command: `git clone https://git.cs.dal.ca/jeet/webgroup-1.git`
- Navigate to the backend folder using the following command: `cd backend/`
- Install the dependencies using the following command: `go mod download`
- Run the server using the following command: `go run main.go`

### Frontend

- Clone the repository using the following command: `git clone https://git.cs.dal.ca/jeet/webgroup-1.git`
- Navigate to the frontend folder using the following command: `cd frontend/`
- Install the dependencies using the following command: `npm install`
- Run the server using the following command: `npm run dev`

## Code References

[1]	“Ant Design - The world’s second most popular React UI framework,” Ant.design. [Online]. Available: https://ant.design/. [Accessed: 27-Jul-2023].

[2]	“MUI: The React component library you always wanted,” Mui.com. [Online]. Available: https://mui.com/. [Accessed: 27-Jul-2023].

[3]	“Overview,” Google for Developers. [Online]. Available: https://developers.google.com/maps/documentation/places/web-service/overview. [Accessed: 27-Jul-2023].

