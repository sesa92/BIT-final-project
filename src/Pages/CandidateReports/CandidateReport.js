
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
    const id = parseInt(params.id);
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
            console.log(typeof id);
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

    if (!candidate || reports.length === 0) {
        return <h1>Loading...</h1>
    }

    console.log(candidate, candidateReports);
    return (
        <div>
            <Header title="Interview Reports" showItems={true} />
                <ReportPage candidate={candidate} reports={candidateReports} />
            <Footer />

        </div>
    );
};
export default CandidateReport;