import pip
import names
import csv
import random
from datetime import date, timedelta
from random_date_generator import *
from user_data_generator import *

def Name_generator(generate_number):
    first_name = []
    last_name = []
    for i in range(generate_number):
        first_name.append(names.get_full_name().split()[0])
        last_name.append(names.get_full_name().split()[1])
    return first_name,last_name


# Write the health records to a CSV file
def FileOutput(health_records):
    with open('health_records.csv', mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=['First Name','Last Name','Patient ID', 'Age', 'Gender', 'Height', 'Weight','Medical Condition', 'Medication', 'Dosage', 'Department','Last Visit','Encounter Description'])
        writer.writeheader()
        for record in health_records:
            writer.writerow(record)


def GetRecordsForAppUsers(health_records):
    print(health_records[0])
    print(health_records[1])
    print(health_records[2])

    patient_collections_appusers = []
    min_length_password = 6
    department = ['medicine', 'surgery', 'gynaecology',
            'obstetrics','paediatrics','eye','ENT',
            'dental', 'orthopaedics', 'neurology', 'cardiology',
            'psychiatry', 'skin']
    i = 0
    for record in health_records:  
        element = {}
        element['First Name'] = record['First Name']
        element['Last Name'] = record['Last Name']
        element['Key'] = keyGenerator(record['First Name'],record['Last Name'])
        element['Username'] = get_random_string(min_length_password)
        element['Password'] = get_random_string(min_length_password)
        element['Age'] = record['Age']
        element['Gender'] = record['Gender']
        element['Role'] = 'Patient'
        element['Department'] = random.choice(department)
        patient_collections_appusers.append(element)
        i = i + 1
    print(patient_collections_appusers)
    return patient_collections_appusers

# append patient records to app_users collections
def AppendToUserCollections(health_records):
    # Get patient records based on app_users format
    patient_collections_appusers = GetRecordsForAppUsers(health_records)
    with open('app_users.csv', mode='a', newline='') as file:
        writer = csv.DictWriter(file,fieldnames=['First Name','Last Name','Key','Username','Password','Age', 'Gender','Role','Department'])
        writer.writeheader()
        for record in patient_collections_appusers:
            writer.writerow(record)

def BuildRecords():
    generate_number = 100
    first_name , last_name = Name_generator(generate_number)

    # Define the list of possible medical conditions
    conditions = ['Diabetes', 'High Blood Pressure', 'Asthma', 'Arthritis', 'Cancer', 'Depression']

    # Define the list of possible medications
    medications = ['Metformin', 'Lisinopril', 'Albuterol', 'Ibuprofen', 'Tamoxifen', 'Sertraline']
    department = ['medicine', 'surgery', 'gynaecology',
                'obstetrics','paediatrics','eye','ENT',
                'dental', 'orthopaedics', 'neurology', 'cardiology',
                'psychiatry', 'skin'] 

    # TODO add measurements (height and weight)  
    height = ['5.0\'', '5.1\'','5.2\'','5.3\'','5.4\'','5.5\'','5.6\'','5.7\'','5.8\'','5.9\'','6.0\'','6.1\'','6.2\'']
    weight = ['100lbs','110lbs','120lbs','130lbs','140lbs','150lbs']

    # TODO add encounters columns (data, description)
    # date_str = date_generation(date(2022,1,1), date(2022,12,31))
    # print('date string is: ' + date_str)
    encounter_description = ['Encounter for symptom','General examination of patient (procedure)','Consultation for treatment','Urgent care clinic (procedure)','Patient encounter procedure','Well child visit (procedure)','Emergency room admission (procedure)' ]
    # Generate health records for 100 patients
    health_records = []
    for i in range(1, generate_number+1):
        record = {}
        record['First Name'] = first_name[i-1]
        record['Last Name'] = last_name[i-1]
        record['Patient ID'] = i
        record['Age'] = random.randint(18, 90)
        record['Gender'] = random.choice(['Male', 'Female'])
        record['Height'] = random.choices(height, weights=(1,2,4,4,5,5,14,25,15,10,6,5,5),k=1)[0] # probability distribution 
        record['Weight'] = random.choice(weight)
        record['Medical Condition'] = random.choice(conditions)
        record['Medication'] = random.choice(medications)
        record['Dosage'] = random.randint(1, 4)
        record['Department'] = random.choice(department)
        record['Last Visit'] = date_generation(date(2022,1,1), date(2022,12,31))
        record['Encounter Description'] = random.choice(encounter_description)
        health_records.append(record)
    
    return health_records

def main():
    health_records = BuildRecords()
    FileOutput(health_records)
    AppendToUserCollections(health_records)

if __name__ == "__main__":
    main()