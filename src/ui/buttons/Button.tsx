import { FC } from 'react';

type ButtonProps = {
  className: string;
  // onClick: () => void;
  text: string;
};

const Button: FC<ButtonProps> = (props) => (
  // <button onClick={props.onClick}>{props.text}</button>
  <button
    className={props.className}
    style={{ padding: '0.5rem 1rem', textTransform: 'uppercase' }}
  >
    {props.text}
  </button>
);

export default Button;
