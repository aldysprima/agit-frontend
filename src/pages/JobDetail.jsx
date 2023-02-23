import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { store } from "../store";
import { useParams } from "react-router-dom";
import HtmlParser from "html-react-parser";

const JobDetail = () => {
  const params = useParams();
  const { fetchPositionById, isLoading, position, user } = store(
    (state) => state
  );
  useEffect(() => {
    fetchPositionById(params.id);
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Stack
        justifyContent="center"
        alignItems="center"
        padding={"20px 50px"}
        spacing={2}
      >
        <Box
          component={"img"}
          src={position?.company_logo}
          width="200px"
          height="200px"
          alt="company logo"
        />
        <Typography fontSize="30px" fontWeight={700}>
          {position?.company}
        </Typography>
        <Box>
          <Typography fontSize="24px" fontWeight={500}>
            Description
          </Typography>
          <Typography>{HtmlParser(`${position?.description}`)}</Typography>
        </Box>
        <Box>
          <Typography fontSize="24px" fontWeight={500}>
            How to Apply
          </Typography>
          <Typography>{HtmlParser(`${position?.how_to_apply}`)}</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default JobDetail;
