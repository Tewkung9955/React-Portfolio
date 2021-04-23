import React,{ Component } from 'react'
import Navitems from './NavItems'


class Navbar extends Component{

    constructor(props){
        super(props);
        this.state={
            'NavItemActive': ''
        }


        
    }

    render(){
        return(
        <nav>
            <ul>
                <Navitems item="Home" tolink="/home"></Navitems>
                <Navitems item="About" tolink="/about"></Navitems>
                <Navitems item="Education" tolink="/education"></Navitems>
                <Navitems item="Skill" tolink="/skills"></Navitems>
                <Navitems item="Contact" tolink="/contact"></Navitems>
            </ul>
        </nav>
        )
    }

}

export default Navbar