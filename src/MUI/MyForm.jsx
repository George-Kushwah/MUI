import {
  Grid,
  Paper,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Switch,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FileUploadIcon from "@mui/icons-material/FileUpload";
function MyForm() {
  const [value, setValue] = React.useState("option1");
  const [chec, setcheck] = React.useState(false);
  const handleChange = () => {
    setcheck(!chec);
  };
  return (
    <>
      <div style={{ padding: "25px", width: "900px" }}>
        <Paper elevation={3}>
          <Grid
            container
            padding={"25px"}
            spacing={2}
            alignItems={"center"}
            display={"flex"}
            rowSpacing={2}
          >
            <Grid item size={{ lg: 2 }}>
              <Typography variant="subtitle1">Name</Typography>
            </Grid>
            <Grid item size={{ lg: 4 }}>
              <TextField label="Type Name" size="small" />
            </Grid>
            <Grid item size={{ lg: 2 }}>
              <Typography variant="subtitle1">Password</Typography>
            </Grid>
            <Grid item size={{ lg: 4 }}>
              <TextField
                label="Type Name"
                size="small"
                helperText="Don't share anyone"
              />
            </Grid>
            <Grid item size={{ lg: 2 }}>
              <Typography variant="subtitle1">City</Typography>
            </Grid>
            <Grid item size={{ lg: 4 }}>
              <TextField label="Type Name" size="small" />
            </Grid>
            <Grid item size={{ lg: 2 }}>
              <Typography variant="subtitle1">Gender</Typography>
            </Grid>
            <Grid item size={{ lg: 4 }}>
              <RadioGroup
                row
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Grid>
            <Grid item size={{ lg: 2 }}>
              <Typography variant="subtitle1">Materail Status</Typography>
            </Grid>
            <Grid item size={{ lg: 4 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={chec}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label={chec ? "Marrid" : "Single"}
              />
            </Grid>
            <Grid item size={{ lg: 2 }}>
              <Typography variant="subtitle1">City</Typography>
            </Grid>
            <Grid item size={{ lg: 4 }}>
              <IconButton aria-label="send" color="error" size="large">
                <FileUploadIcon />{" "}
                <Typography variant="subtitle1">Upload File</Typography>
              </IconButton>
            </Grid>
            <Grid item size={{ lg: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<ArrowForwardIosIcon />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default MyForm;
