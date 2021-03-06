import React, { useState } from 'react';
import BatmanEmojiIcon from '../assets/images/BatmanEmojiIcon.png';
import DocumentsIcon from '../assets/images/DocumentsIcon.png';
import ContactMeIcon from '../assets/images/ContactMeIcon.png';
import ResumeIcon from '../assets/images/ResumeIcon.png';
import DesktopIconComponent from '../components/DesktopIconComponent';
import AppModal from '../components/AppModal';
import styles from '../stylesheets/style.module.css';
import {dataConfig, showCaseComponentConfig} from '../components/dataComponents/dataConfig';
import ContactComponent from '../components/dataComponents/ContactComponent';
import PDFViewer from '../components/PDFViewer';

function DesktopIconContainer() {

    const [desktopIcons, setdesktopIcons] = useState({
        icons: [
            {
                name: 'This Person',
                iconName: BatmanEmojiIcon,
                id: 1,
                modalId: 'thisPersonModal',
                modalShow: false
            },
            {
                name: 'Documents',
                iconName: DocumentsIcon,
                id: 2,
                modalId: 'documentsModal',
                modalShow: false
            },
            {
                name: 'Contact Card',
                iconName: ContactMeIcon,
                id: 3,
                modalId: 'contactModal',
                modalShow: false
            },
            {
                name: 'View Resume',
                iconName: ResumeIcon,
                id: 4,
                modalId: 'resumeModal',
                modalShow: false
            }
        ]
    });

    const AppModalDetails = {
        'thisPersonModal': {
            topPanel: true,
            sidePanel: true,
            modalType: 'explorer',
            data: getModalSubComponentData('thisPersonDataConfig')
        },

        'documentsModal': {
            topPanel: true,
            sidePanel: true,
            modalType: 'explorer',
            data: getModalSubComponentData('documentsDataConfig')
        },
        'contactModal': {
            topPanel: true,
            sidePanel: true,
            modalType: 'componentData',
            componentData : ContactComponent
        },
        'resumeModal': {
            topPanel: true,
            sidePanel: true,
            modalType: 'componentData',
            componentData : PDFViewer
        }
    };

    const [zIndexCounter, setzIndexCounter] = useState(1000);

    // TODO : Make the initialization dynamic
    const [ModalzIndexValues, setModalzIndexValues] = useState({
        'thisPersonModal': 1000,
        'documentsModal': 1000,
        'contactModal':1000,
        'resumeModal':1000
    });

    const setModalShowValue = (index, modalId, value) => {
        var iconsMeta = desktopIcons.icons;
        iconsMeta[index].modalShow = value;
        setdesktopIcons({ icons: iconsMeta });
        setzIndexCounter(zIndexCounter + 1);
        var ModalzIndexValuesMeta = ModalzIndexValues
        ModalzIndexValuesMeta[modalId] = zIndexCounter;
        setModalzIndexValues(ModalzIndexValuesMeta);
    }

    function getModalSubComponentData(configId){
        var values = {};
        var dataValues = [];
        Array.prototype.forEach.call(dataConfig[configId]['showCaseComponents'],element => {
            dataValues.push(showCaseComponentConfig[element]);            
        });
        return(
            dataValues
        );
    }

    return (
        <div className={`d-flex align-items-start flex-column bd-highlight mt-1`}>
            {desktopIcons.icons.map((icon, index) => {
                return (
                    <React.Fragment key={index}>
                        <DesktopIconComponent
                            className ={styles.DesktopIconComponent}
                            onClickEvent={() => setModalShowValue(index, icon.modalId, true)}
                            name={icon.name}
                            iconName={icon.iconName}
                            captioncolor='fontColorWhite'
                            iconwidth={35}
                        />

                        <AppModal
                            name={icon.name}
                            iconname={icon.iconName}
                            show={icon.modalShow}                            
                            onHide={() => setModalShowValue(index, false)}
                            modaldetails={AppModalDetails[icon.modalId]}
                            zindexvalue={ModalzIndexValues[icon.modalId]}
                        />
                    </React.Fragment>
                )
            }
            )}
        </div>
    );
}

export default DesktopIconContainer;
