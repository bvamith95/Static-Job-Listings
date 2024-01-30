import "./listing.styles.scss";
import ListingTag from "../listing-tag/listing-tag.component";


const Listing = ( {listing}) => {

  const {company, position, role, level, postedAt, contract, location, languages,tools,featured,isNew,logo} = listing;
  const tagList = [].concat(role,level,languages,tools);

  return (
    <div className= {featured===true?"listing-container border-left":"listing-container"}  >
      <div className="listing">
        <div className="listing__logo">
          <img src={logo} alt="photosnap-icon" />
        </div>

        <div className="listing__body">
          <div className="listing__body--title">
            <h4 className="listing-company">{company}</h4>
            {isNew===true?<span className="listing-new">New!</span>:null}
            {featured===true?<span className="listing-featured">Featured</span>:null}
          </div>

          <h3 className="listing__body--job">{position}</h3>

          <div className="listing__body--meta">
            <span>{postedAt}</span>
            <span>&#x2022;</span>
            <span>{contract}</span>
            <span>&#x2022;</span>
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="tags-container">
      {tagList.map((tag,index) => (
        <ListingTag key={index} tag={tag}/>
      ))}
      </div>
    </div>
  );
};

export default Listing;
