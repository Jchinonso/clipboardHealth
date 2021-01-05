import React from 'react';
import {formatNumber} from '../utils'

 const FilterButton = ({
  title,
  count,
  onClick,
  className,
}) => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <li className='my-2'>
      <button
        className={`${className || 'focus:outline-none text-left'}`}
        aria-label="filter"
        onClick={() => {
          onClick();
          setIsClicked(!isClicked);
        }}
      >
        <span className={`mr-2 ${isClicked && 'font-medium'}`}>{title}</span>
        <span className='text-gray-400'>{formatNumber(count)}</span>
      </button>
    </li>
  );
};

export default FilterButton;
