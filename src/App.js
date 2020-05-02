import React from 'react';
import Cl from './Robo';
import Search from './Search';
import { robots } from './robots';
import './app.css'


class App extends React.Component{
    
   constructor(){
    super();
       this.state={
            robots:robots,
            searchfield:''
       }
   } 
    
   onsearchchange = (event) =>{
       this.setState({searchfield : event.target.value})
   }
    render(){
        const filtered = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        
        return(
        <div className="tc">
        <h1>Robofriends</h1>
        <Search searchchange ={this.onsearchchange}/>
        <Cl robots={filtered}/>
        </div>
        )
    }
}

export default App;
