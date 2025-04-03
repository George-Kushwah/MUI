import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  FormLabel,
  RadioGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  Container,
  Typography,
  Rating,
  Grid,
} from "@mui/material";
export default function Form() {
  return (
    <>
      <Grid item>
        <Grid item={true} xs={12}>
          <Grid item={true} xs={3}>
            <TextField variant="standard" placeholder="Enter value" />
          </Grid>
          <Grid item={true} xs={3}>
            <TextField variant="standard" placeholder="Enter value" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container fullWidth item>
          <Grid item xs={12} sx={{ background: "red" }}>
            eeeeeee
          </Grid>
          <Grid item xs={12} sx={{ background: "green" }}>
            dddd
          </Grid>
        </Grid> */}

      {/* <Rating value={5}></Rating>
      <Button color="success" variant="contained">
        <AddCircleIcon />
        Hello
      </Button>

      <Container maxWidth="xl">
        <Typography variant="h2">fsdfdfsdfsd</Typography>
      </Container>
      <Dialog open={false}>
        <DialogTitle>Are you Sure</DialogTitle>
        <DialogContent>
          <Button>Add</Button>
          <Button>Add</Button>
        </DialogContent>
      </Dialog>
      <form>
        <TextField
          name="name"
          type="text"
          variant="standard"
          sx={{ margin: "05px" }}
        ></TextField>
        <TextField
          name="email"
          type="text"
          variant="standard"
          sx={{ margin: "05px" }}
        ></TextField>
        <TextField
          name="password"
          type="password"
          variant="standard"
          sx={{ margin: "05px" }}
        ></TextField>
        <FormGroup>
          <FormControlLabel
            label="I agree"
            control={<Checkbox defaultChecked onChange={() => alert()} />}
          ></FormControlLabel>
        </FormGroup>
        <br></br>
        <FormControl fullWidth>
          <InputLabel id="menu"> </InputLabel>
          <Select label="course">
            <MenuItem value="hello">Hello</MenuItem>
            <MenuItem value="hello">Hello</MenuItem>
            <MenuItem value="hello">Hello</MenuItem>
            <MenuItem value="hello">Hello</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <FormGroup>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender"></RadioGroup>
          <FormControlLabel
            value={"male"}
            label="male"
            control={<Radio />}
          ></FormControlLabel>
          <FormControlLabel
            value={"Female"}
            label="Female"
            control={<Radio />}
          ></FormControlLabel>
        </FormGroup>
      <br></br>
      <br></br>
      <br></br>
      <Button type="button" variant="contained">
          Click Me
        </Button>
      </form>
    </>
  );
}
