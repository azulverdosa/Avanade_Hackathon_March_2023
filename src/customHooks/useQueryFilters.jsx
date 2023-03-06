import { useState } from 'react';
import axios from 'axios';

export const METRIC_NAMES = {
  age: 'age',
  gender: 'gender',
  seniority: 'seniority',
  salary: 'salary',
  promotions: 'promotions',
  position: 'position',
  worklife: 'work life',
  femalesAtWork: 'females at work',
  finance: 'finance',
  vacay: 'vacay',
};

const useQueryFilters = () => {
  const [ageSelected, setAgeSelected] = useState(false);
  const [genderSelected, setGenderSelected] = useState(false);
  const [senioritySelected, setSenioritySelected] = useState(false);
  const [salarySelected, setSalarySelected] = useState(false);
  const [promotionsSelected, setPromotionsSelected] = useState(false);
  const [positionSelected, setPositionSelected] = useState(false);
  const [worklifeSelected, setWorklifeSelected] = useState(false);
  const [femalesAtWorkSelected, setFemalesAtWorkSelected] = useState(false);
  const [financeSelected, setFinanceSelected] = useState(false);
  const [vacaySelected, setVacaySelected] = useState(false);

  const [queryResults, setQueryResults] = useState();

  const metrics = {
    [METRIC_NAMES.age]: {
      setter: setAgeSelected,
      value: ageSelected,
    },
    [METRIC_NAMES.gender]: {
      setter: setGenderSelected,
      value: genderSelected,
    },
    [METRIC_NAMES.seniority]: {
      setter: setSenioritySelected,
      value: senioritySelected,
    },
    [METRIC_NAMES.salary]: {
      setter: setSalarySelected,
      value: salarySelected,
    },
    [METRIC_NAMES.promotions]: {
      setter: setPromotionsSelected,
      value: promotionsSelected,
    },
    [METRIC_NAMES.position]: {
      setter: setPositionSelected,
      value: positionSelected,
    },
    [METRIC_NAMES.worklife]: {
      setter: setWorklifeSelected,
      value: worklifeSelected,
    },
    [METRIC_NAMES.femalesAtWork]: {
      setter: setFemalesAtWorkSelected,
      value: femalesAtWorkSelected,
    },
    [METRIC_NAMES.finance]: {
      setter: setFinanceSelected,
      value: financeSelected,
    },
    [METRIC_NAMES.vacay]: {
      setter: setVacaySelected,
      value: vacaySelected,
    },
  };

  const setMetrics = (metricName) => (event) => {
    const metric = metrics[metricName];

    metric.setter(!metric.value);

    console.log(metric.value);
  };

  const metricStates = Object.entries(metrics).reduce(
    (acc, [metricName, metric]) => ({
      ...acc,
      [metricName]: metric.value,
    }),
    {}
  );

  const queryFilters = Object.entries(metricStates)
    .map(([metricName, isMetricSelected]) => isMetricSelected && metricName)
    .filter(Boolean);

  const makeRequest = () => {
    const genderSalaryPosition =
      queryFilters.length === 3 &&
      ['gender', 'salary', 'position'].every((filter) => queryFilters.includes(filter)) &&
      'https://github.com/azulverdosa/Avanade_Hackathon_March_2023/blob/main/src/images/SalaryGenderRole.png?raw=true';
    const genderPosition =
      queryFilters.length === 2 &&
      ['gender', 'position'].every((filter) => queryFilters.includes(filter)) &&
      'https://github.com/azulverdosa/Avanade_Hackathon_March_2023/blob/main/src/images/GenderRoleHeadcountPieCharts.png?raw=true  ';
    const workLife =
      queryFilters.length === 1 &&
      ['work life'].every((filter) => queryFilters.includes(filter)) &&
      'https://github.com/azulverdosa/Avanade_Hackathon_March_2023/blob/main/src/images/WLSeniority.png?raw=true';
    const femalesAtWork =
      queryFilters.length === 1 &&
      ['females at work'].every((filter) => queryFilters.includes(filter)) &&
      'https://github.com/azulverdosa/Avanade_Hackathon_March_2023/blob/main/src/images/FemalePercentageOverYearsGraph.png?raw=true';
    const finance =
      queryFilters.length === 1 &&
      ['finance'].every((filter) => queryFilters.includes(filter)) &&
      'https://github.com/azulverdosa/Avanade_Hackathon_March_2023/blob/main/src/images/GenderRoleFinance.png?raw=true';
    const error =
      'https://www.shutterstock.com/image-vector/404-error-page-funny-design-260nw-1761026456.jpg';

    const blah = [
      finance,
      genderSalaryPosition,
      genderPosition,
      workLife,
      femalesAtWork,
      error,
    ].filter(Boolean);
    setQueryResults(...blah);
    console.log('Query Sent');

    console.log(queryFilters);
  };

  // const makeRequestToAPI = async () => {
  //   try {
  //     const res = await axios.get('http://mockapi/graphs', {
  //       params: {
  //         keywords: queryFilters.join(','),
  //         dates: dateRange.join(','),
  //       },
  //       responseType: 'blob',
  //     });

  //     if (res.status === 200) {
  //       console.log('Query Sent');

  //       // get res.data >>> an image blob
  //       // const blobURL = URL.createObjectURL(res.data)
  //       // setQueryResults(blobURL)
  //     }
  //   } catch (err) {
  //     console.error('ERROR: ', err);
  //   }
  // };

  return {
    makeRequest,
    metricStates,
    setMetrics,
    queryResults,
  };
};

export default useQueryFilters;
