import React from 'react';
import './Button.css';

// PureComponent
const Button=({ children, ...restProps })=> {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.children !== this.props.children;
  // }
  
    return (
      <button className="btn" {...restProps}>
        {children}
      </button>
    );
  }


export default Button;
