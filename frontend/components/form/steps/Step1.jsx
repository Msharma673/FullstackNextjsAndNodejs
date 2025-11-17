'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { formatName } from '@/helpers/formHelpers';

export const Step1 = ({ formData, errors, touched, updateFormData, setTouched, clearError }) => {
  const handleChange = (e) => {
    const value = formatName(e.target.value);
    updateFormData('name', value);
    if (errors.name) {
      clearError('name');
    }
  };

  const handleBlur = () => {
    setTouched((prev) => ({ ...prev, name: true }));
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-merriweather">
          Personal Information
        </h2>
        <p className="text-gray-600 font-dm-sans">
          Let's start with your basic information
        </p>
      </div>
      <Input
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name ? errors.name : undefined}
        placeholder="Enter your full name"
        required
      />
    </div>
  );
};

