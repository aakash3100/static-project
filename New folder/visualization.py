
import pandas as pd
import matplotlib.pyplot as plt

def plot_total_cases(df):
    plt.figure(figsize=(10, 6))
    df.groupby('date').sum()[['confirmed', 'deaths', 'recovered']].plot()
    plt.title('Total Confirmed, Deaths, and Recovered Cases Over Time')
    plt.xlabel('Date')
    plt.ylabel('Number of Cases')
    plt.savefig('total_cases.png')

def plot_top_countries(df):
    top_countries = df.groupby('country').max().sort_values(by='confirmed', ascending=False).head(10)
    top_countries[['confirmed', 'deaths', 'recovered']].plot(kind='bar')
    plt.title('Top 10 Countries with the Highest Number of Cases')
    plt.xlabel('Country')
    plt.ylabel('Number of Cases')
    plt.savefig('top_countries.png')

def plot_daily_cases(df):
    df['daily_new_cases'] = df.groupby('country')['confirmed'].diff().fillna(0)
    df['growth_rate'] = df['daily_new_cases'].pct_change().fillna(0)
    plt.figure(figsize=(10, 6))
    df.groupby('date').sum()['daily_new_cases'].plot()
    plt.title('Daily New Cases Over Time')
    plt.xlabel('Date')
    plt.ylabel('Number of Cases')
    plt.savefig('daily_cases.png')

if __name__ == "_main_":
    df = pd.read_csv('clean_covid_data.csv')
    plot_total_cases(df)
    plot_top_countries(df)
    plot_daily_cases(df)