import { red } from "@mui/material/colors";
import "./App.css";
import { Typography, Button, TextField } from "@mui/material";
import Form from "./form";
import Childa from "./Child-a";
import Childb from "./Child-b";
import Paentmemo from "./Paent-memo";

const App = () => {
  return (
    <>
      {/* <Typography variant="h3" component={"h3"} sx={{ color: "red" }}>
        Hello Materail MUI
      </Typography>
      <Button variant="contained" color="success">
        Click Me
      </Button>
      <Button variant="text" color="secondary">
        Click Me
      </Button>
      <Button variant="outlined" color="warning" size="medium" disabled>
        Click Me
      </Button>
      <br></br>
      <br></br>
      <TextField type="text" placeholder="Enter " variant="standard" /> */}
      {/* <Form /> */}
      <Paentmemo />
      {/* <Childa />
      <Childb /> */}
    </>
  );
};

export default App;
