'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';

export const Step2 = ({ formData, errors, touched, updateFormData, setTouched, clearError }) => {
  const handleChange = (e) => {
    updateFormData('email', e.target.value);
    if (errors.email) {
      clearError('email');
    }
  };

  const handleBlur = () => {
    setTouched((prev) => ({ ...prev, email: true }));
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 font-merriweather">
          Contact Details
        </h2>
        <p className="text-gray-600 font-dm-sans">
          We'll use this to contact you about your application
        </p>
      </div>
      <Input
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email ? errors.email : undefined}
        placeholder="Enter your email address"
        required
      />
    </div>
  );
};

