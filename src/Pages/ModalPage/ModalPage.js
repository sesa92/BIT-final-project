import React from 'react';

import { Col } from 'react-bootstrap';

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
                    <h5 className="modal-title">{report.candidateName}</h5>
                    {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button> */}
                </div><hr></hr>
                <div class="modal-body">
                    <Col className="person" xs={7}>
                            <p className="describe">Company</p>
                            <p>{report.companyName}</p>
                            <p className="describe">Interview Date</p>
                            <p>{dateFormatter(report.interviewDate)}</p>
                            <p className="describe">Phase</p>
                            <p>{report.phase}</p>
                            <p className="describe">Status</p>
                            <p>{report.status}</p>
                    </Col>
                    <Col className="notes">
                        <p className="describe">Notes</p>
                        <p>{report.note}</p>
                    </Col>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"  data-dismiss="modal" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )

}
export default ModalPage;