"use client";

import ReviewCard from "./review-card";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  FormHelperText,
} from "@mui/material";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";
import Textarea from "@mui/joy/Textarea";

type Review = {
  name: string;
  review: string;
};

const data: Review[] = [
  { name: "John Doe", review: "This is a review" },
  { name: "Jane Doe", review: "This is another review" },
];

function App() {
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState({ name: "", review: "" });
  const [error, setError] = useState(false);

  const userName = "John Doe";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError(false);
  };

  const handleSubmit = () => {
    if (review.review.trim() === "") {
      setError(true);
    } else {
      alert(review.review);
      data.push(review);
      setReview({ name: "", review: "" });
      setOpen(false);
    }
  };

  const handleReviewChange = (e: any) => {
    if (e.target.value.trim() !== "") {
      setError(false);
    }
    setReview({ ...review, name: userName, review: e.target.value });
  };

  return (
    <>
      <Box>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#003060",
            paddingBottom: 10,
            paddingTop: 10,
          }}
          onClick={handleOpen}
        >
          <CreateIcon style={{ marginRight: 8 }} /> Write Review
        </Button>
      </Box>
      <Box>
        {data.map((item, index: number) => (
          <div style={{ width: 330 }}>
            <ReviewCard key={index} title={item.name} subheader={item.review} />
            {index !== data.length - 1 && <Divider />}
          </div>
        ))}
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Write a review</DialogTitle>
        <DialogContent>
          <Textarea
            name="review"
            placeholder="Write your review here..."
            maxRows={8}
            minRows={8}
            sx={{ width: 400 }}
            onChange={handleReviewChange}
            variant="soft"
            required={true}
            error={error}
          />
          {error && (
            <FormHelperText error={true}>
              This field cannot be empty
            </FormHelperText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default App;
