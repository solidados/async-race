import { FC } from 'react';

import './styles.scss';

type InputProps = {
  inputType: string;
};
const CarOptionInput: FC<InputProps> = (props) => (
  <input type={props.inputType} />
);

export default CarOptionInput;
