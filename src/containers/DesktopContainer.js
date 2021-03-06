import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css';
import TaskbarContainer from './TaskbarContainer';
import DesktopIconContainer from './DesktopIconContainer';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import CreditModal from '../components/CreditModal';

 function DesktopContainer(){
    const [modalShow, setModalShow] = useState(false);

     return (
         <div>
            <ContextMenuTrigger id="same_unique_identifier">
                <Container className ={styles.DesktopContainer}>
                    <DesktopIconContainer></DesktopIconContainer>
                    <TaskbarContainer></TaskbarContainer>
                </Container>
            </ContextMenuTrigger>

            <ContextMenu id="same_unique_identifier" className={`${styles.RightClickMenu} ${styles.BackgroundBlur} ${styles.fontColorWhite} rounded`}>
                <MenuItem 
                    className={`${styles.RightClickMenuItem} ${styles.MediumFont} border-bottom p-2 rounded lead`}
                    onClick={()=> window.open('https://git.arsh.dev/arshsahzad/Windfolio', '_blank')}
                >
                    Source Code
                </MenuItem>
                <MenuItem 
                    className={`${styles.RightClickMenuItem} ${styles.MediumFont} border-bottom p-2 rounded lead`}
                    onClick={()=> window.open('https://arsh.link/github', '_blank')}
                >
                    GitHub Profile
                </MenuItem>
                <MenuItem 
                    className={`${styles.RightClickMenuItem} ${styles.MediumFont} border-bottom p-2 rounded lead`}
                    onClick={()=> window.open('mailto: hello@arsh.dev', '_blank')}
                >
                    Mail Me
                </MenuItem>
                <MenuItem 
                    className={`${styles.RightClickMenuItem} ${styles.MediumFont} border-bottom p-2 rounded lead`}
                    onClick={() => setModalShow(true)}
                >
                    Credits
                </MenuItem>
                <CreditModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                
            </ContextMenu>
       </div>
     );
 }

 export default DesktopContainer;