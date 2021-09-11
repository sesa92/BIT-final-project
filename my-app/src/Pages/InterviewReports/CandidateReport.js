
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'

import "./CandidateReport.css"

function CandidateReport () {
    return (
        <div>
            <Header title="Interview Reports" showItems={true} />
                <div className="completeReport">
                    <div className="candidateInfo">
                        <img className="candidatePhoto" > </img>
                        <div className="nameEmail">
                            <p>Name:</p>
                            <input type="name" value="text"></input>
                            <p>Email:</p>
                            <input type="email" value="text"></input>
                        </div>
                        <div className="birthEducation">
                            <p>Date of Birth:</p>
                            <input type="date" value="date"></input>
                            <p>Education:</p>
                            <input type="text" value="text"></input>
                        </div>
                    </div>
                    <div className="table">
                        
                    </div>
                </div>
            <Footer />
        </div>
    )
}
export default CandidateReport;