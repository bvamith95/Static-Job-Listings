import './filter-item.styles.scss';
import { ReactComponent as IconRemove } from "../../assets/images/icon-remove.svg";
import { FilterContext } from '../../contexts/filter.context';
import { useContext } from 'react';


const FilterItem = ({filter})=> {

  const {removeItemFromFilter} = useContext(FilterContext);
  const removeFilter = ()=>removeItemFromFilter(filter);

    return (
        <div className="filter-item">
          <div className="filter-item--tag">
            <span>{filter}</span>
          </div>

          <div className="filter-item--remove">
            <IconRemove  onClick={removeFilter} />
          </div>
        </div>

    );
}

export default FilterItem;
