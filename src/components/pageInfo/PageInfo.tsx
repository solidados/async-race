import { FC } from 'react';

import Button from '../../ui/buttons/Button.tsx';
import './styles.scss';

type PageInfoProps = {
  itemsNumber: number;
  pageNumber: number;
  pageTitle: string;
};

const PageInfo: FC<PageInfoProps> = (props) => (
  <div className="page-info">
    <div className="page-info-wrapper">
      <h2>
        {props.pageTitle} ({props.itemsNumber})
      </h2>
      <h3>Page #{props.pageNumber}</h3>
    </div>
    <div className="page-controls">
      <Button className="page-prev" text={'<'} />
      <Button className="page-next" text={'>'} />
    </div>
  </div>
);

export default PageInfo;
