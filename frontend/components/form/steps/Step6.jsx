'use client';

import React from 'react';
import { OptionButton } from '@/components/ui/OptionButton';
import { COURSE_OPTIONS, EDUCATION_OPTIONS } from '@/constants/formConstants';

export const Step6 = ({ formData, errors, touched, updateFormData, setTouched, clearError }) => {
  const handleCourseChange = (value) => {
    updateFormData('courseApplyFor', value);
    setTouched((prev) => ({ ...prev, courseApplyFor: true }));
    if (errors.courseApplyFor) {
      clearError('courseApplyFor');
    }
  };

  const handleEducationChange = (value) => {
    updateFormData('education', value);
    setTouched((prev) => ({ ...prev, education: true }));
    if (errors.education) {
      clearError('education');
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-merriweather">
          Course & Education
        </h2>
        <p className="text-gray-600 font-dm-sans">
          Please select your course preference and current education level
        </p>
      </div>
      <div className="space-y-6">
        <OptionButton
          label="Course Apply For"
          name="courseApplyFor"
          value={formData.courseApplyFor}
          onChange={handleCourseChange}
          options={COURSE_OPTIONS}
          error={touched.courseApplyFor ? errors.courseApplyFor : undefined}
          required
        />
        <OptionButton
          label="Education"
          name="education"
          value={formData.education}
          onChange={handleEducationChange}
          options={EDUCATION_OPTIONS}
          error={touched.education ? errors.education : undefined}
          required
        />
      </div>
    </div>
  );
};

