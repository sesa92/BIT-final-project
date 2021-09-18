import React from 'react';

import { Row, Col} from 'react-bootstrap';
import { candidates } from '../../service/candidates';
import { companies } from '../../service/companies';
import { reports } from '../../service/reports';



function ModalPage (){
    return (
        <container>
            <h2>{candidates.name}</h2>
            <hr></hr>
            <Row>
                <Col>
                    <p>Company</p>
                    <p>{companies.name}</p>
                    <p>Interview Date</p>
                    <p></p>
                    <p>Phase</p>
                    <p>{reports.phase}</p>
                    <p>Status</p>
                    <p>{reports.status}</p>
                </Col>
                <Col>
                    <p>Notes</p>
                    <p>{reports.note}</p>
                </Col>
            </Row>
        </container>
    )
}
export default ModalPage;