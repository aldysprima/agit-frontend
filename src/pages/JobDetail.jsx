import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

const JobDetail = () => {
  return (
    <>
      <Navbar />
      <Stack
        justifyContent="center"
        alignItems="center"
        padding={"20px 50px"}
        spacing={2}
      >
        <Box
          width="200px"
          height="200px"
          bgcolor="teal"
          borderRadius={"100px"}
        />
        <Typography fontSize="30px" fontWeight={700}>
          PT. ALSPrime Inovasi Technology
        </Typography>
        <Box>
          <Typography fontSize="24px" fontWeight={500}>
            Description
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus
            neque aperiam natus magni nemo alias laudantium amet, vitae
            quibusdam ipsa vero aliquid consectetur! Consequuntur iure aliquid
            delectus amet voluptate quidem ad ipsa repudiandae vitae. Dolor
            iusto accusantium laboriosam praesentium reprehenderit rerum
            blanditiis. Repudiandae nam ad possimus veniam, odio necessitatibus
            laudantium? Ullam a enim incidunt, earum iure optio quisquam non
            accusamus quaerat amet ut sunt, laborum corrupti fugit doloremque
            fugiat explicabo mollitia reiciendis. Expedita aliquid omnis
            eligendi exercitationem repudiandae quasi nisi ullam error non ab
            rerum temporibus, aliquam eum iure consequuntur eaque optio est
            delectus maiores qui. Eligendi dolorum minus corrupti similique
            optio, velit eius debitis exercitationem earum cupiditate omnis
            dolore amet nihil consectetur neque dolores inventore consequatur
            vel officia repellendus! Eum asperiores culpa quo mollitia ratione
            eveniet expedita, accusantium cupiditate repudiandae amet. Unde,
            tempora! Voluptas earum impedit ad possimus laboriosam quo nulla
            exercitationem, rem tenetur saepe officiis facere libero, incidunt
            odit animi! Cupiditate voluptates nobis est laudantium nulla
            dolores, possimus hic tempora. Iusto excepturi modi natus. Vel aut
            ducimus maxime eum facilis. Doloremque, sapiente. Maxime, non.
            Architecto eligendi ipsa distinctio suscipit rem ut ea sunt impedit
            harum tempora dolor deleniti dignissimos ipsam id, sapiente
            perferendis consequatur quidem a culpa?
          </Typography>
        </Box>
        <Box>
          <Typography fontSize="24px" fontWeight={500}>
            How to Apply
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus
            neque aperiam natus magni nemo alias laudantium amet, vitae
            quibusdam ipsa vero aliquid consectetur! Consequuntur iure aliquid
            delectus amet voluptate quidem ad ipsa repudiandae vitae. Dolor
            iusto accusantium laboriosam praesentium reprehenderit rerum
            blanditiis. Repudiandae nam ad possimus veniam, odio necessitatibus
            laudantium? Ullam a enim incidunt, earum iure optio quisquam non
            accusamus quaerat amet ut sunt, laborum corrupti fugit doloremque
            fugiat explicabo mollitia reiciendis. Expedita aliquid omnis
            eligendi exercitationem repudiandae quasi nisi ullam error non ab
            rerum temporibus, aliquam eum iure consequuntur eaque optio est
            delectus maiores qui. Eligendi dolorum minus corrupti similique
            optio, velit eius debitis exercitationem earum cupiditate omnis
            dolore amet nihil consectetur neque dolores inventore consequatur
            vel officia repellendus! Eum asperiores culpa quo mollitia ratione
            eveniet expedita, accusantium cupiditate repudiandae amet. Unde,
            tempora! Voluptas earum impedit ad possimus laboriosam quo nulla
            exercitationem, rem tenetur saepe officiis facere libero, incidunt
            odit animi! Cupiditate voluptates nobis est laudantium nulla
            dolores, possimus hic tempora. Iusto excepturi modi natus. Vel aut
            ducimus maxime eum facilis. Doloremque, sapiente. Maxime, non.
            Architecto eligendi ipsa distinctio suscipit rem ut ea sunt impedit
            harum tempora dolor deleniti dignissimos ipsam id, sapiente
            perferendis consequatur quidem a culpa?
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default JobDetail;
