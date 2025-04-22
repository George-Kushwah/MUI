import { Box, Grid, Paper } from "@mui/material";
import React from "react";

function Boxes() {
  return (
    <>
      <Paper elevation={6}>
        <Box component={"span"}>dfdsfffsdfs</Box>
        <Box
          display={"flex"}
          height={"100px"}
          width={"100px"}
          bgcolor="skyblue"
        ></Box>
        <Grid container my={4} spacing={2} rowSpacing={3} columnSpacing={5}>
          <Grid item xs={9} md={12}>
            <Box bgcolor="primary.light" p={2}>
              Item -1
            </Box>
          </Grid>
          <Grid item xs={9} md={12}>
            <Box bgcolor="primary.light" p={2}>
              Item -2
            </Box>
          </Grid>
          <Grid item xs={9} md={12}>
            <Box bgcolor="primary.light" p={2}>
              Item -3
            </Box>
          </Grid>
          <Grid item xs={9} md={12}>
            <Box bgcolor="primary.light" p={2}>
              Item -4
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Boxes;
