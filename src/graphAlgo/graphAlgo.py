import pandas as pd
from matplotlib import pyplot as plt
import numpy as np

# Graphs to make:

# 1. age, gender, salary, role

# 2. gender, salary, length of service (seniority)

# receive a request successfully for this test case:
# 3. female population over the years
# returns graph png to frontend, to display
# return a csv, with only employee info in graph
# return a string with recommendations

############################################
#GRAPH 3. female population over the years #
############################################

# read the csv file
df = pd.read_csv('./src/graphAlgo/femaledata.csv')

# df is a dictionary
# df_list turns dictionary into list of tuples
df_list = list(df.items()) 

# extract the year column of the csv file
year = df["year"]
first_year = df["year"][0]
last_year = df["year"][len(df["year"])-1]

list_fProfessions = []
# make a graph of year vs fprofessionals
fig, ax = plt.subplots(figsize=(10, 7))
for i in range(1, len(df_list)):
    list_fProfessions.append(df_list[i][0])
    ax.plot(year, df_list[i][1], lw=2)
plt.legend(list_fProfessions, loc='upper left')
ax.set_xlabel('Year', fontsize=14)
ax.set_ylabel('Female Professionals in Workplace (%)', fontsize=14)
ax.set_title("Female Percentage in Workplace (" + str(first_year) + " - " + str(last_year) + ")", fontsize=14)


# this save the graph into a png file at specified path
plt.savefig("./src/images/FemalePercentageOverYearsGraph.png")


#################################################
#SAMPLE GRAPH. Work life balance over seniority #
#################################################

df2 = pd.read_csv('./src/graphAlgo/EmployeeDataSet.csv')

# extract the year column of the csv file
# df is a dictionary
# df_list turns dictionary into list of tuples
df2_list = list(df.items()) 
len_service_f = []
len_service_m = []
    
wl_list_f = []
wl_list_m = []
# make a graph of year vs fprofessionals
fig2, ax2 = plt.subplots(figsize=(10, 7))
for i in range(1, len(df2)):
    if df2["gender"][i] == 'm':
        len_service_m.append(df2["length_of_service"][i])
        wl_list_m.append(df2["WL_balance"][i])
    elif df2["gender"][i] == 'f':
        len_service_f.append(df2["length_of_service"][i])
        wl_list_f.append(df2["WL_balance"][i])

len_service_m = np.array(len_service_m)
len_service_f = np.array(len_service_f)
wl_list_f = np.array(wl_list_f)
wl_list_m = np.array(wl_list_m)

(a, b), (SSE,), *_ = np.polyfit(len_service_m, wl_list_m, deg=1, full=True)
(a2, b2), (SSE,), *_  = np.polyfit(len_service_f, wl_list_f, deg=1, full=True)

# plot the scatter points on the graph
ax2.scatter(len_service_m, wl_list_m, alpha=0.5)
ax2.scatter(len_service_f, wl_list_f, alpha=0.5)

#plot the line of best fit
ax2.plot(len_service_m, a*len_service_m+b, linestyle='-.')
ax2.plot(len_service_f, a2*len_service_f+b2, linestyle='-.')

# labelling graph 
plt.legend(["Male", "Female", "line-best-fit male",  "line-best-fit female"], loc='upper left')
ax2.set_xlabel('Length of service (Year)', fontsize=14)
ax2.set_ylabel('Work-Life Balance (1-4)', fontsize=14)
ax2.set_title("Work-Life Balance over time", fontsize=14)

# bottom text
txt1stat=(f'slope = {round(a, 3)}, int = {round(b, 3)}, SSE = {round(SSE, 3)}\n')
txt1="Line of best fit - male employees: "

txt2stat=(f'slope = {round(a2, 3)}, int = {round(b2, 3)}, SSE = {round(SSE, 3)}\n')
txt2="Line of best fit - female employees: "

text = txt1 + txt1stat + txt2 + txt2stat
plt.figtext(0.5, 0.01, text , wrap=True, horizontalalignment='center', fontsize=12)
plt.subplots_adjust(bottom = 0.18)
plt.show()

# Graph 3: female vs male counts in different sectors

