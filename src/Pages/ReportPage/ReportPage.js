import React, { useState } from 'react';
import { Row, Col, Table} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import'./ReportPage.css'
import ModalPage from '../ModalPage/ModalPage';



function ReportPage ({candidate, reports}){
    const [modalConfig, setModalConfig] = useState({isOpen: false, report: null});

    const dateFormatter = (date) => {
        let data = new Date(date);
        let month = data.getMonth();
        let year = data.getFullYear();
        let day = data.getDate();
        return `${day}.${month}.${year}`;
    };

    console.log(modalConfig)

    return (
        
        <>
            {modalConfig.isOpen ? <ModalPage report={modalConfig.report} onClose={() => setModalConfig({isOpen: false, report: null})} /> : <></>}
            <Row className="report">
                <Col> 
    
                    <Image className="img" src={''}alt="Image"rounded />
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
            </Row><br/><br/>
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
                        return (
                            <tr key = {index} >
                                <td>{report.companyName}</td>
                                <td>{dateFormatter(report.interviewDate)}</td>
                                <td>{report.status}</td>
                                <td>
                                    <button onClick={() => setModalConfig({isOpen: true, report })}><FontAwesomeIcon icon={faEye}/></button>
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