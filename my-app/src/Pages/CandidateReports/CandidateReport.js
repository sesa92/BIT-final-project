
import React, { useEffect } from 'react';

import ReportPage from "../ReportPage/ReportPage"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';

import candidates from '../../service/candidates';
import companies from '../../service/companies';
import reports from '../../service/reports';

import "./CandidateReport.css";

function CandidateReport ({candidates, companies, reports}) {

    const id = "";
    const token = sessionStorage.getItem('token');
    const [candidates, setCandidates] = useState({});
    const [reports, setReports] = useState({});

    const getCandidate = () => { 
        const get = async () => {
            const candidates = await candidates (token);
            candidates.forEach((candidate) => {
                if (candidate.id === id ) {
                    setCandidates (candidate) 
                };

            });
        };
        get();

    }
    const getReports = () => { 
        const get = async () => {
            const reports = await reports (token);
            reports.forEach((report) => {
                if (report.candidate.id === id ) {
                   candidateReports.push(report);
                }

            })
            setReports(candidateReports)
        }
        get();

    }
    useEffect(getCandidate (token, id));
    useEffect(getReports (token, id));


   

    // let dateFormatter = (date)=>{
    //     return new Date (date).toLocaleString()
    // };
    return (
        <div>
        <Header title="Interview Reports" showItems={true} />
        <ReportPage getReports/>
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