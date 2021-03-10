import React from 'react';

const Wrapper = ({children, name}) => {
  return (
    <div className={`${name}__wrapper`}>
      {children}
    </div>
  );
};

export default Wrapper;
