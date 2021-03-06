import AboutMeIcon from '../../assets/images/AboutMeIcon.png';
import ExperienceIcon from '../../assets/images/ExperienceIcon.png';
import EducationIcon from '../../assets/images/EducationIcon.png';
import ContactMeIcon from '../../assets/images/ContactMeIcon.png';
import ProjectsIcon from '../../assets/images/ProjectsIcon.png';
import SkillsIcon from '../../assets/images/SkillsIcon.png';
import ResumeIcon from '../../assets/images/ResumeIcon.png';
import MapIcon from '../../assets/images/MapIcon.png';
import AboutComponent from './AboutComponent';
import ExperienceComponent from './ExperienceComponent';
import EducationComponent from './EducationComponent';
import ProjectComponent from './ProjectComponent';
import SkillsComponent from './SkillsComponent';
import ContactComponent from './ContactComponent';
import MapContainer from '../../containers/MapContainer';
import PDFViewer from '../PDFViewer';

export const dataConfig = {

    'thisPersonDataConfig' : {
        'showCaseComponents' : ['aboutMe', 'experience', 'education', 'contact']
    },

    'documentsDataConfig' : {
        'showCaseComponents' : ['projects', 'skills','location','resume']
    }

};

export const showCaseComponentConfig = {
    'aboutMe' : {
        name: 'About Me',
        iconName: AboutMeIcon,
        id: 1,
        modalId: 'aboutMeModal',
        dataConfigId : 'aboutMe',
        modalShow: false ,
        modalType :'componentData',
        componentData : AboutComponent
    }, 

    'experience' : {
        name: 'Experience',
        iconName: ExperienceIcon,
        id: 2,
        modalId: 'experienceModal',
        dataConfigId : 'experience',
        modalShow: false ,
        modalType :'componentData',
        componentData : ExperienceComponent
    }, 

    'education' : {
        name: 'Education',
        iconName: EducationIcon,
        id: 3,
        modalId: 'EducationModal',
        dataConfigId : 'education',
        modalShow: false ,
        modalType :'componentData',
        componentData : EducationComponent
    },

    'contact': {
        name: 'Contact Me',
        iconName: ContactMeIcon,
        id: 4,
        modalId: 'ContactMeModal',
        dataConfigId : 'contact',
        modalShow: false ,
        modalType :'componentData',
        componentData : ContactComponent
    },

    'projects' : {
        name: 'Projects',
        iconName: ProjectsIcon,
        id: 5,
        modalId: 'ProjectsModal',
        dataConfigId : 'projects',
        modalShow: false ,
        modalType :'componentData',
        componentData : ProjectComponent
    },

    'skills' : {
        name: 'Skills',
        iconName: SkillsIcon,
        id: 6,
        modalId: 'SkillsModal',
        dataConfigId : 'skills',
        modalShow: false ,
        modalType :'componentData',
        componentData : SkillsComponent
    },
    'location' : {
        name: 'My Location',
        iconName: MapIcon,
        id: 7,
        modalId: 'LocationModal',
        dataConfigId : 'location',
        modalShow: false ,
        modalType :'componentData',
        componentData : MapContainer
    },
    'resume' : {
        name: 'Resume',
        iconName: ResumeIcon,
        id: 8,
        modalId: 'resumeModal',
        dataConfigId : 'resume',
        modalShow: false ,
        modalType :'componentData',
        componentData : PDFViewer,
        isDocument: true
    }
}
