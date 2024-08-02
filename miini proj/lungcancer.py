import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

# Load the cleaned data
data_path = 'cleaned_cancer_patient_data.csv'
data = pd.read_csv(data_path)

# Convert 'Level' to numeric values for correlation calculation
level_mapping = {'Low': 1, 'Medium': 2, 'High': 3}
data['Level'] = data['Level'].map(level_mapping)

# Streamlit app
st.title('Cancer Patient Data Analysis')

# Sidebar for selecting features to visualize
st.sidebar.header('Visualization Settings')
features = st.sidebar.multiselect('Select features to visualize', options=data.columns[:-1])

# Display dataset
if st.checkbox('Show raw data'):
    st.write(data)

# Data summary
st.header('Data Summary')

# Basic statistics
st.subheader('Basic Statistics')
st.write(data.describe())

# Unique value counts
st.subheader('Unique Value Counts')
unique_counts = data.nunique()
st.write(unique_counts)

# Function to format autopct labels to avoid overlap
def func(pct, allvals):
    absolute = int(round(pct/100.*sum(allvals)))
    return f"{pct:.1f}%\n({absolute:d})"

# Plotting
if features:
    st.subheader('Feature Visualizations')
    
    for feature in features:
        st.write(f'Visualizations for {feature}')
        
        # Pie chart
        fig1, ax1 = plt.subplots()
        data[feature].value_counts().plot.pie(
            autopct=lambda pct: func(pct, data[feature].value_counts()), 
            ax=ax1, pctdistance=0.85, startangle=90)
        ax1.set_ylabel('')
        # Draw a circle at the center of pie to make it look like a donut
        centre_circle = plt.Circle((0,0),0.70,fc='white')
        fig1.gca().add_artist(centre_circle)
        st.pyplot(fig1)
        
        # Line graph
        fig2, ax2 = plt.subplots()
        ax2.plot(data.index, data[feature])
        ax2.set_xlabel('Index')
        ax2.set_ylabel(feature)
        st.pyplot(fig2)
else:
    st.write('Please select features from the sidebar to visualize.')

# Correlation heatmap
if st.checkbox('Show Correlation Heatmap'):
    st.subheader('Correlation Heatmap')
    fig, ax = plt.subplots()
    cax = ax.matshow(data.corr(), cmap='coolwarm')
    fig.colorbar(cax)
    plt.xticks(range(len(data.columns)), data.columns, rotation=90)
    plt.yticks(range(len(data.columns)), data.columns)
    st.pyplot(fig)

# Summary Paragraph
st.header('Summary')
num_rows, num_cols = data.shape
summary = f"The dataset contains {num_rows} rows and {num_cols} columns. The columns have various types of data, including categorical and numerical values. The 'Level' column, which originally contained categorical data ('Low', 'Medium', 'High'), was converted to numerical values for correlation analysis. The dataset's basic statistics and unique value counts provide an overview of the data's distribution and variety."
st.write(summary)
 