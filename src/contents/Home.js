import React, {Component} from 'react'
import Social from '../compornent/Social'
import ReactTypingeffect from 'react-typing-effect'
import img from '../img/profile.png'

class Home extends Component{
    render(){
        return(
            <div className ="condiv home">
                <img src={img} alt="profile" className="profilepic"/>
                <ReactTypingeffect text={'Seksorn Detray'} speed={80} className="typingeffect"></ReactTypingeffect>
                <Social />
            </div>
        )
    }
}

export default Home;