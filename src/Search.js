import React from 'react';
import './Search.css'

const Search =({searchfield,searchchange})=>{
    return(
        <div>
            <span className="b f2">Search:</span><input type="search" placeholder="Search frds..." className="bg-light-blue dib br3 pa3 ma2" onChange={searchchange}/><br/>
        </div>
    )
}

export default Search; 