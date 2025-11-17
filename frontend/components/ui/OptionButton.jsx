import React from 'react';

export const OptionButton = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-3 font-dm-sans">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.value)}
            className={`px-6 py-4 border-2 rounded-lg font-dm-sans font-medium transition-all ${
              value === option.value
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
            } ${error ? 'border-red-500' : ''}`}
          >
            {option.label}
          </button>
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500 font-dm-sans">{error}</p>
      )}
    </div>
  );
};

