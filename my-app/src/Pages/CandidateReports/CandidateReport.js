
import React, { useEffect, useState } from 'react';

import ReportPage from "../ReportPage/ReportPage"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';

import { getSingleCandidate } from '../../service/candidates';
import { reports } from '../../service/reports';

import { useParams } from 'react-router-dom';

import "./CandidateReport.css";

function CandidateReport() {
    const params = useParams();
    const id = params.id;
    const token = sessionStorage.getItem('token');
    const [candidate, setCandidate] = useState(null);
    const [candidateReports, setCandidateReports] = useState([]);

    const getCandidate = () => {
        const get = async () => {
            const candidate = await getSingleCandidate(token, id);
            setCandidate(candidate);
        };
        get();

    }
    const getReports = () => {
        const get = async () => {
            const newReports = await reports(token);
            const filtered = [];
            newReports.forEach((report) => {
                if (report.candidateId === id) {
                    filtered.push(report);
                }

            })
            setCandidateReports(filtered)
        }
        get();

    }
    useEffect(getCandidate, []);
    useEffect(getReports, [candidate]);


    console.log('From Candidate Report', candidate, candidateReports);

    // let dateFormatter = (date)=>{
    //     return new Date (date).toLocaleString()
    // };

    if(!candidate || reports.length === 0) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <Header title="Interview Reports" showItems={true} />
            <ReportPage candidate={candidate} reports={candidateReports} />
            {
                //                 <div className="completeReport">
                //                 <div className="candidateInfo">
                //                     <img className="candidatePhoto" src={findCandidates[0].avatar}></img> 
                //                     <div className="nameEmail">
                //                         <p>Name:</p>
                //                         <input type="name" value="text"> {findCandidates[0].name}</input>
                //                         <p> Email: </p>
                //                         <input type="email" value="text">{findCandidates[0].email}</input>
                //                     </div>
                //                     <div className="birthEducation">
                //                         <p>Date of Birth:</p>
                //                         <input type="date" value="date">{dateFormatter(findCandidates[0].birthday)}</input>
                //                         <p>Education:</p>
                //                              <input type="text" value="text">{findCandidates[0].education}</input>
                //                     </div>
                //                 </div>
                //                 <h2>Reports</h2>
                //                 <div className="stripped">
                //                     <table>
                //                         <thead className="graylighten-1">
                //                             <tr>
                //                                 <th>Company</th>
                //                                 <th>Interview Date</th>
                //                                 <th>Status</th>
                //                             </tr>
                //                         </thead>
                //                         <tbody>
                //                             {findReport.map((e, index) => {
                //                                 return (
                //                                     <tr key={token}>
                //                                         <td>{e.companyName}</td>
                //                                         <td>{e.interviewDate}</td>
                //                                         <td>{e.status}</td>
                //                                         <td>
                //                                             <i class="fas fa-eye" onClick={() => { 
                //                                                 ({

                //                                                 });
                //                                             }}
                //                                             ></i>
                //                                         </td>
                //                                     </tr>
                //                                 );
                //                                 })
                //                             }
                //                         </tbody>
                //                     </table>  
                //                 </div>
                //                         </div>


            }

            <Footer />

        </div>
    );
};
export default CandidateReport;