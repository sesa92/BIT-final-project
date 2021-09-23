import React, { useEffect, useState } from 'react';
import { Row, Col, Table} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useLocation } from 'react-router-dom';


import './ReportPage.css'
import ModalPage from '../ModalPage/ModalPage';



function ReportPage (){
    const [modalConfig, setModalConfig] = useState({isOpen: false, report: null});
    const [reports, setReports] = useState([]);

    const location = useLocation();

    const candidate = location.state.candidate;

    const dateFormatter = (date) => {
        let data = new Date(date);
        let month = data.getMonth();
        let year = data.getFullYear();
        let day = data.getDate();
        return `${day}.${month}.${year}`;
    };

    useEffect(() => {
        // fetch reports for current candidate by id
        // when reports dat aarrive call setRepoerts function with new data
    },[]);

    return (
        
        <>
            {modalConfig.isOpen ? <ModalPage report={modalConfig.report} onClose={() => setModalConfig({isOpen: false, report: null})} /> : <></>}
            <Row>
                <Col> 
    
                    <Image className="img" src={candidate.avatar}alt="Image"rounded />
                </Col>
                <Col>
            
                    <p className="info">Name: </p>
                   
                    <p className="data">{candidate.name}</p> 
                   
                    <p className="info">Email: </p> 
                    
                    <p className="data">{candidate.email}</p> 
                    
                </Col>
                <Col>
                    
                    <p className="info">Date of birth: </p>
                    
                    <p className="data">{dateFormatter(candidate.birthday)}</p>
                    
                    <p className="info">Education: </p>

                    <p className="data">{candidate.education}</p>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Interview Date</th>
                        <th>Status</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report,index) => {
                        console.log( report)
                        return (
                            <tr key = {index} >
                                <td>{report.companyName}</td>
                                <td>{report.interviewDate}</td>
                                <td>{report.status}</td>
                                <td>
                                    <i class="fal fa-eye" onClick={() => setModalConfig({isOpen: true, report })}></i>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default ReportPage;