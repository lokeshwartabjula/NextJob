"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StarIcon from "@mui/icons-material/Star";
import moment from "moment";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    let value = (hash >> (i * 8)) & 0xff;
    value = Math.floor(value * 0.7); // limit the color intensity to create a "softer" color
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export default function JobCard(props: any) {
  const [jobData, setJob] = React.useState(props.jobData || null);
  return (
    <div>
      {jobData && (
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: stringToColor(jobData?.companyName) }}>
                {jobData?.companyName[0]}
              </Avatar>
            }
            title={jobData?.role}
            subheader={jobData?.date}
          />
          <CardContent>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BusinessIcon />
                  </ListItemIcon>
                  <ListItemText primary={jobData?.companyName} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary={jobData?.location} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MonetizationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary={jobData?.salaryRange} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={jobData?.rating} />
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
          <CardActions disableSpacing>
            <Typography variant="body2">
              {moment(jobData?.date).fromNow()}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginLeft: "auto" }}
            >
              Apply Now
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
