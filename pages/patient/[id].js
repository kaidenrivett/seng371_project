import router from "next/router";
import {useState, useEffect} from "react";
import { Avatar, Button, Chip, Container, Grid, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material";
import {MonitorHeartIcon} from '@mui/icons-material';

export default function Patient() {
  // const [patient, setPatient] = useState(null);
  // const id = router.query.id;
  
  const testPatient = {
    firstName: "Bryan",
    lastName: "Taylor",
    patientId: 1,
    age: 76,
    gender: "Male",
    medicalConditions: ["Cancer", "Diabetes", "Asthma", "Heart Disease"],
    height: 5.8,
    weight: 150,
    medication: "Albuterol",
    dosage: 4,
    department: "medicine",
    bloodPressure: {
      systolic: 120,
      diastolic: 80,
      pulse: 60,
    },
    encounters: [
      {
        date: "2021-11-10",
        encounter: "Patient is doing well",
      },
      {
        date: "2021-10-10",
        encounter: "Patient is doing not well",
      }
    ],
    observations: [
      {
        date: "2021-10-20",
        observation: "Respiratory Rate",
        value: 12,
        unit: "breaths/min",
      },
      {
        date: "2021-10-10",
        observation: "Body Mass Index",
        value: 25,
        unit: "kg/m^2",
      },
    ]
  }
  const patient = testPatient;

  // useEffect(() => {
  //   fetch(`/api/patient/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPatient(data));
  // }, [id]);

  // useEffect(() => {
  //   setPatient(testPatient)
  // }, []);

  return (
    patient ? 
    <Container maxWidth="md" >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={8} sx={{borderRadius: "12px"}} className="p-6 my-2">
            {/* <Typography variant="h3">Patient Information</Typography> */}
            <Stack direction="row" className="p-6">
              <Avatar
                sx={{ width: 150, height: 150, margin: 2 }}
              />
              <Container sx={{marginTop: "auto", marginBottom: "auto"}}>
                <Typography
                  component="h3"
                  variant="h3"
                  gutterBottom
                  >
                    {`${patient.firstName} ${patient.lastName}`}
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle1"
                  gutterBottom
                >
                    Gender: {patient.gender}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  gutterBottom
                >
                    Age: {patient.age}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  gutterBottom
                >
                    Department: {patient.department}
                </Typography>
              </Container>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={4} alignItems="center">
          <Paper elevation={8} sx={{borderRadius: "12px", padding: 2, minHeight: "160px" }} className="p-6 my-2">
            <Typography variant="h6">Conditions</Typography>
            {patient.medicalConditions.map((condition) => (
              // eslint-disable-next-line react/jsx-key
              <Chip label={condition} color="primary" sx={{marginRight: 0.5, marginY: 0.25}}/>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={4} alignItems="center">
          <Paper elevation={8} sx={{borderRadius: "12px", padding: 2, minHeight: "160px"}} className="p-6 my-2">
            <Typography variant="h6">Blood Pressure</Typography>
            <Typography variant="h5">Systolic: {patient.bloodPressure.systolic}</Typography>
            <Typography variant="h5">Diastolic: {patient.bloodPressure.diastolic}</Typography>
            <Typography variant="h5">Pulse: {patient.bloodPressure.pulse}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} alignItems="center">
          <Paper elevation={8} sx={{borderRadius: "12px", padding: 2, minHeight: "160px"}} className="p-6 my-2">
            <Typography variant="h6">Measurements</Typography>
            <Typography variant="h5">{`Height: ${patient.height}'`}</Typography>
            <Typography variant="h5">{`Weight: ${patient.weight}lbs.`}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={8} sx={{borderRadius: "12px", padding: 1}} className="p-6 my-2">
            <Container>
              <Typography variant="h3">Observations</Typography>
              <List>
                {patient.observations.map((observation) => (
                  // eslint-disable-next-line react/jsx-key
                  <ListItem divider>
                    {/* <Typography variant="h6">{observation.observation}</Typography>
                    <Typography variant="subtitle1">{observation.date}</Typography> */}
                    <ListItemText primary={observation.observation} secondary={observation.date} />
                    <Typography variant="subtitle1">{`${observation.value} ${observation.unit}`}</Typography>
                  </ListItem>
                ))}
              </List>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={8} sx={{borderRadius: "12px", padding: 1}} >
            <Container>
              <Typography variant="h3">Encounters</Typography>
              <List>
                {patient.encounters.map((encounter) => (
                  // eslint-disable-next-line react/jsx-key
                  <ListItem divider>
                    {/* <Typography variant="h6">{encounter.encounter}</Typography>
                    <Typography variant="subtitle1">{encounter.date}</Typography> */}
                    <ListItemText primary={encounter.encounter} secondary={encounter.date} />
                  </ListItem>
                ))}
              </List>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={8} sx={{borderRadius: "12px", padding: 1}} >
            <Container>
              <Typography variant="h3">Medication</Typography>
              <Button variant="outlined" sx={{my: 2}}>
                <Typography variant="h6">{patient.medication}</Typography>
              </Button>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Container> : null
  );
}