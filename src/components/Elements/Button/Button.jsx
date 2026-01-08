// Button.jsx
import React from 'react';

const Button = (
    { 
    variant = 'primary',
    children,
    className,
    onClick,
    type = 'button',
    size = 'medium',
    }
) => {

    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white py-3 px-7 rounded-lg shadow-xl',
        secondary: 'bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-xl',
        outline: 'border border-black text-black py-3 px-7 rounded-lg hover:bg-black hover:text-white transition duration-300 shadow-xl',
    }

    const sizes = {
        full: 'w-full',
        small: 'text-sm font-normal',
        medium: 'text-base font-medium',
        large: 'text-lg font-semibold',
    }

    return (
        <button
        type={type}
        onClick={onClick} 
        className={`${variants[variant]} ${size[sizes]} ${className}`}>
            {children}
        </button>
    );
}
  


export default Button;