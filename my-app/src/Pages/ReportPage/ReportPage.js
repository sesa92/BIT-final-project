import React from 'react';
import { Row, Col, Table} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import ModalPage from '../ModalPage/ModalPage';


function ReportPage ({candidate, reports}){
    const image = "https://image.freepik.com/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg";
    const dateFormatter = (date) => {
        let data = new Date(date);
        let month = data.getMonth();
        let year = data.getFullYear();
        let day = data.getDate();
        return `${day}.${month}.${year}`;
    };
    return (
        <container>
            <Row>
                <Col> 
                    <Image />
                </Col>
                <Col>
                    <p>Name: {candidate.name}</p> 
                    <p>Email: {candidate.email}</p>
                </Col>
                <Col>
                    <p>Date of birth: {dateFormatter(candidate.birthday)}</p>
                    <p>Education: {candidate.education}</p>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Interview Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((e, id) => {
                        return (
                            <tr>
                                <td>{e.companyName}</td>
                                <td>{e.interviewDate}</td>
                                <td>{e.status}</td>
                                <td>
                                    <i class="fal fa-eye" onClick={() => {

                                    }}></i>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </container>
    )
}
export default ReportPage;