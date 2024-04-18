import { FC } from 'react';

import './styles.scss';

type ButtonProps = {
  className: string;
  // onClick: () => void;
  text: string;
};

const Button: FC<ButtonProps> = (props) => (
  // <button onClick={props.onClick}>{props.text}</button>
  <button className={props.className}>{props.text}</button>
);

export default Button;
