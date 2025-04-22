import React from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AddIcon from "@mui/icons-material/Add";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
function Btn() {
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={3} direction={"row"}>
          <Button type="button" variant="contained" color="secondary">
            Submit
          </Button>
          <Button type="button" variant="outlined" color="success">
            Submit
          </Button>
          <Button type="button" variant="text">
            Submit
          </Button>
          <Button
            type="button"
            variant="contained"
            color="warning"
            size="large"
          >
            Submit
          </Button>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <Button
            type="button"
            variant="contained"
            color="warning"
            startIcon={<AirlineSeatReclineNormalIcon />}
          >
            Icon Button-1
          </Button>
          <Button
            type="button"
            variant="contained"
            color="warning"
            disableElevation
            disableRipple
            endIcon={<AirlineSeatReclineNormalIcon />}
          >
            {" "}
            Icon Button-2
          </Button>
          <IconButton aria-label="send" color="error" size="large">
            <AirlineSeatReclineNormalIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack direction={"row"}>
        <ButtonGroup variant="contained" size="medium" orientation="vertical">
          <Button>Submit</Button>
          <Button>Submit</Button>
          <Button>Submit</Button>
          <Button>Submit</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"}>
        <ToggleButtonGroup>
          <ToggleButton value={"bold"} aria-label="bold">
            <AddIcon />
          </ToggleButton>
          <ToggleButton value={"Italic"} aria-label="Italic">
            <AlignHorizontalLeftIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </div>
  );
}

export default Btn;
