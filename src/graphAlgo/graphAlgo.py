import pandas as pd
from matplotlib import pyplot as plt
import numpy as np

# Graphs to make:

# 1. Gender, Role
"""
purpose: ratio of each gender in a each department
role: aka department
gender: female and male each have their own slice in different colours

DATASET USED: EmployeeDataSet.csv
OUTPUT: GenderRoleHeadcountPieCharts.png

Extra: A variation of this would be to specify a sepcific department 
OUTPUT: GenderRoleFinance.png
"""

# 2. gender, average salary, role
"""
Bar graph
gender in two colours
average salary for each role

DATASET USED: EmployeeDataSet.csv
OUTPUT: SalaryGenderRole.png
"""
# 3. female population over the years

"""
line graph
each role has its own colour
y-axis: % of role population that is female

DATASET USED: femaledata.csv
OUTPUT: FemalePercentageOverYearsGraph.png
"""
# 4. WL balance, Gender, Seniority

"""
line graph, with lines of best fit
Gender: each gender has its own colour
y-axis: personal rating of work life balance
x-axis: # of years in the company (Seniority)

DATASET USED: EmployeeDataSet.csv
OUTPUT: WLSeniority.png
"""

# returns graph png to frontend, to display
# return a csv, with only employee info in graph
# return a string with recommendations



#################################################
#GRAPH 1. Gender, Role #
#################################################
# create a figure with subplots of each department

plt.style.use("fivethirtyeight")
# plot each pie chart in a separate subplot

slices1 = [50, 72]
labels1 = ['Female: 50', 'Male: 72']
slices2 = [40, 32]
labels2 = ['Female: 40', 'Male: 32']
slices3 = [63, 52]
labels3 = ['Female: 63', 'Male: 52']
slices4 = [21, 22]
labels4 = ['Female: 21', 'Male: 22']
slices5 = [34, 37]
labels5 = ['Female: 34', 'Male: 37']
slices6 = [45, 40]
labels6 = ['Female: 45', 'Male: 40']
explode = [0.1, 0]

f, axarr = plt.subplots(3, 2, figsize=(15, 12))

axarr[0,0].pie(slices1, labels=labels1, explode=explode, shadow=True,
        startangle=90, autopct='%1.1f%%',
        wedgeprops={'edgecolor': 'black'})
axarr[0,0].set_title("Tech")
axarr[0,0].axis('off')

axarr[0,1].pie(slices2, labels=labels2, explode=explode, shadow=True,
        startangle=90, autopct='%1.1f%%',
        wedgeprops={'edgecolor': 'black'})
axarr[0,1].set_title("Finance")
axarr[0,1].axis('off')

axarr[1,0].pie(slices3, labels=labels3, explode=explode, shadow=True,
        startangle=90, autopct='%1.1f%%',
        wedgeprops={'edgecolor': 'black'})
axarr[1,0].set_title("Sales")
axarr[1,0].axis('off')

axarr[1,1].pie(slices4, labels=labels4, explode=explode, shadow=True,
        startangle=90, autopct='%1.1f%%',
        wedgeprops={'edgecolor': 'black'})
axarr[1,1].set_title("Operations")
axarr[1,1].axis('off')

axarr[2,0].pie(slices5, labels=labels5, explode=explode, shadow=True,
        startangle=90, autopct='%1.1f%%',
        wedgeprops={'edgecolor': 'black'})
axarr[2,0].set_title("HR")
axarr[2,0].axis('off')

axarr[2,1].pie(slices6, labels=labels6, explode=explode, shadow=True,
        startangle=90, autopct='%1.1f%%',
        wedgeprops={'edgecolor': 'black'})
axarr[2,1].set_title("Analytics")
axarr[2,1].axis('off')

#plt.show()
plt.savefig("./src/images/GenderRoleHeadcountPieCharts.png")


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
#GRAPH 2. gender, average salary, role #
#################################################

df2 = pd.read_csv('./src/graphAlgo/EmployeeDataSet.csv')

# extract the year column of the csv file
# df is a dictionary
# df_list turns dictionary into list of tuples
df2_list = list(df.items()) 
    
#Sales & Marketing
sales_list_f = []
sales_list_m = []

#Operations
operations_list_f = []
operations_list_m = []

#Finance
finance_list_f = []
finance_list_m = []

#Procurement
proc_list_f = []
proc_list_m = []

#Analytics
analytics_list_f = []
analytics_list_m = []

#Technology
tech_list_f = []
tech_list_m = []

#HR
hr_list_f = []
hr_list_m = []

# make a graph of year vs fprofessionals
fig2, ax2 = plt.subplots(figsize=(20, 15))
for i in range(1, len(df2)):
    if df2["gender"][i] == 'm':
        if df2["department"][i] == "Sales & Marketing":
            sales_list_m.append(df2["salary"][i])
        elif df2["department"][i] == "Operations":
            operations_list_m.append(df2["salary"][i])
        elif df2["department"][i] == "Finance":
            finance_list_m.append(df2["salary"][i])
        elif df2["department"][i] == "Procurement":
            proc_list_m.append(df2["salary"][i])
        elif df2["department"][i] == "Analytics":
            analytics_list_m.append(df2["salary"][i])
        elif df2["department"][i] == "HR":
            hr_list_m.append(df2["salary"][i])
        else:
            tech_list_m.append(df2["salary"][i])
    elif df2["gender"][i] == 'f':
        if df2["department"][i] == "Sales & Marketing":
            sales_list_f.append(df2["salary"][i])
        elif df2["department"][i] == "Operations":
            operations_list_f.append(df2["salary"][i])
        elif df2["department"][i] == "Finance":
            finance_list_f.append(df2["salary"][i])
        elif df2["department"][i] == "Procurement":
            proc_list_f.append(df2["salary"][i])
        elif df2["department"][i] == "Analytics":
            analytics_list_f.append(df2["salary"][i])
        elif df2["department"][i] == "HR":
            hr_list_f.append(df2["salary"][i])
        else:
            tech_list_f.append(df2["salary"][i])


# averages of each sector

# male averages
male_means = []
male_means.append(sum(sales_list_m) / len(sales_list_m))
male_means.append(sum(operations_list_m) / len(operations_list_m))
male_means.append(sum(finance_list_m) / len(finance_list_m))
male_means.append(sum(proc_list_m) / len(proc_list_m))
male_means.append(sum(analytics_list_m) / len(analytics_list_m))
male_means.append(sum(hr_list_m) / len(hr_list_m))
male_means.append(sum(tech_list_m) / len(tech_list_m))

# female averages
female_means = []
female_means.append(sum(sales_list_f) / len(sales_list_f))
female_means.append(sum(operations_list_f) / len(operations_list_f))
female_means.append(sum(finance_list_f) / len(finance_list_f))
female_means.append(sum(proc_list_f) / len(proc_list_f))
female_means.append(sum(analytics_list_f) / len(analytics_list_f))
female_means.append(sum(hr_list_f) / len(hr_list_f))
female_means.append(sum(tech_list_f) / len(tech_list_f))

subjects = ['Sales & Marketing', 'Operations', 'Finance', 'Procurement', 'Analytics', 'HR', 'Technology']

indx = np.arange(len(subjects))
score_label = np.arange(0, 400000, 50000)

bar_width = 0.35

# labelling graph 
barMale = ax2.bar(indx - bar_width/2, male_means, bar_width, label='Male means')
barFemale = ax2.bar(indx + bar_width/2, female_means, bar_width, label='Female means')
ax2.set_xlabel('Department Sectors', fontsize=14)
ax2.set_ylabel('Average Yearly Salary Range ($)', fontsize=14)
ax2.set_title("Salary per Department", fontsize=14)

# inserting x axis label
ax2.set_xticks(indx)
ax2.set_xticklabels(subjects)

# inserting y axis label
ax2.set_yticks(score_label)
ax2.set_yticklabels(score_label)

# inserting legend
ax2.legend()

def insert_data_labels(bars):
	for bar in bars:
		bar_height = bar.get_height()
		ax2.annotate('{0:.0f}'.format(bar.get_height()),
			xy=(bar.get_x() + bar.get_width() / 2, bar_height),
			xytext=(0, 3),
			textcoords='offset points',
			ha='center',
			va='bottom'
		)

insert_data_labels(barMale)
insert_data_labels(barFemale)

plt.savefig("./src/images/SalaryGenderRole.png")


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
plt.savefig("./src/images/WLSeniority.png")