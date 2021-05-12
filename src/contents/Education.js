import React, { Component } from 'react'
import Widecard from '../compornent/WideCard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Silpakorn University" where="Science - Information Technology: IT" from="2017" to="2021" />
                <Widecard title="Pathumthani Municipality Secondary School" where="English and Technology" from="2014" to="2017" />
            </div>
        );
    }
}

export default Education;