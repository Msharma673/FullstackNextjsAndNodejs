'use client';

import React from 'react';

export const ThankYou = ({ submittedData, onReset }) => {
  const detailItems = [
    { label: 'Full Name', value: submittedData.name, icon: '👤' },
    { label: 'Email Address', value: submittedData.email, icon: '📧' },
    { label: 'Phone Number', value: submittedData.phone, icon: '📱' },
    { label: 'City', value: submittedData.city, icon: '🏙️' },
    { label: 'Country', value: submittedData.country, icon: '🌍' },
    { label: 'Course Apply For', value: submittedData.courseApplyFor, icon: '🎓' },
    { label: 'Education', value: submittedData.education, icon: '📚' },
    { label: 'Target Country', value: submittedData.targetCountry, icon: '✈️' },
  ];

  return (
    <div className="w-full p-8 relative">
      <button
        type="button"
        onClick={onReset}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
          <svg
            className="w-12 h-12 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2 font-merriweather">
          Thank You!
        </h2>
        <p className="text-lg text-gray-600 font-dm-sans">
          Your application has been submitted successfully
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 font-merriweather">
          Application Summary
        </h3>
        <div className="space-y-4">
          {detailItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start border-b border-gray-200 pb-4 last:border-0 last:pb-0"
            >
              <div className="text-2xl mr-4">{item.icon}</div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-dm-sans mb-1">
                  {item.label}
                </p>
                <p className="text-base font-medium text-gray-800 font-dm-sans">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4 font-dm-sans">
          We'll review your application and get back to you soon.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-dm-sans font-medium hover:bg-blue-600 transition-all"
        >
          Submit Another Application
        </button>
      </div>
    </div>
  );
};

