import React from 'react';

import { Row, Col } from 'react-bootstrap';

import './ModalPage.css';




function ModalPage({ report, onClose }) {

    const dateFormatter = (date) => {
        let data = new Date(date);
        let month = data.getMonth();
        let year = data.getFullYear();
        let day = data.getDate();
        return `${day}.${month}.${year}`;
    };





    return (
        <div className="modal visibilityFix" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header"></div>
                    <h5 className="modal-title p_title" >{report.candidateName}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                       <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <Col className="first_col">
                        <Row>
                            <p className="p_title">Company</p>
                            <p>{report.companyName}</p>
                            <p className="p_title">Interview Date</p>
                            <p>{dateFormatter(report.interviewDate)}</p>
                            <p className="p_title">Phase</p>
                            <p>{report.phase}</p>
                            <p className="p_title">Status</p>
                            <p>{report.status}</p>
                        </Row>
                    </Col>
                    <Col className="go_right">
                        <p className="p_title col_2">Notes</p>
                        <p className="col_2">{report.note}</p>
                    </Col>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )

}
export default ModalPage;