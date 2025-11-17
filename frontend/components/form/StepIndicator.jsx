import React from 'react';
import { FORM_STEPS } from '@/constants/formConstants';

export const StepIndicator = ({ currentStep }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {FORM_STEPS.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-dm-sans font-semibold transition-all ${
                  step.id <= currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step.id}
              </div>
              <p
                className={`mt-2 text-xs text-center font-dm-sans ${
                  step.id <= currentStep ? 'text-blue-500' : 'text-gray-400'
                }`}
              >
                {step.title}
              </p>
            </div>
            {index < FORM_STEPS.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 transition-all ${
                  step.id < currentStep ? 'bg-blue-500' : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

