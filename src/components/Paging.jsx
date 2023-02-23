import React from "react";
import { Pagination, Box, Typography, useMediaQuery } from "@mui/material";

export const Paging = ({
  page,
  setPage,
  fetchData,
  fetchDataByKeyword,
  keyword,
  count,
}) => {
  return (
    <>
      <Pagination
        page={page}
        color="primary"
        count={Math.ceil(count / 10)}
        onChange={(event, value) => {
          setPage(value);
          if (keyword) {
            fetchDataByKeyword(keyword, value);
          } else if (!keyword) {
            fetchData(value);
          }
        }}
      />
    </>
  );
};
