'use client';

import React from 'react';
import { Dropdown } from '@/components/ui/Dropdown';
import { COUNTRIES } from '@/constants/formConstants';

export const Step7 = ({ formData, errors, touched, updateFormData, setTouched, clearError }) => {
  const handleChange = (e) => {
    updateFormData('targetCountry', e.target.value);
    if (errors.targetCountry) {
      clearError('targetCountry');
    }
  };

  const handleBlur = () => {
    setTouched((prev) => ({ ...prev, targetCountry: true }));
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-merriweather">
          Target Country
        </h2>
        <p className="text-gray-600 font-dm-sans">
          Where would you like to study?
        </p>
      </div>
      <Dropdown
        label="Target Country"
        name="targetCountry"
        value={formData.targetCountry}
        onChange={handleChange}
        onBlur={handleBlur}
        options={COUNTRIES}
        error={touched.targetCountry ? errors.targetCountry : undefined}
        placeholder="Select target country"
        required
      />
    </div>
  );
};

