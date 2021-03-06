import React from 'react'
import { Card,  Container, Col, Button } from 'react-bootstrap'
import styles from '../stylesheets/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChargingStation } from "@fortawesome/free-solid-svg-icons";

function BatteryComponent (){

    return(
        <Card.Body>
            <Card className={`${styles.TaskBarPopupCard} ${styles.ToolBarPopUpComponent}p-2`}>
                <Container className={`row`}>
                    <Col md={2}><FontAwesomeIcon icon={faChargingStation} size="2x"></FontAwesomeIcon></Col>
                    <Col md={10}>
                        <p className={`m-2`}>
                            Charging<br/>
                            90 %, 10 minutes to fully charged.<br/>
                            <Button variant="success" className={`float-right`} size="sm">Power Saver</Button>
                        </p>
                    </Col>
                </Container>
                
            </Card>
        </Card.Body>
    );

}

export default BatteryComponent;