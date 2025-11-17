'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { formatPhoneNumber } from '@/helpers/formHelpers';

export const Step3 = ({ formData, errors, touched, updateFormData, setTouched, clearError }) => {
  const handleChange = (e) => {
    const value = formatPhoneNumber(e.target.value);
    updateFormData('phone', value);
    if (errors.phone) {
      clearError('phone');
    }
  };

  const handleBlur = () => {
    setTouched((prev) => ({ ...prev, phone: true }));
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-merriweather">
          Phone Number
        </h2>
        <p className="text-gray-600 font-dm-sans">
          Please provide your contact number
        </p>
      </div>
      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.phone ? errors.phone : undefined}
        placeholder="+9100001111"
        required
      />
    </div>
  );
};

