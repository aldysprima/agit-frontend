import { LocationOn } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const JobListCard = ({ position, handleClick }) => {
  return (
    <Stack
      bgcolor={"#f0f5f0"}
      padding={"10px 30px"}
      spacing={3}
      borderRadius="15px"
      sx={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <Box>
        <Typography fontSize="30px" fontWeight={500}>
          {position.title}
        </Typography>
        <Box display="flex" gap="30px">
          <Typography color="#8a8787">{position.type}</Typography>
          <Box display="flex" gap={1}>
            <LocationOn />
            <Typography color="#8a8787">{position.location}</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography fontSize="20px" fontWeight={700}>
          {position.company}
        </Typography>
        <Typography>
          {position.company_url
            ? position.company_url
            : "No Url Website Provided"}
        </Typography>
      </Box>
    </Stack>
  );
};

export default JobListCard;
