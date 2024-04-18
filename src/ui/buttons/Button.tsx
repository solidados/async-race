import { ButtonHTMLAttributes, FC } from 'react';

import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className: string;
  text: string;
};

const Button: FC<ButtonProps> = (props) => (
  <button className={props.className} onClick={props.onClick}>
    {props.text}
  </button>
);

export default Button;
