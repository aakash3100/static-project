def read_feedback_files(file_paths):
    feedback_data = []
    for file_path in file_paths:
        try:
            with open(file_path, 'r') as file:
                for line in file:
                    feedback_data.append(line.strip())
        except FileNotFoundError:
            print(f"Error: File '{file_path}' not found.")
            continue
    return feedback_data

def process_feedback_data(feedback_data):
    total_entries = len(feedback_data)
    total_rating = 0
    formatted_feedbacks = []

    for feedback in feedback_data:
        try:
            parts = feedback.split(': ')
            name = parts[0]
            rating_comment = parts[1].split(' - ')
            rating = int(rating_comment[0])
            comment = rating_comment[1]

            total_rating += rating

            formatted_feedbacks.append(f"{name}: {rating} - {comment}")
        except (IndexError, ValueError):
            print(f"Error processing feedback: {feedback}")

    average_rating = total_rating / total_entries if total_entries > 0 else 0
    return total_entries, average_rating, formatted_feedbacks

def write_summary_file(total_entries, average_rating, formatted_feedbacks, output_file):
    with open(output_file, 'w') as file:
        file.write(f"Total Feedback Entries: {total_entries}\n")
        file.write(f"Average Rating: {average_rating:.2f}\n\n")
        file.write("Feedbacks:\n")
        for feedback in formatted_feedbacks:
            file.write(f"{feedback}\n")

def main():

    print("Please enter the file paths for the three feedback files:")
    file1 = input("Path for feedback1.txt: ").strip()
    file2 = input("Path for feedback2.txt: ").strip()
    file3 = input("Path for feedback3.txt: ").strip()

    input_files = [file1, file2, file3]
    output_file = 'feedback_summary.txt'


    feedback_data = read_feedback_files(input_files)

    total_entries, average_rating, formatted_feedbacks = process_feedback_data(feedback_data)

    write_summary_file(total_entries, average_rating, formatted_feedbacks, output_file)

    print(f"Summary written to '{output_file}'.")

if __name__ == "__main__":
    main()
