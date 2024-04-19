import PageInfo from '../pageInfo/PageInfo.tsx';
import './styles.scss';

const Winners = () => (
  <div className="winners">
    <PageInfo itemsNumber={1} pageNumber={1} pageTitle={'Winners'} />
    <table className="winners-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Car</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Best time (seconds)</th>
        </tr>
      </thead>
    </table>
  </div>
);

export default Winners;
