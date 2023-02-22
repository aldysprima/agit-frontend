import { LocationOn } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const JobListCard = () => {
  return (
    <Stack
      bgcolor={"#f0f5f0"}
      padding={"10px 30px"}
      spacing={3}
      borderRadius="15px"
    >
      <Box>
        <Typography fontSize="30px" fontWeight={500}>
          Frontend Engineer
        </Typography>
        <Box display="flex" width="200px" justifyContent="space-between">
          <Typography color="#8a8787">Full Time</Typography>
          <Box display="flex" gap={1}>
            <LocationOn />
            <Typography color="#8a8787">Remote</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography fontSize="20px" fontWeight={700}>
          PT. ALSPrime Inovasi Technology
        </Typography>
        <Typography>www.alsprime.com</Typography>
      </Box>
    </Stack>
  );
};

export default JobListCard;
