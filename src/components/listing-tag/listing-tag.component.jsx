import './listing-tag.styles.scss';
import { useContext } from 'react';


import { FilterContext } from '../../contexts/filter.context';

const ListingTag = ({tag})=>{
const {addItemToFilter}= useContext(FilterContext);

const addToFilter = ()=>addItemToFilter(tag);

    return(
        <span className="listing-tag" onClick={addToFilter}>{tag}</span>
    )
}

export default ListingTag;