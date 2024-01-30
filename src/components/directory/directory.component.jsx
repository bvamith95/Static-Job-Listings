import './directory.styles.scss';
import Listing from '../listing/listing.component';
import {useContext } from 'react';
import { FilterContext } from '../../contexts/filter.context';

const Directory = ()=> {
    const {listings,}=useContext(FilterContext);
    
    return (
        <div className='directory'>
        {listings.map((listing) => (
            <Listing key={listing.id} listing={listing}/>
          ))}
        </div>

    );
};

export default Directory;