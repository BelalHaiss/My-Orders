import pizza from './pizza.svg';
import sandwich from './sandwich.svg';

export const PizzaImg = () => (
  <img
    style={{ width: '50px', display: 'inline-block', marginRight: '20px' }}
    src={pizza}
    alt=''
  />
);
export const SandwichImg = () => (
  <img
    style={{ width: '50px', display: 'inline-block', marginRight: '20px' }}
    src={sandwich}
    alt=''
  />
);
