import React from 'react';

const Card: React.FC<{}> = ({}) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    window.location.replace('/card/');
  };
  return (
    <div className='container'>
      <div className='box' onClick={handleClick}>
        <div className='box-img'>
          <div className='sm-text'>Olomuc</div>
        </div>
        <div className='box-size'>9 999 Kč</div>
        <div className='box-text'>Кресло желтое, IKEA</div>
      </div>
    </div>
  );
};
export default Card;
