import './home.styles.scss';

import Directory from '../directory/directory.component';
import Filter from '../filter/tab-filter.component';
import { FilterContext } from "../../contexts/filter.context";
import { useContext } from 'react';

const Home = ()=>{      
const {filterItems }= useContext(FilterContext);

    return (
        <div className='home-page'>
            <div className='header'>

            </div>

            <div className='body'>
                {filterItems.length>0?<Filter />:null}
                <Directory />
            </div>
        </div>



    )
}

export default Home;