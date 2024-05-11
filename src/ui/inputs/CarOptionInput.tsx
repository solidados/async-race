import { FC } from 'react';

import './styles.scss';

type InputProps = {
  inputType: string;
  value: string;
};

const CarOptionInput: FC<InputProps> = (props) => (
  <input type={props.inputType} value={props.value} />
);

export default CarOptionInput;
