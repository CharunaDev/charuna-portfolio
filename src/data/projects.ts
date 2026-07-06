import type { ProjectEntry } from '@/types';

export const projects: ProjectEntry[] = [
  {
    title: 'Real-Time Parking Availability',
    period: '2019',
    description:
      'Android app that helps drivers locate available parking spaces in real time, using Firebase for live database management.',
    tags: ['Android', 'Firebase', 'Java'],
  },
  {
    title: 'Electricity Consumption Prediction',
    period: 'Jan 2021 — 2022',
    description:
      'Forecasts electricity consumption from time-series data using an LSTM recurrent neural network. Selected for the KDU Student Symposium 2020.',
    tags: ['Machine Learning', 'LSTM', 'Python'],
  },
];
