# D3 Proposal Web Application by Group1

This is a group submission to meet the requirements of D3. As a team of 6, we have developed an innovative job search web application called “Next Job” which aims to revolutionize the recruitment landscape by addressing the prevalent challenges in job seeking and job hiring process. It can be claimed as a one-stop solution for job seekers and employers with a goal to bridge the gap between them through user-centric interface and experience. This submission has the complete end to end feature implementation of our project prototype. In this submission data is not hardcoded and is being retrieved by calling the APIs that we have developed. 

From our application’s user personas, we have collected and addressed a few frustrations.
The complexities in the process of using the application are addressed by our simple and minimalistic user interface and by implementing automated capabilities wherever possible. We have provided better user experience by eliminating time consumption problems through filters and visual analytics dashboard.

With respect to process, we have followed design thinking strategy where we started from empathize phase followed by define phase, then ideate phase, prototype phase and then finally the testing phase. With respect to tech-stack, we have used next.js for a uniform and sleek user experience, constructed RESTful APIs using Gin Web framework written in Golang for our middleware and we used MongoDB to store data in a schema less structure.




- Date Created: 11 Aug 2023
- Last Modification Date: 26 Jul 2023
- GitLab URL: https://git.cs.dal.ca/jeet/webgroup-1
- Deployment URL (Backend): https://group1-assignment3.onrender.com/
- Deployment URL (Frontend): https://master--luminous-chaja-d73e17.netlify.app/

## Authors

* [Aayush Dakwala](ay383119@dal.ca) - *(Developer)*
* [Jeet Mehta](jt429386@dal.ca) - *(Developer)*
* [Kruti Panchal](lk544219@dal.ca) - *(Developer)*
* [Lokeshwar Kumar Tabjula](lk544219@dal.ca) - *(Developer)*
* [Maulik Gajipara](ml477880@dal.ca) - *(Developer)*
* [Kishan Patel](kpatel@dal.ca) - *(Developer)*



## Testing

We have hosted the website through netlify and we checked if our intended features are being loaded, checked if the developed UI components are being rendered as expected and checked if the APIs that we developed are sending expected responses.
We have also checked the responsiveness of the website in different orientations.

The testing strategy for this application was primarily manual. Each new feature or bug fix was thoroughly tested in an iterative development process. This involved testing the feature in isolation and then retesting it in the context of the entire application to ensure overall system integrity. This was done in local environment first.

Post-deployment, the application was moved to the staging environment where it was rigorously tested on the live server to verify its functionality and to ensure a seamless user experience. Then it is deployed in production environment as well.



### Break down into end to end tests

```
The following are the approaches that we implemented to test our application:
1. Functional Testing - to ensure the features of the application are working as expected. As part of this testing, each of our team member has tested their own feature completely.
2. Usability Testing - to evaluate website’s user interface and overall user experience.
3. Navigation Testing - to check the navigational elements of the website to ensure users can move around the site easily
4. Responsive Testing - to validate that the website adjusts and looks good on various screen sizes. As part of this testing, we ensured that each screen is tested under different sizes and orientations.
5. Regression Testing - to ensure that new code hasn’t negatively affected existing functionality and that all features work together well. As part of this testing, we tested end to end functionalities from job seeker perspective and employer perspective.

```

### And coding style tests

Explain what these tests test and why

```
1. Verified if the code and folder structure is maintained in such a way that it is easy to add features in the pages.
2. Verified if the components are developed in such a way that it can be reused with slight modifications.
```


## Deployment

We deployed this website using netlify. We followed the instructions given in the T2 Netlify Guide pdf document which is found in our Week 3 course content.


## Technologies used

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
- [Axios](https://axios-http.com/) - Axios was used for making API calls
- [Ant Design](https://ant.design/) - Ant Design was used for the UI components
- [Google Maps API](https://developers.google.com/maps) - Google Maps API was used for the location based feature
- [React Apex Chart](https://apexcharts.com/docs/react-charts/) - React Apex charts was used for displaying charts in the visual analytics dashboard
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) - Used to implement in forms to get location






## List of Features Developed
- *Job Application Process:* This feature is designed for job seekers to view the list of jobs, filter them based on their preferences, and then apply for the desired job.
- *Employer notification:* The employer notification feature ensures that the employer gets notified through email, whenever a seeker submits.
- *Location-based job search:* The location-based job search feature enables users to input their desired radius and filters job listings accordingly, displaying relevant opportunities within the specified area.
- *Insights Dashboard:* This feature has widgets and chart components that provide visual insights based on different aspects like Average Salary, Skill Demand and location-based Job openings.
- *Onboarding and profile management:* This feature enables both job seekers and employers to enroll themselves as registered users of the application and let them manage their profiles.
- *Customized applicant filter:* The customized applicant filter tailors and refines the applicant search criteria based on specific requirements, allowing employers to efficiently shortlist and identify qualified candidates.
- *Job posting management:* Employers can effectively create, edit, and manage job postings within the system, ensuring accurate and up-to-date job listings.
- *Company review management:* Enables recently joined employees to post and update reviews on a listed company, fostering transparency and engagement with the company’s reputation.
- *Company overview and active job openings:* This feature is completely developed. Through this feature, user will be able to browse details about the desired company in the "description" tab. View reviews about the company in the "Reviews" tab, and then view job openings in the "Active Job Openings" tab.

- *Customized Companies Listing:* This feature is partially developed. Through this feature, user will be able to view all the companies that have been partnered with our next job platform. It also has customized filter which are partially implemented. These filters help users to filter companies based on their requirements.

- *Candidate details:* This feature is for the employers to view comprehensive details about candidates who have applied for job positions, including their qualifications, experience, and contact information, aiding in the evaluation and selection process.
- *User Preferences:* This feature ensures a consistent user experience through session and cache management. The preferences chosen by the user is made persistent in the application through this feature.

## Sources Used
### src/app/JobCard/JobCard.tsx

*Lines  18 - 60*

```
<div className='card'>
            <div className='job-content'>
                <div className='job-date'>
                    <text>{props.jobDate}</text>
                </div>

                <div className='company-desc'>
                    <div className='comp-div'>
                        <text className='company'>{props.jobCompany}</text>
                        <text className='title'>{props.jobTitle}</text>
                    </div>

                    <div className='company-logo'>
                        <img src={props.companyLogo} />
                    </div>
                </div>

                <div className='job-type'>
                    <text>{props.jobType}</text>
                </div>
            </div>

            <div className='footer'>
                <div className='salary-div'>
                    <text className='sal'>${props.salary}/Month</text>
                    <text className='location'>{props.jobLocation}</text>
                </div>

                <div>
                    <Button className='details-bttn' style={{
                        backgroundColor: 'rgba(140, 226, 112, 0.859)',
                        color: '#000',
                        borderRadius: '24px',
                        paddingLeft: '1.3rem',
                        paddingRight: '1.3rem',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
                    }} onClick={() => { }}>
                        Details
                    </Button>
                </div>
            </div>

        </div>

```

The code above was created by adapting the code in [https://mui.com/material-ui/react-card/](https://mui.com/material-ui/react-card/) as shown below: 

```
export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
```

- The above code was taken from MUI documentation
- This code was used because we needed a resuable card component to display a job item in job listing page.
- In this case, we have modified the code in such a way it suits the details that were required to list a job item in the listing page.



### components/BarChart.tsx

*Lines  18 - 60*

```
export default function BarChart({
  options,
  title,
  labels,
  data,
  width,
}: {
  options: ApexOptions;
  title: string;
  labels: string[];
  data: number[];
  width?: number;
}) {
  const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
  width = width || DEFAULT_GRAPH_WIDTH;
  options = { ...options, xaxis: { categories: labels } };
  const series = [{ data: data, name: title }];
  return (
    <ApexCharts
      options={options}
      series={series}
      type={"bar"}
      height={width * 0.75}
      width={width}
    />
  );
}

```

The code above was created by adapting the code in [https://apexcharts.com/docs/react-charts/](https://apexcharts.com/docs/react-charts/) as shown below: 

```
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
```

- The above code was taken from apexcharts documentation
- This code was used because we needed a resuable chart component for our visual analytics dashboard feature.
- In this case, we have modified the code in such a way it suits the users' expectation in visualising data in our dashboard.


### backend/main.go

*Lines  22 - 72*

```
func main() {
	configs.ConnectDB()

	router := gin.Default()

	router.Use(middlewares.CorsMiddleware())

	// public routes. No need to add Authorization header to request these routes. The API would look like this: http://localhost:8080/pub/
	public := router.Group("/pub")
	public.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"resp": "Hello World without JWT token"})
	})
	public.POST("/login", api.Login)
	public.POST("/register", api.Register)
	public.POST("/contactUs", api.ContactUs)

	// protected routes. For this routes you need to add Authorization header which contains JWT token. The API would look like this: http://localhost:8080/api/
	protected := router.Group("/api")
	protected.Use(middlewares.JwtAuthMiddleware())
	protected.GET(("/"), func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"resp": "Hello World with JWT token"})
	})

	protected.POST("/createJob", api.CreateJob)
	protected.GET("/getJobs", api.GetJobs)
	protected.GET("/getJob/:id", api.GetJobById)
	protected.PUT("/updateJob", api.UpdateJob)
	protected.DELETE("/deleteJob/:id", api.DeleteJob)
	router.GET("/getJobsByCompany/:companyName", api.GetJobsByCompany)

	// create a new route for getting jobs based on radius and latitude and longitude. Here the latitude and longitude will be in passed in query params
	protected.GET("/getJobByRadius/:lat/:lng", api.GetJobByRadius)

	protected.POST("/seeker", api.AddSeeker)
	protected.PUT("/seeker", api.UpdateSeekerById)
	protected.GET("/seeker/:id", api.GetSeekerById)

	protected.POST("/employer", api.AddEmployer)
	protected.PUT("/employer", api.UpdateEmployerById)
	protected.GET("/employer/:id", api.GetEmployerById)
	protected.GET("/employerByUserId/:id", api.GetEmployerByUserId)
	protected.GET("/getJobApplicantIdsByJobId/:id", api.GetJobApplicantIdsByJobId)
	protected.POST("/apply", api.ApplyJob)
	protected.POST("/scheduleInterview", api.ScheduleInterview)
	protected.GET("/getEmployers", api.GetEmployers)

	protected.POST("/review", api.WriteReview)
	protected.GET("/getReview/:companyId", api.GetReviewByCompany)
	protected.GET("/getUser/:id", api.GetUserById)
	router.Run(":8080")
}


```

The code above was created by adapting the code in [https://www.twilio.com/blog/build-restful-api-using-golang-and-gin](https://www.twilio.com/blog/build-restful-api-using-golang-and-gin) as shown below: 

```
func serveApplication() {
    router := gin.Default()

    publicRoutes := router.Group("/auth")
    publicRoutes.POST("/register", controller.Register)
    publicRoutes.POST("/login", controller.Login)

    protectedRoutes := router.Group("/api")
    protectedRoutes.Use(middleware.JWTAuthMiddleware())
    protectedRoutes.POST("/entry", controller.AddEntry)
    protectedRoutes.GET("/entry", controller.GetAllEntries)

    router.Run(":8000")
    fmt.Println("Server running on port 8000")
}

```

- The above code was taken from twilio documentation
- This code was used because we needed to construct secure RESTful APIs.
- In this case, we have modified the code in such a way it suits the requirements of the endpoints that are demanded by our client-end pages.


### frontend/components/CModal/CModal.tsx

*Lines  7 - 36*

```

import React from "react"
import "./CModal.css"
import { Button } from "@mui/material"

interface CModalProps {
    children: React.ReactNode
    onClose: () => void,
    title: string
}

const CModal = (props: CModalProps) => {

    return (
        <div className="parentDiv">
            <div className="modalDismiss" onClick={props.onClose} />
            <div className="modalView">
                <div className="modalHeader">
                    <h3>{props.title}</h3>
                    <Button onClick={props.onClose} variant="text" className="bttnClose" >X</Button>
                </div>

                <div className="modalBody">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CModal


```

The code above was created by adapting the code in [https://mui.com/material-ui/react-modal/#basic-modal](https://mui.com/material-ui/react-modal/#basic-modal) as shown below: 

```
export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

```

- The above code was taken from materialUI documentation
- This code was used because we needed to create a modal component which has to be resuable.
- In this case, we have modified the code in such a way it will render a modal upon user event and gives a good user experience.

*Lines 26 - 72*

```
const chartOptions = {
          
        series: [{
          name: 'Q3 2022',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Q4 2022',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Q3 2023',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
          chart: {
            // type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Data Analysis', 'Marketing', 'Content Creation', 'Project Managment', 'Social Media Marketing', 'Accounting'],
          },
          yaxis: {
            title: {
              text: 'No. of Jobs'
            }
          },
          fill: {
            opacity: 1
          }
        },
         };
```

The code above was created by adapting the code in [apexcharts documentation](https://apexcharts.com/react-chart-demos/column-charts/basic/) as shown below: 

```
class ApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'Net Profit',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
              name: 'Revenue',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
              name: 'Free Cash Flow',
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
              },
              yaxis: {
                title: {
                  text: '$ (thousands)'
                }
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return "$ " + val + " thousands"
                  }
                }
              }
            },
          
          
          };
        }

      

        render() {
          return (
            

      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>
    

          );
        }
      }

      const domContainer = document.querySelector('#app');
      ReactDOM.render(React.createElement(ApexChart), domContainer);
```

- <!---How---> The code in [apexcharts](https://apexcharts.com/react-chart-demos/column-charts/basic/) was implemented by ChartComponent.
- <!---Why---> [apexcharts](https://apexcharts.com/react-chart-demos/column-charts/basic/)'s Code was used because this part of the code has the structure of chart options in the way how Chart component from ApexCharts library consume. Hence to know the structure of the data, this part of the code is used.
- <!---How---> [apexcharts](https://apexcharts.com/react-chart-demos/column-charts/basic/)'s Code was modified by replacing the hard coded data with data that is appropriate for my project.

*Repeat as needed*

### Header.tsx

*Lines 83 - 209*

```
 return (
    <AppBar position="sticky" sx={{ background: "white", color: "black" }}>
      <Container maxWidth="xl" style={{ maxWidth: "none" }}>
        {isHydrated && (
          <Toolbar disableGutters>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex", fontSize: "32px" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1.5rem",
                "&:hover": {
                  color: "inherit",
                },
              }}
            >
              NEXT JOB
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {NavOptions.map((page) => (
                  <MenuItem
                    key={page.label}
                    onClick={() => handleNavClick(page.route)}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              NEXT JOB
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: "row-reverse",
              }}
            >
              {navList.map((page) => (
                <Button
                  className={page.className || "nav-link"}
                  key={page.label}
                  onClick={() => handleNavClick(page.route)}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        )}
      </Container>
      <Snackbar
        open={snackBarVisible}
        autoHideDuration={6000}
        onClose={() => setSnackBarVisible(false)}
      >
        <Alert
          onClose={() => setSnackBarVisible(false)}
          sx={{ width: "100%" }}
          severity="info"
        >
          This feature is not available yet!
        </Alert>
      </Snackbar>
    </AppBar>
  );

```

The code above was created by adapting the code in [material-ui](https://mui.com/material-ui/react-app-bar/) as shown below: 

```
<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  
```

- <!---How---> The code in [material-ui](https://mui.com/material-ui/react-app-bar/) was implemented by refering the documentation of material-ui library.
- <!---Why---> [material-ui](https://mui.com/material-ui/react-app-bar/)'s Code was used because a navigation bar was required for our project
- <!---How---> [material-ui](https://mui.com/material-ui/react-app-bar/)'s Code was modified by replacing the hard coded values mentioned in the components and by changing the styles wherever required.




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

### Image Attributions:
<a href="https://www.freepik.com/free-photo/new-york-city-panorama_26740395.htm#query=huge%20building&position=2&from_view=search&track=ais">Image by TravelScape</a> on Freepik
