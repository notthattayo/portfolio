import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './about.css'
import Nav from '../../components/Nav/Nav'
export default class About extends Component {
    
    state = {
        nav:null
    }

   navStyles={
        display:"block",
        left: "0",
        transition: "all 0.5s",
        width: "100%"
       
    }

    navStylesclose = {
        left:"-600px",
        transition:"all 0.5s"
    }

     toggleNav = ( )=>{
         if(this.state.nav==null || this.state.nav==this.navStylesclose){
        this.setState({nav:this.navStyles})
         }else if(this.state.nav == this.navStyles){
             this.setState({nav:this.navStylesclose})
         }
    }
    render() {

        

      
       
        return (
            <div className='page-wrapper'>
               <Nav navStyles={this.state.nav} toggleNav={this.toggleNav}active={"about"}></Nav>
                <div className='main-content'> 
                <img  src="./hamb.png" onClick={this.toggleNav}className={"hamb"}></img>
                    <div className="bio-heading">
                     
                        <h1>Hello my name is <span className="highlight">Tayo Adegoke</span>, I am a <span className={"highlight"}>full stack web developer</span> from Lagos, Nigeria. </h1>
                        <Link to="/projects"><button className="btn">View My Projects</button></Link>
                    </div>
                </div>

                
            </div>
        )
    }
}