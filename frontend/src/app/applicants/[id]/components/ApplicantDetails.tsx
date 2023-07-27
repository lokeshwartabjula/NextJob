/*
  Author: Kruti Panchal
  Banner Id: B00930563
  email id: kr946702@dal.ca
*/

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import {
  Alert,
  ListItemIcon,
  Snackbar,
} from "@mui/material";
import { ApplicantsType } from "../(constants)/ApplicantInformation";
export default function JobDetails({
  applicantDataOpen,
  handleClose,
  applicantData,
}: {applicantDataOpen: boolean, handleClose: () => void, applicantData: ApplicantsType}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [responseMessage, setResponseMessage] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      {applicantData && (
        <Dialog
          fullScreen={fullScreen}
          open={applicantDataOpen}
          onClose={handleClose}
          aria-labelledby="applicant-details"
        >
          <DialogTitle>{`Applicant Details - ${applicantData.id}`}</DialogTitle>
          <DialogContent>
            <Card>
              <CardHeader
                title={applicantData.email}
                subheader={applicantData.phone}
              />

              <CardContent>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon sx={{ color: "#2159AA"}} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email"
                      secondary={applicantData.email}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Phone"
                      secondary={applicantData.phone}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Address"
                      secondary={`${applicantData.address1}, ${applicantData.address2}`}
                    />
                  </ListItem>

                  {applicantData.educations.map((edu: any, index: any) => (
                    <div key={index}>
                      <ListItem>
                        <ListItemIcon>
                          <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Education ${index + 1}`}
                          secondary={`${edu.degree} in ${edu.fieldOfStudy} from ${edu.school} (${edu.startDate} - ${edu.endDate})`}
                        />
                      </ListItem>
                    </div>
                  ))}

                  {applicantData.experiences.map((exp: any, index: any) => (
                    <div key={index}>
                      <ListItem>
                        <ListItemIcon>
                          <WorkIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Experience ${index + 1}`}
                          secondary={`${exp.title} at ${exp.company} (${exp.startDate} - ${exp.endDate}) in ${exp.location}`}
                        />
                      </ListItem>
                    </div>
                  ))}
                </List>
              </CardContent>
            </Card>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={isError ? "error" : "success"}
        >
          {responseMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
