import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  const baseClasses = 'px-4 py-2.5 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses =
    variant === 'primary'
      ? 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500'
      : 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400';
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;