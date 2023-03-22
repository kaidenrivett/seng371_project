import pip
import names
import csv
import random

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
        writer = csv.DictWriter(file, fieldnames=['First Name','Last Name','Patient ID', 'Age', 'Gender', 'Medical Condition', 'Medication', 'Dosage', 'Department'])
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
    # Generate health records for 100 patients
    health_records = []
    for i in range(1, generate_number+1):
        record = {}
        record['First Name'] = first_name[i-1]
        record['Last Name'] = last_name[i-1]
        record['Patient ID'] = i
        record['Age'] = random.randint(18, 90)
        record['Gender'] = random.choice(['Male', 'Female'])
        record['Medical Condition'] = random.choice(conditions)
        record['Medication'] = random.choice(medications)
        record['Dosage'] = random.randint(1, 4)
        record['Department'] = random.choice(department)
        health_records.append(record)
    fileOutput(health_records,record)

if __name__ == "__main__":
    main()