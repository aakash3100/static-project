import pandas as pd

df= pd.read_csv('clean_covid_data.csv')
print(df)
print(df.isna().sum())
print(df.duplicated().sum())
print(df.info())
print(df.duplicated().sum())
print(df.dropna(inplace=True))
print(df.isna().sum())
