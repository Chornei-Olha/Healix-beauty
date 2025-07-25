'use client';
import React, { useState } from 'react';

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'number' | 'tel' | 'url';
  disabled?: boolean;
  required?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outline';
  error?: string;
  label?: string;
  id?: string;
}

const EditText: React.FC<EditTextProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  size = 'md',
  variant = 'default',
  error,
  label,
  id,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const variants = {
    default: 'bg-global-7 border-transparent focus:border-global-8 focus:ring-global-8',
    filled: 'bg-global-10 border-transparent focus:border-global-8 focus:ring-global-8',
    outline: 'bg-transparent border-global-7 focus:border-global-8 focus:ring-global-8'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm sm:px-3 sm:py-2 sm:text-sm',
    md: 'px-4 py-2.5 text-sm sm:px-4 sm:py-2.5 sm:text-base md:text-base',
    lg: 'px-5 py-3 text-base sm:px-5 sm:py-3 sm:text-lg md:text-lg'
  };

  const inputId = id || `edittext-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-global-8 mb-1 sm:mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value !== undefined ? value : internalValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          required={required}
          className={`
            w-full
            border
            rounded-lg
            transition-all
            duration-200
            ease-in-out
            focus:outline-none
            focus:ring-2
            focus:ring-opacity-50
            ${variants[variant]}
            ${sizes[size]}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}
            ${isFocused ? 'transform scale-[1.02]' : ''}
            font-geist
            text-global-8
            placeholder-global-12
            min-h-[44px] sm:min-h-[48px]
            ${className}
          `.trim().replace(/\s+/g, ' ')}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default EditText;