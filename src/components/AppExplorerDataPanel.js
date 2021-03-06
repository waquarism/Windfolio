import React, { useState } from 'react';
import styles from '../stylesheets/style.module.css';
import DesktopIconComponent from './DesktopIconComponent';
import AppModal from './AppModal';
import classes from '../stylesheets/style.module.css';
import { Alert } from 'react-bootstrap';

function AppExplorerDataPanel(props) {

    const [componentModalDetails, setComponentModalDetails] = useState({
        componentDataList: props.modaldetails.data
    });
    
    const changeComponentModalDetails = (component , index) => {
        var componentDataListMeta = componentModalDetails.componentDataList;
        componentDataListMeta[index] = component;
        setComponentModalDetails( {componentDataList:componentDataListMeta});
    }

    const handleModalVisibility = (isVisible ,index) => {
        var component = componentModalDetails.componentDataList[index];
        component.modalShow = isVisible;
        changeComponentModalDetails(component, index);
    }

    if (props.modaldetails.modalType === 'explorer'){   
        return (        
            <div className={`${styles.AppExplorerDataPanel}`}>
                {
                    componentModalDetails.componentDataList.map((dataComponent, index) => {
                        return(
                            <React.Fragment key={index}>
                                <DesktopIconComponent
                                    captioncolor = 'fontColorBlack'                                
                                    name={dataComponent.name}
                                    iconName={dataComponent.iconName}
                                    onClickEvent={() => handleModalVisibility(true, index)}                                    
                                />

                                <AppModal
                                    name={dataComponent.name}
                                    iconname={dataComponent.iconName}
                                    show={dataComponent.modalShow}                            
                                    onHide={() => handleModalVisibility(false, index)}
                                    modaldetails={dataComponent}
                                />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        );
    }else if (props.modaldetails.modalType === 'componentData'){
        return(
            <React.Fragment>
            <props.modaldetails.componentData></props.modaldetails.componentData>
            </React.Fragment>
        )
    }else{
        console.log("Modal Type is set to : "+props.modaldetails.modalType)
        return(
            <Alert variant='danger' className={`m-5`}>
                Something gone wrong !! Check the console for logs.
            </Alert>
        )
    }
}

export default AppExplorerDataPanel;
