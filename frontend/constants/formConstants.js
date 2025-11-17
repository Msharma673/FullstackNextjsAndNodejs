export const FORM_STEPS = [
  { id: 1, title: 'Personal Information', field: 'name' },
  { id: 2, title: 'Contact Details', field: 'email' },
  { id: 3, title: 'Phone Number', field: 'phone' },
  { id: 4, title: 'Location', field: 'city' },
  { id: 5, title: 'Country', field: 'country' },
  { id: 6, title: 'Course & Education', field: 'courseApplyFor' },
  { id: 7, title: 'Target Country', field: 'targetCountry' },
];

export const COURSE_OPTIONS = [
  { id: 'mba', label: 'MBA', value: 'MBA' },
  { id: 'ms', label: 'MS', value: 'MS' },
  { id: 'phd', label: 'PhD', value: 'PhD' },
  { id: 'bachelor', label: 'Bachelor', value: 'Bachelor' },
];

export const EDUCATION_OPTIONS = [
  { id: 'bcom', label: 'B.Com', value: 'B.Com' },
  { id: 'btech', label: 'B.Tech', value: 'B.Tech' },
  { id: 'ba', label: 'BA', value: 'BA' },
  { id: 'bsc', label: 'B.Sc', value: 'B.Sc' },
];

export const COUNTRIES = [
  'India',
  'USA',
  'Canada',
  'UK',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'Singapore',
  'UAE',
];

export const CITIES = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
];

export const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  phone: '',
  city: '',
  country: '',
  courseApplyFor: '',
  education: '',
  targetCountry: '',
};

