'use client';

import React, { useState } from 'react';
import { FORM_STEPS, INITIAL_FORM_DATA } from '@/constants/formConstants';
import { validateStep } from '@/utils/validation';
import { getStepProgress } from '@/helpers/formHelpers';
import { submitFormData } from '@/utils/api';
import { StepIndicator } from '@/components/form/StepIndicator';
import { ThankYou } from '@/components/form/ThankYou';
import { Step1 } from '@/components/form/steps/Step1';
import { Step2 } from '@/components/form/steps/Step2';
import { Step3 } from '@/components/form/steps/Step3';
import { Step4 } from '@/components/form/steps/Step4';
import { Step5 } from '@/components/form/steps/Step5';
import { Step6 } from '@/components/form/steps/Step6';
import { Step7 } from '@/components/form/steps/Step7';

const STEP_COMPONENTS = [Step1, Step2, Step3, Step4, Step5, Step6, Step7];

export const ApplicantForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    const validationError = validateStep(currentStep, formData);
    if (validationError) {
      setErrors((prev) => ({ ...prev, [validationError.field]: validationError.message }));
      setTouched((prev) => ({ ...prev, [validationError.field]: true }));
      return;
    }
    if (currentStep < FORM_STEPS.length) {
      setCurrentStep((prev) => prev + 1);
      setErrors({});
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateStep(currentStep, formData);
    if (validationError) {
      setErrors((prev) => ({ ...prev, [validationError.field]: validationError.message }));
      setTouched((prev) => ({ ...prev, [validationError.field]: true }));
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    // Log all form data to console
    console.log('=== FORM SUBMISSION DATA ===');
    console.log('Full Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('City:', formData.city);
    console.log('Country:', formData.country);
    console.log('Course Apply For:', formData.courseApplyFor);
    console.log('Education:', formData.education);
    console.log('Target Country:', formData.targetCountry);
    console.log('Complete Form Data:', formData);
    console.log('============================');

    // Show thank you page immediately (for demo/testing)
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
    setSubmitMessage({ type: 'success', message: 'Form submitted successfully!' });

    // Try to submit to API if token exists
    const token = localStorage.getItem('authToken') || '';
    if (token) {
      try {
        const result = await submitFormData(formData, token);
        if (result.success) {
          setSubmitMessage({ 
            type: 'success', 
            message: result.message || 'Form submitted successfully to server!' 
          });
          console.log('✅ Form submitted successfully to API:', result.data);
        } else {
          console.error('❌ API submission failed:', result.error);
          if (result.details) {
            console.error('Validation errors:', result.details);
          }
          // Update message to show API error but still show thank you page
          setSubmitMessage({ 
            type: 'error', 
            message: `Form data logged, but API submission failed: ${result.error}` 
          });
        }
      } catch (error) {
        console.error('❌ API submission error:', error);
        setSubmitMessage({ 
          type: 'error', 
          message: `Form data logged, but API error: ${error.message}` 
        });
      }
    } else {
      console.warn('⚠️ No auth token found. Form data logged to console. Please login to submit to server.');
      setSubmitMessage({ 
        type: 'error', 
        message: 'Form data logged to console. Please login to submit to server.' 
      });
    }

    setIsSubmitting(false);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setCurrentStep(1);
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setSubmitMessage(null);
  };

  const clearError = (field) => {
    setErrors((prev) => {
      const { [field]: _, ...rest } = prev;
      return rest;
    });
  };

  const CurrentStepComponent = STEP_COMPONENTS[currentStep - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 font-merriweather">
              Application Form
            </h1>
            <p className="text-gray-600 font-dm-sans">
              Step {currentStep} of {FORM_STEPS.length}
            </p>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getStepProgress(currentStep, FORM_STEPS.length)}%` }}
              />
            </div>
          </div>

          <StepIndicator currentStep={currentStep} />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="min-h-[300px]">
              <CurrentStepComponent
                formData={formData}
                errors={errors}
                touched={touched}
                updateFormData={updateFormData}
                setTouched={setTouched}
                clearError={clearError}
              />
            </div>

            {submitMessage && (
              <div
                className={`p-4 rounded-lg font-dm-sans ${
                  submitMessage.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitMessage.message}
              </div>
            )}

            <div className="flex justify-between pt-6 border-t">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-dm-sans font-medium transition-all ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              {currentStep < FORM_STEPS.length ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg font-dm-sans font-medium hover:bg-blue-600 transition-all"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-dm-sans font-medium transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Thank You Popup Modal */}
      {isSubmitted && submittedData && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleReset}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ThankYou submittedData={submittedData} onReset={handleReset} />
          </div>
        </div>
      )}
    </div>
  );
};

