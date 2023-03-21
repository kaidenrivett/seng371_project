import router from "next/router";
import {useState, useEffect} from "react";
import { Avatar, Button, Chip, Container, Grid, List, ListItem, ListItemText, Paper, Stack, Typography, FormControlLabel, IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";


export default function PatientList({role, department}) {

    
    const [isDoctor, setIsDoctor] = useState(true);
    const [dept, setDept] = useState("");


    const PatientLink = ({index}) => {

        const handlePatientLink = () => {
            console.log(index);
        }

        return (
            <FormControlLabel 
                control={
                    <IconButton color="secondary" onClick={handlePatientLink}>
                        <PersonIcon style={{color: "blue"}} />
                    </IconButton>
                }
                />
        )
    }

    const columns = [
        {
            field: 'id',
            headerName: "Patient ID",
            width: 100
        },
        {
            field: 'First Name',
            headerName: 'First Name',
            width: 150
        },
        {
            field: 'Last Name',
            headerName: 'Last Name',
            width: 150
        },
        {
            field: 'Age',
            headerName: 'Age',
            width: 100
        },
        {
            field: 'Gender',
            headerName: 'Gender',
            width: 100
        },
        {
            field: 'Medical Condition',
            headerName: 'Medical Condition',
            width: 250
        },
        {
            field: 'Medication',
            headerName: 'Medication',
            width: 150
        },
        {
            field: 'Dosage',
            headerName: 'Dosage',
            width: 100
        },
        {
            field: 'Department',
            headerName: 'Department',
            width: 200
        },
        {
            field: "Actions",
            width: 90,
            renderCell: (params) => {
                return (
                    <div style={{cursor: "pointer"}}>
                        <PatientLink index={params.row.id} />
                    </div>
                )
            }
        }
    ]

    const rows = [
        {
            "First Name": "Richard",
            "Last Name": "Tibbert",
            "id": "2",
            "Age": "50",
            "Gender": "Male",
            "Medical Condition": "Arthritis",
            "Medication": "Metformin",
            "Dosage": "1",
            "Department": "cardiology"
        },
        {
            "First Name": "Kenneth",
            "Last Name": "Keen",
            "id": "3",
            "Age": "23",
            "Gender": "Female",
            "Medical Condition": "High Blood Pressure",
            "Medication": "Lisinopril",
            "Dosage": "1",
            "Department": "neurology"
        },
        {
            "First Name": "Neil",
            "Last Name": "Featherston",
            "id": "4",
            "Age": "34",
            "Gender": "Female",
            "Medical Condition": "High Blood Pressure",
            "Medication": "Tamoxifen",
            "Dosage": "1",
            "Department": "cardiology"
        },
        {
            "First Name": "Desiree",
            "Last Name": "Garfield",
            "id": "5",
            "Age": "63",
            "Gender": "Male",
            "Medical Condition": "Asthma",
            "Medication": "Ibuprofen",
            "Dosage": "3",
            "Department": "ENT"
        },
        {
            "First Name": "John",
            "Last Name": "Mcclurg",
            "id": "6",
            "Age": "85",
            "Gender": "Male",
            "Medical Condition": "Cancer",
            "Medication": "Sertraline",
            "Dosage": "2",
            "Department": "ENT"
        },
        {
            "First Name": "Kevin",
            "Last Name": "Uhlman",
            "id": "7",
            "Age": "46",
            "Gender": "Female",
            "Medical Condition": "High Blood Pressure",
            "Medication": "Lisinopril",
            "Dosage": "3",
            "Department": "skin"
        },
        {
            "First Name": "Robert",
            "Last Name": "Malone",
            "id": "8",
            "Age": "60",
            "Gender": "Male",
            "Medical Condition": "High Blood Pressure",
            "Medication": "Ibuprofen",
            "Dosage": "4",
            "Department": "medicine"
        },
        {
            "First Name": "Laura",
            "Last Name": "Martinez",
            "id": "9",
            "Age": "40",
            "Gender": "Male",
            "Medical Condition": "Depression",
            "Medication": "Ibuprofen",
            "Dosage": "3",
            "Department": "medicine"
        },
        {
            "First Name": "Doris",
            "Last Name": "Parker",
            "id": "10",
            "Age": "85",
            "Gender": "Male",
            "Medical Condition": "High Blood Pressure",
            "Medication": "Sertraline",
            "Dosage": "4",
            "Department": "skin"
        },
        {
            "First Name": "Michael",
            "Last Name": "Mosby",
            "id": "11",
            "Age": "56",
            "Gender": "Female",
            "Medical Condition": "Cancer",
            "Medication": "Metformin",
            "Dosage": "4",
            "Department": "orthopaedics"
        },
        {
            "First Name": "Susan",
            "Last Name": "Tucker",
            "id": "12",
            "Age": "22",
            "Gender": "Male",
            "Medical Condition": "Arthritis",
            "Medication": "Sertraline",
            "Dosage": "3",
            "Department": "dental"
        },
        {
            "First Name": "James",
            "Last Name": "Ramsey",
            "id": "13",
            "Age": "83",
            "Gender": "Male",
            "Medical Condition": "High Blood Pressure",
            "Medication": "Lisinopril",
            "Dosage": "2",
            "Department": "psychiatry"
        },
        {
            "First Name": "Emma",
            "Last Name": "Rutland",
            "id": "14",
            "Age": "32",
            "Gender": "Male",
            "Medical Condition": "High Blood Pressure",
            "Medication": "Lisinopril",
            "Dosage": "1",
            "Department": "neurology"
        },
        {
            "First Name": "Alice",
            "Last Name": "Lee",
            "id": "15",
            "Age": "65",
            "Gender": "Female",
            "Medical Condition": "Cancer",
            "Medication": "Sertraline",
            "Dosage": "1",
            "Department": "dental"
        },
        {
            "First Name": "Alice",
            "Last Name": "Frazier",
            "id": "16",
            "Age": "75",
            "Gender": "Male",
            "Medical Condition": "Diabetes",
            "Medication": "Ibuprofen",
            "Dosage": "3",
            "Department": "dental"
        },
        {
            "First Name": "Donn",
            "Last Name": "Edwards",
            "id": "17",
            "Age": "47",
            "Gender": "Male",
            "Medical Condition": "Depression",
            "Medication": "Tamoxifen",
            "Dosage": "3",
            "Department": "gynaecology"
        },
        {
            "First Name": "Catherine",
            "Last Name": "Ligon",
            "id": "18",
            "Age": "87",
            "Gender": "Female",
            "Medical Condition": "Depression",
            "Medication": "Ibuprofen",
            "Dosage": "4",
            "Department": "psychiatry"
        },
        {
            "First Name": "Linda",
            "Last Name": "Ortega",
            "id": "19",
            "Age": "31",
            "Gender": "Female",
            "Medical Condition": "Diabetes",
            "Medication": "Lisinopril",
            "Dosage": "4",
            "Department": "ENT"
        }     
    ]

    return (
        isDoctor ? 
        <Container maxWidth="xl" sx={{my: "2rem"}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={8} sx={{borderRadius: "12px"}} className="h-500 p-6 my-2">
                        <DataGrid
                            autoHeight={true} 
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 14
                                    }
                                },
                                filter: {
                                    filterModel: {
                                        items: [{field: "Department", operator: "contains", value: dept}]
                                    }
                                }
                            }}
                            pageSize={10}
                        />

                    </Paper>
                </Grid>
            </Grid>
        </Container> : "You are not permitted to view this page."
    )
}