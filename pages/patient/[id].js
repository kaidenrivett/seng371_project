import { useRouter } from "next/router";
import {useState, useEffect} from "react";
import { Avatar, Button, Chip, Container, Grid, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material";
import {MonitorHeartIcon} from '@mui/icons-material';
import { authenticate } from "@lib/auth";

export default function Patient() {
  const [patient, setPatient] = useState(null);
  const { query } = useRouter();
  
  
  // const patient = testPatient;

  useEffect(() => {
    if(query.id !== undefined) {
      getPatient(query.id)
    }
  }, [query.id]);

  const getPatient = async (id) => {
    try{
        const res = await fetch("/api/patient/".concat(id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if(res.status === 200){
            setPatient(data[0]);
        }
    }catch(error){
        console.log("error occured:", error)
        return 
    }
}

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

export async function getServerSideProps(context) {
  return authenticate(context);
}
