import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import CallIcon from "@mui/icons-material/Call";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import GroupsIcon from "@mui/icons-material/Groups";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



// Styling the line which connects the steps in stepper

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(100,200,300) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);


// Styling the icons of stepper

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "orange",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "green",
  },
});


// Function to set the stepper icons

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <CallIcon />,
    2: <ApartmentIcon />,
    3: <ImportantDevicesIcon />,
    4: <GroupsIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
    marginTop: "10%",
    marginBottom: "20%",
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop: "20px",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


// Function to get the different steps 
function getSteps() {
  return ["Telephonic Round", "Onsite", "Low Level Design", "Hiring Manager"];
}


// Function which provides the content of each step using an object
function getStepContent(step) {
  const StepContent = {
    1: {
      name: "Telephonic Round",
      time: "2 Apr, 21:00-21.30",
      panel: "Senior Software Engineer",
      link: "https://meet.google.com/ibh-fkcu-uzs",
    },
    2: {
      name: "Onsite Interview Round",
      time: "10 Apr, 14:15-15.00",
      panel: "Engineering Manager",
      link: "HSR Layout, Bengaluru, Karnataka 560102",
    },
    3: {
      name: "Low Level Design Interview Round",
      time: "13 Apr, 18:30-19.30",
      panel: "Software Development Engineer 3",
      link: "https://meet.google.com/ibh-fkcu-uzs",
    },
    4: {
      name: "Hiring Manager Interview Round",
      time: "20 Apr, 13:00-13.30",
      panel: "Hiring Manager",
      link: "https://meet.google.com/ibh-fkcu-uzs",
    },
  };

  switch (step) {
    case 0:
      return (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "2px solid #E0E0E0",
            display: "flex",
            width: "550px",
            flexDirection: "column",
            height: "180px",
            boxShadow: "2px 2px #9E9E9E"
          }}
        >
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h3>{StepContent[1].name}</h3>
        </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0"}}>
            <div style={{marginLeft: "5vh"}}>
              <b>Time</b>
            </div>
            <div style={{marginRight: "8vh"}}>
              {StepContent[1].time}
              </div>          
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0", marginTop: "20px"}}>
            <div style={{marginLeft: "5vh"}}>
              <b>Panel</b>
            </div>
            <div style={{marginRight: "6vh"}}>
              {StepContent[1].panel}
              </div>          
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0", marginTop: "20px"}}>
            <div style={{marginLeft: "1vh"}}>
              <b>Video conferencing link</b>
            </div>
            <div style={{marginRight: "1vh"}}>
              <a href={StepContent[1].link} style={{textDecoration: "none", color: "#00BFFF"}}>{StepContent[1].link}</a>
              </div>          
          </div>
        </div>
      );
    case 1:
      return (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E0E0E0",
            display: "flex",
            width: "550px",
            flexDirection: "column",
            height: "180px",
            boxShadow: "2px 2px #9E9E9E"

          }}
        >
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h3>{StepContent[2].name}</h3>
        </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0"}}>
            <div style={{marginLeft: "5vh"}}>
              <b>Time</b>
            </div>
            <div style={{marginRight: "8vh"}}>
              {StepContent[2].time}
              </div>          
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0", marginTop: "20px"  }}>
            <div style={{marginLeft: "5vh"}}>
              <b>Panel</b>
            </div>
            <div style={{marginRight: "8vh"}}>
              {StepContent[2].panel}
              </div>          
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0", marginTop: "20px"}}>
            <div style={{marginLeft: "4vh"}}>
              <b>Address</b>
            </div>
            <div style={{marginRight: "1vh"}}>
              {StepContent[2].link}
              </div>          
          </div>
        </div>
      );
    case 2:
      return (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E0E0E0",
            display: "flex",
            width: "550px",
            flexDirection: "column",
            height: "180px",
            boxShadow: "2px 2px #9E9E9E"

          }}
        >
           <div style={{display: "flex", justifyContent: "center", alignItems: "center", }}>
          <h3>{StepContent[3].name}</h3>
        </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0"}}>
            <div style={{marginLeft: "5vh"}}>
              <b>Time</b>
            </div>
            <div style={{marginRight: "8vh"}}>
              {StepContent[3].time}
              </div>          
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0", marginTop: "20px"  }}>
            <div style={{marginLeft: "5vh"}}>
              <b>Panel</b>
            </div>
            <div style={{marginRight: "4vh"}}>
              {StepContent[3].panel}
              </div>          
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0", marginTop: "20px"}}>
            <div style={{marginLeft: "4vh"}}>
              <b>Video conferencing link</b>
            </div>
            <div style={{marginRight: "3vh"}}>
            <a href={StepContent[3].link} style={{textDecoration: "none", color: "#00BFFF"}}>{StepContent[3].link}</a>
              </div>          
          </div>
        </div>
      );
    case 3:
      return (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E0E0E0",
            display: "flex",
            width: "550px",
            flexDirection: "column",
            height: "180px",
            boxShadow: "2px 2px #9E9E9E"

          }}
        >
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", }}>
          <h3>{StepContent[4].name}</h3>
        </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0"}}>
            <div style={{marginLeft: "5vh"}}>
              <b>Time</b>
            </div>
            <div style={{marginRight: "8vh"}}>
              {StepContent[4].time}
              </div>          
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0", marginTop: "20px"  }}>
            <div style={{marginLeft: "5vh"}}>
              <b>Panel</b>
            </div>
            <div style={{marginRight: "9vh"}}>
              {StepContent[4].panel}
              </div>          
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #E0E0E0", marginTop: "20px"}}>
            <div style={{marginLeft: "1vh"}}>
              <b>Video conferencing link</b>
            </div>
            <div style={{marginRight: "3vh"}}>
            <a href={StepContent[4].link} style={{textDecoration: "none", color: "#00BFFF"}}>{StepContent[4].link}</a>
              </div>          
          </div>
        </div>
      );

    default:
      return (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E0E0E0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "500px",
          }}
        >
          <p>
            You're done with all your interview rounds, We will be in touch with
            you. Please keep an eye on your email
          </p>
        </div>
      );
  }
}


// Main function
function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
        style={{ backgroundColor: "#FAFAFA" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E0E0E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "550px",
                  height: "180px",
                  marginLeft: "20px",
                  boxShadow: "2px 2px #9E9E9E"

                }}
              >
                <h5 style={{marginLeft: "20px"}}>
                  You're done with all your interview rounds, We will get
                  touch with you. Please keep an eye on your email inbox.
                </h5>
              </div>
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
