import { useState } from 'react';

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

  return {
    metricStates,
    setMetrics,
  };
};

export default useQueryFilters;
