import React from 'react';


const Card =({id,name,username,email})=>{
    return(
  
        
            
            <div className="tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5">
                <img alt='robots' src ={`https://robohash.org/test${id}?200x20}`}/>
                <h2>{name}</h2>
                <h4>{username}</h4>
                <p>{email}</p>
            </div>


    );
}

export default Card;