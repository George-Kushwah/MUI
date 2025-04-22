import React from "react";
import { Typography } from "@mui/material";

function Typographytext() {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography component={"h1"} variant="h3">
        H3 Heading
      </Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>
      <Typography variant="subtitle1">Subtitle1 Heading</Typography>
      <Typography variant="subtitle2">Subtitle2 Heading</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Heading
      </Typography>
    </div>
  );
}

export default Typographytext;
