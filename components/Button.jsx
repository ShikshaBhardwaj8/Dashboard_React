import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({
  icon,
  bgColor = '#03C9D7',
  color = '#fff',
  bgHoverColor = '#0ea5e9', 
  size = 'base',
  text,
  borderRadius = '8px',
  width = 'auto'
}) => {
  const { setIsClicked, initialState } = useStateContext();

  const buttonStyle = {
    backgroundColor: bgColor,
    color,
    borderRadius,
    width,
  };

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={buttonStyle}
      className={`p-3 text-${size} transition-all duration-300 hover:drop-shadow-xl`}
      onMouseOver={(e) => (e.target.style.backgroundColor = bgHoverColor)}
      onMouseOut={(e) => (e.target.style.backgroundColor = bgColor)}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
