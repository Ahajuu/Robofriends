import React from 'react';

import Card from './Card'
const Cl =({robots})=>{
    const rob=robots.map((robo,i) =>{return(
        <Card key={i} id={robo.id} name={robo.name} username={robo.username} email={robo.email} /> 
   
)
})
    return(
        <div>
            {rob}
        </div>
    )
}


export default Cl;