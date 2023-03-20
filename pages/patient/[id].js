import router from "next/router";
import {useState, useEffect} from "react";
import { Avatar, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";

export default function Patient() {
  // const [patient, setPatient] = useState(null);
  // const id = router.query.id;
  
  const testPatient = {
    firstName: "Bryan",
    lastName: "Taylor",
    patientId: 1,
    age: 76,
    gender: "Male",
    medicalCondition: "Cancer",
    medication: "Albuterol",
    dosage: 4,
    department: "medicine"
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
          <Grid item xs={6}>
            <Paper elevation={8} sx={{borderRadius: "12px"}} className="p-6 my-2">
              <Container>
                <Typography variant="h3">Condition</Typography>
                {patient && (
                    <Typography variant="h4">{patient.medicalCondition}</Typography>
                )}
              </Container>
            </Paper>
          </Grid>
        <Grid item xs={6}>
          <Paper elevation={8} sx={{borderRadius: "12px"}} >
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