import { useState } from 'react';
import axios from 'axios';

export const METRIC_NAMES = {
  age: 'age',
  gender: 'gender',
  seniority: 'seniority',
  salary: 'salary',
  promotions: 'promotions',
  raises: 'raises',
};

const useQueryFilters = () => {
  const [ageSelected, setAgeSelected] = useState(false);
  const [genderSelected, setGenderSelected] = useState(false);
  const [senioritySelected, setSenioritySelected] = useState(false);
  const [salarySelected, setSalarySelected] = useState(false);
  const [promotionsSelected, setPromotionsSelected] = useState(false);
  const [raisesSelected, setRaisesSelected] = useState(false);
  const [queryResults, setQueryResults] = useState(
    'https://i.insider.com/6230badfdc43bd0018947b8a?width=1200&format=jpeg'
  );

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
    [METRIC_NAMES.raises]: {
      setter: setRaisesSelected,
      value: raisesSelected,
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

  const dateRange = [['2-19', '4-22']];

  const makeRequest = async () => {
    try {
      const res = await axios.get('http://mockapi/graphs', {
        params: {
          keywords: queryFilters.join(','),
          dates: dateRange.join(','),
        },
        responseType: 'blob',
      });

      if (res.status === 200) {
        console.log('Query Sent');

        // get res.data >>> an image blob
        // const blobURL = URL.createObjectURL(res.data)
        // setQueryResults(blobURL)
      }
    } catch (err) {
      console.error('ERROR: ', err);
    }
  };

  return {
    makeRequest,
    metricStates,
    setMetrics,
    queryResults,
  };
};

export default useQueryFilters;
