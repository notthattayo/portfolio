import React, { Component } from 'react'
import './nav.css'
export default class Nav extends Component {
    render() {
        return (
           
                <div className='side-bar'>
                    
                   {/*<h1>Logo</h1>  */}
                   {<img className="profile-img" src="./gitav.jpeg"></img>}
                   <ul>
                      <li className="active">About</li>
                      <li>Projects</li>
                      <li>Résumé</li>
                      <li>Contact</li>
                    
                   </ul>  
                </div>
                
                
            
        )
    }
}
