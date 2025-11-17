'use client';

import React from 'react';
import { Dropdown } from '@/components/ui/Dropdown';
import { COUNTRIES } from '@/constants/formConstants';

export const Step5 = ({ formData, errors, touched, updateFormData, setTouched, clearError }) => {
  const handleChange = (e) => {
    updateFormData('country', e.target.value);
    if (errors.country) {
      clearError('country');
    }
  };

  const handleBlur = () => {
    setTouched((prev) => ({ ...prev, country: true }));
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-merriweather">
          Country
        </h2>
        <p className="text-gray-600 font-dm-sans">
          Select your current country of residence
        </p>
      </div>
      <Dropdown
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        onBlur={handleBlur}
        options={COUNTRIES}
        error={touched.country ? errors.country : undefined}
        placeholder="Select your country"
        required
      />
    </div>
  );
};

