import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import JobListCard from "../components/JobListCard";

const JobList = () => {
  return (
    <>
      <Navbar />
      <Box display="flex" padding={"20px 50px"} gap={1}>
        <Stack
          flex={1}
          bgcolor="#f0f5f0"
          borderRadius="10px"
          padding="20px"
          spacing={1}
        >
          <Typography>Filter Jobs</Typography>
          <TextField placeholder="Search by job description" />
          <TextField placeholder="Search by location" />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Full Time Only" />
          </FormGroup>
        </Stack>
        <Stack flex={3} spacing={1}>
          <JobListCard />
          <JobListCard />
          <JobListCard />
          <JobListCard />
          <JobListCard />
          <JobListCard />
        </Stack>
      </Box>
    </>
  );
};

export default JobList;
