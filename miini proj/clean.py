import pandas as pd

def load_data(file_path):
    """
    Load data from a CSV file.
    """
    try:
        data = pd.read_csv(file_path)
        return data
    except FileNotFoundError:       
        print(f"Error: File not found at {file_path}")#file does not found
    except pd.errors.EmptyDataError:
        print("Error: The file is empty")#file is empty
    except pd.errors.ParserError:
        print("Error: Parsing the CSV file failed")# missing semicolon and incorrect keyword
    except Exception as e:
        print(f"An unexpected error occurred: {e}")#if an error occurs like divide by zero an a unexpected error occurred

def clean_data(data):
    """
    Clean the dataset by removing unnecessary columns.
    """
    try:
        # Drop unnecessary columns
        data_cleaned = data.drop(columns=['index', 'Patient Id'])
        return data_cleaned
    except KeyError as e:
        print(f"Error: {e}")#if an columns doesn't exit this error occurred
    except Exception as e:
        print(f"An unexpected error occurred during data cleaning: {e}")#if an error occurs like divide by zero an a unexpected error occurred


def save_data(data, file_path):
    """
    Save the cleaned data to a new CSV file.
    """
    try:
        data.to_csv(file_path, index=False)
        print(f"Cleaned data saved to {file_path}")#if it work to save data file else it occurr error
    except Exception as e:
        print(f"An error occurred while saving the file: {e}")

# File paths
input_file_path = 'cancer patient data sets.csv'#where the original data is stored
output_file_path = 'cleaned_cancer_patient_data.csv'#where we save clean data

# Load data
data = load_data(input_file_path)#load data in input file
if data is not None:#check if data is load successfully
    # Clean data
    cleaned_data = clean_data(data)#check if data clean  is successfully
    if cleaned_data is not None:
        # Save cleaned data
        save_data(cleaned_data, output_file_path)#save the clean data to the output file 
