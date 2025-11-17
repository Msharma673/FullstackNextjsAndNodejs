export const validateName = (name) => {
  if (!name.trim()) {
    return 'Name is required';
  }
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
    return 'Name can only contain letters and spaces';
  }
  return null;
};

export const validateEmail = (email) => {
  if (!email.trim()) {
    return 'Email is required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address';
  }
  return null;
};

export const validatePhone = (phone) => {
  if (!phone.trim()) {
    return 'Phone number is required';
  }
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  if (!phoneRegex.test(phone.trim().replace(/\s/g, ''))) {
    return 'Please enter a valid phone number';
  }
  return null;
};

export const validateDropdown = (value, fieldName) => {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }
  return null;
};

export const validateOptionButton = (value, fieldName) => {
  if (!value.trim()) {
    return `Please select ${fieldName}`;
  }
  return null;
};

export const validateStep = (step, formData) => {
  switch (step) {
    case 1:
      const nameError = validateName(formData.name);
      if (nameError) return { field: 'name', message: nameError };
      break;
    case 2:
      const emailError = validateEmail(formData.email);
      if (emailError) return { field: 'email', message: emailError };
      break;
    case 3:
      const phoneError = validatePhone(formData.phone);
      if (phoneError) return { field: 'phone', message: phoneError };
      break;
    case 4:
      const cityError = validateDropdown(formData.city, 'City');
      if (cityError) return { field: 'city', message: cityError };
      break;
    case 5:
      const countryError = validateDropdown(formData.country, 'Country');
      if (countryError) return { field: 'country', message: countryError };
      break;
    case 6:
      const courseError = validateOptionButton(formData.courseApplyFor, 'Course');
      if (courseError) return { field: 'courseApplyFor', message: courseError };
      const educationError = validateOptionButton(formData.education, 'Education');
      if (educationError) return { field: 'education', message: educationError };
      break;
    case 7:
      const targetCountryError = validateDropdown(formData.targetCountry, 'Target Country');
      if (targetCountryError) return { field: 'targetCountry', message: targetCountryError };
      break;
  }
  return null;
};

export const validateAllSteps = (formData) => {
  const errors = {};

  const nameError = validateName(formData.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(formData.phone);
  if (phoneError) errors.phone = phoneError;

  const cityError = validateDropdown(formData.city, 'City');
  if (cityError) errors.city = cityError;

  const countryError = validateDropdown(formData.country, 'Country');
  if (countryError) errors.country = countryError;

  const courseError = validateOptionButton(formData.courseApplyFor, 'Course');
  if (courseError) errors.courseApplyFor = courseError;

  const educationError = validateOptionButton(formData.education, 'Education');
  if (educationError) errors.education = educationError;

  const targetCountryError = validateDropdown(formData.targetCountry, 'Target Country');
  if (targetCountryError) errors.targetCountry = targetCountryError;

  return errors;
};

