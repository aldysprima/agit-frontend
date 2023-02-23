import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../components/Navbar";
import JobListCard from "../components/JobListCard";
import { store } from "../store";

const JobList = () => {
  const { user, positions, fetchPositions } = store((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPositions();
  }, []);

  const handleClick = (id) => {
    navigate(`/job-detail/${id}`);
  };

  console.log(positions);
  return (
    <>
      <Navbar user={user} />
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
          {positions
            ? positions.map((position) => {
                return (
                  <JobListCard
                    key={position.id}
                    position={position}
                    handleClick={() => handleClick(position.id)}
                  />
                );
              })
            : null}
          {!positions && (
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography>No Data</Typography>
            </Box>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default JobList;
