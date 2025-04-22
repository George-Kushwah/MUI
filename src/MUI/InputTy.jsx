import {
  FormControlLabel,
  InputAdornment,
  Stack,
  Switch,
  TextField,
  Box,
  Rating,
} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import React from "react";

function InputTy() {
  return (
    <div>
      <Stack spacing={2}>
        <Stack spacing={2} direction={"row"}>
          <TextField variant="standard"></TextField>
          <TextField variant="outlined"></TextField>
          <TextField
            label={"Text Inut label"}
            variant="filled"
            color="secondary"
          ></TextField>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <TextField
            helperText="Do'nt share"
            label="Hello"
            variant="filled"
            required
          ></TextField>
          <TextField
            label="Kg Text"
            inputRef={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
          ></TextField>
        </Stack>
        <Box>
          <FormControlLabel
            label="Dark Mode"
            control={<Switch onChange={() => alert()} />}
          />
        </Box>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Rating
          value={5}
          precision={0.5}
          icon={<VolunteerActivismIcon />}
        ></Rating>
      </Stack>
    </div>
  );
}

export default InputTy;
