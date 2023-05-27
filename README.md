<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Assignment 1 (Individual Deliverable)

* *Date Created*: 24 MAY 2023
* *Last Modification Date*: 27 MAY 2023
* *Group Git URL*: <https://git.cs.dal.ca/jeet/webgroup-1/-/tree/jeet?ref_type=heads>
* *Group Git Branch URL*: <https://git.cs.dal.ca/jeet/webgroup-1/-/tree/jeet?ref_type=heads>
* *Individual Repository Git URL*: <https://git.cs.dal.ca/jeet/csci_5709_mehta_jeet_b00945900>
* *Individual Repository Assignment 1 Git URL*: <https://git.cs.dal.ca/jeet/csci_5709_mehta_jeet_b00945900/-/tree/main/Assignments/Assignment%201>
* *Deployment URL*: <https://jeetdal.netlify.app/home/jobradius>


## Authors

* [Jeet Mehta](jt429386@dal.ca) - *(Developer)*

## Feature & Task

For this assignment we have considered the feature where the job seeker is able to find jobs based on radius selected by them. Once the radius is selected by the user/job seeker, system displays jobs based on that location. The jobs are displayed on the map via a tooltip. These tooltips will only have the information about the salary offered in that job. Here a small task of this feature is implemented. The task assumes that the user has already selected the job location (i.e., radius in which he is trying to find a job) and then the system displays the jobs on the map. Here for showing the map I have used @react-google-maps/api library. 

## Testing

For testing of this assignment there is no end to end test cases written, as it was mainly focused on the UI aspects of the application. Even though I have tested the application in various browsers and mobile browser for map to be loading perfectly. 

## Deployment

For deployment purposes, I have used netlify's service. With the help of netlify's Github integration on every new commit on main branch the website gets build and deployed with the help of CI/CD of netlify. 

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Next.js](https://nextjs.org/) - The web framework used for developing Front-End
* [Netlify](https://www.netlify.com/) - Netlify helped in deploying the application
