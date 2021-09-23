import React from 'react';

import { Row, Col } from 'react-bootstrap';

import './ModalPage.css';




function ModalPage({ report, onClose }) {
    return (
        <div className="modal visibilityFix" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header"></div>
                    <h5 className="modal-title">{report.candidateName}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <Col>
                        <Row>
                            <p>Company</p>
                            <p>{report.companyName}</p>
                            <p>Interview Date</p>
                            <p>{report.interviewDate}</p>
                            <p>Phase</p>
                            <p>{report.phase}</p>
                            <p>Status</p>
                            <p>{report.status}</p>
                        </Row>
                    </Col>
                    <Col>
                        <p>Notes</p>
                        <p>{report.note}</p>
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