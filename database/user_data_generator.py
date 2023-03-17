import pip
import names
import csv
import random
import string

def get_random_string(min_length_password):
    # set string length btw min length to 10
    string_len = random.randint(min_length_password,10)
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(string_len))
    return result_str

def fileOutput(health_records, record):
    # Write the health records to a CSV file
    with open('app_users.csv', mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=['First Name','Last Name','Key','Username','Password','Age', 'Gender','Role'])
        writer.writeheader()
        for record in health_records:
            writer.writerow(record)
#first letter of first name + last name + random num btw (0 - 9)
def keyGenerator(first_name, last_name):
    return first_name[0] + last_name + "" + str(random.randint(1,99))


def main():
    first_name = []
    last_name = []
    generate_number = 100
    username_collections = []
    password_collections = []
    key_collections = []
    min_length_password = 6
    # Generate names create a 100 user sample data
    for i in range(generate_number):
        first_name.append(names.get_full_name().split()[0])
        last_name.append(names.get_full_name().split()[1])
        username = get_random_string(min_length_password)
        password = get_random_string(min_length_password)
        username_collections.append(username)
        password_collections.append(password)
        key = keyGenerator(names.get_full_name().split()[0], names.get_full_name().split()[1])
        key_collections.append(key)

    roles = ['Technician', 'Doctor', 'Patient']

    # Generate health records for 100 patients
    health_records = []
    for i in range(1, generate_number+1):
        record = {}
        record['First Name'] = first_name[i-1]
        record['Last Name'] = last_name[i-1]
        record['Key'] = key_collections[i-1]
        record['Username'] = username_collections[i-1]
        record['Password'] = password_collections[i-1]
        record['Age'] = random.randint(18, 90)
        record['Gender'] = random.choice(['Male', 'Female'])
        record['Role'] = random.choice(roles)
        health_records.append(record)
    fileOutput(health_records,record)

if __name__ == "__main__":
    main()




