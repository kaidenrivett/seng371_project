import router from "next/router";
import {useState, useEffect} from "react";
import { Avatar, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { padding } from "@mui/system";

export default function Patient() {
  const [patient, setPatient] = useState(null);
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

  // useEffect(() => {
  //   fetch(`/api/patient/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPatient(data));
  // }, [id]);

  useEffect(() => {
    setPatient(testPatient)
  }, []);

  return (
    <Container maxWidth="md" >
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Paper elevation={8} sx={{borderRadius: "12px"}} className="p-6 my-2">
          {/* <Typography variant="h3">Patient Information</Typography> */}
          <Stack direction="row" className="p-6">
            <Avatar
              alt={patient.firstName ?? ''}
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
                  {patient.id}
              </Typography>
              <Typography
                component="p"
                variant="p"
                gutterBottom
              >
                  {patient.age}
              </Typography>
            </Container>
          </Stack>
        </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper elevation={8} sx={{borderRadius: "12px"}} >
            <Typography variant="h1">Patient2</Typography>
            {patient && (
                <Typography variant="h2">{`${patient.firstName} ${patient.lastName}`}</Typography>
            )}
        </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}