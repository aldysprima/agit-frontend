import { useEffect, useState } from "react";
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
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [full_time, setFull_time] = useState(false);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleFullTime = () => {
    setFull_time(!full_time);
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/");
    }
    fetchPositions(description, location, full_time);
  }, [description, location, full_time]);

  const handleClick = (id) => {
    navigate(`/job-detail/${id}`);
  };

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
          <TextField
            placeholder="Search by job description"
            onChange={handleDescription}
          />
          <TextField
            placeholder="Search by location"
            onChange={handleLocation}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Full Time Only"
              onClick={handleFullTime}
            />
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
          {positions.length === 0 && (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="70vh"
            >
              <Typography>No Data</Typography>
            </Box>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default JobList;
