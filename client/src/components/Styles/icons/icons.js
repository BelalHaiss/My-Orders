import { Fragment } from 'react';
import pizza from './pizza.svg';
import sandwich from './sandwich.svg';

export const PizzaImg = ({ w, text }) => (
  <Fragment>
    <img
      style={{
        width: w ? w : '50px',
        display: 'inline-block',
        marginRight: w ? '2px' : '20px'
      }}
      src={pizza}
      alt={text}
    />
    {text && <span className=''>{text}</span>}
  </Fragment>
);
export const SandwichImg = ({ w, text }) => (
  <Fragment>
    <img
      style={{
        width: w ? w : '50px',
        display: 'inline-block',
        marginRight: w ? '2px' : '20px'
      }}
      src={sandwich}
      alt={text}
    />
    {text && <span className=''>{text}</span>}
  </Fragment>
);
