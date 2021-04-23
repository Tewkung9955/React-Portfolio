import React, { Component } from 'react'
import img from '../img/profile.png'


class About extends Component{
    render(){
        return(
            <div className="condiv about">
                <h1 className="subtopic">About me</h1>
                <img src={img} alt="profile" className="profilepic"/>
                <h3> hi i'm Serksorn</h3>
            </div>

        )
    }
}

export default About