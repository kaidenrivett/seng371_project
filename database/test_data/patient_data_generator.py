import pip
import names
import csv
import random
from datetime import date, timedelta
from random_date_generator import *

def name_generator(generate_number):
    first_name = []
    last_name = []
    for i in range(generate_number):
        first_name.append(names.get_full_name().split()[0])
        last_name.append(names.get_full_name().split()[1])
    return first_name,last_name


# Write the health records to a CSV file
def fileOutput(health_records,record):
    with open('health_records.csv', mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=['First Name','Last Name','Patient ID', 'Age', 'Gender', 'Height', 'Weight','Medical Condition', 'Medication', 'Dosage', 'Department','Last Visit','Encounter Description'])
        writer.writeheader()
        for record in health_records:
            writer.writerow(record)
    
def main():
    generate_number = 100
    first_name , last_name = name_generator(generate_number)

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
    fileOutput(health_records,record)

if __name__ == "__main__":
    main()