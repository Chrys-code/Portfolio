import React from 'react'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import HistoryIcon from '@material-ui/icons/History';
import EqualizerIcon from '@material-ui/icons/Equalizer';
function ResumeAppLibrary(props) {

    const {handler, state} = props;

    return (
        <div className="resume_library">
            <div className="resume_library_icons">
            <ImportContactsIcon style={{color: 'white'}}/>
            <LaptopChromebookIcon style={{color: 'white'}} />
            <HistoryIcon style={{color: 'white'}} />
            <EqualizerIcon style={{color: 'white'}} />
            </div>
            <div className="options">
            <div className="resume_library_option_1">
                <div className="option" onClick={handler}>Education</div>
                <div className={(state.Education === true? "slide--active" : "slide")}></div>
            </div>
            <div className="resume_library_option_2">
                <div className="option" onClick={handler}>Skills</div>
                <div className={(state.Skills === true? "slide--active" : "slide")}></div>
            </div>
            <div className="resume_library_option_3">
                <div className="option" onClick={handler}>Work</div>
                <div className={(state.Work === true? "slide--active" : "slide")}></div>
            </div>
            <div className="resume_library_option_4">
                <div className="option" onClick={handler}>Hobby</div>
                <div className={(state.Hobby === true? "slide--active" : "slide")}></div>
            </div>
        </div>
        </div>

    )
}

export default ResumeAppLibrary
