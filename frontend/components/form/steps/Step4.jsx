'use client';

import React from 'react';
import { Dropdown } from '@/components/ui/Dropdown';
import { CITIES } from '@/constants/formConstants';

export const Step4 = ({ formData, errors, touched, updateFormData, setTouched, clearError }) => {
  const handleChange = (e) => {
    updateFormData('city', e.target.value);
    if (errors.city) {
      clearError('city');
    }
  };

  const handleBlur = () => {
    setTouched((prev) => ({ ...prev, city: true }));
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-merriweather">
          Location
        </h2>
        <p className="text-gray-600 font-dm-sans">
          Tell us where you're located
        </p>
      </div>
      <Dropdown
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        onBlur={handleBlur}
        options={CITIES}
        error={touched.city ? errors.city : undefined}
        placeholder="Select your city"
        required
      />
    </div>
  );
};

