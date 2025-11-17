export const formatPhoneNumber = (value) => {
  // Remove all non-digit characters except +
  const cleaned = value.replace(/[^\d+]/g, '');
  
  // Ensure it starts with + if it doesn't already
  if (cleaned && !cleaned.startsWith('+')) {
    return '+' + cleaned;
  }
  
  return cleaned;
};

export const formatName = (value) => {
  // Remove extra spaces and capitalize first letter of each word
  return value
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const isFormComplete = (formData) => {
  return (
    !!formData.name.trim() &&
    !!formData.email.trim() &&
    !!formData.phone.trim() &&
    !!formData.city.trim() &&
    !!formData.country.trim() &&
    !!formData.courseApplyFor.trim() &&
    !!formData.education.trim() &&
    !!formData.targetCountry.trim()
  );
};

export const getStepProgress = (currentStep, totalSteps) => {
  return Math.round((currentStep / totalSteps) * 100);
};

