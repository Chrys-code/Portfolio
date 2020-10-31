import React from 'react'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import HistoryIcon from '@material-ui/icons/History';
import EqualizerIcon from '@material-ui/icons/Equalizer';
function ResumeAppLibrary(props) {

    const {handler, state} = props;

    const iconStyle = {
        padding: '8px',
    }


    return (
        <div className="resume_library">
            <div className="resume_library_icons">
                <div className="resume_library_icons_wrapper"   id="Education"  onClick={handler}>
                    <ImportContactsIcon style={{...iconStyle, color: state.Education === true? "orange" : "white"}}/>
                </div>
                <div className="resume_library_icons_wrapper"  id="Skills" onClick={handler} >
                    <LaptopChromebookIcon  style={{...iconStyle, color: state.Skills === true? "orange" : "white"}} />
                </div>
                <div className="resume_library_icons_wrapper"   id="Work" onClick={handler}>
                    <HistoryIcon style={{...iconStyle, color: state.Work === true? "orange" : "white"}} />
                </div>
                <div className="resume_library_icons_wrapper" id="Hobby" onClick={handler}>
                    <EqualizerIcon   style={{...iconStyle, color: state.Hobby === true? "orange" : "white"}} />
                </div>
            </div>
            
            <div className="options">
            <div className="resume_library_option_1">
                <div className="option" id="Education"  onClick={handler} >Education</div>
                <div className={(state.Education === true? "slide--active" : "slide")}></div>
            </div>
            <div className="resume_library_option_2">
                <div className="option" id="Skills" onClick={handler}  >Skills</div>
                <div className={(state.Skills === true? "slide--active" : "slide")}></div>
            </div>
            <div className="resume_library_option_3">
                <div className="option" id="Work" onClick={handler}  >Work</div>
                <div className={(state.Work === true? "slide--active" : "slide")}></div>
            </div>
            <div className="resume_library_option_4">
                <div className="option" id="Hobby" onClick={handler}  >Hobby</div>
                <div className={(state.Hobby === true? "slide--active" : "slide")}></div>
            </div>
        </div>
        </div>

    )
}

export default ResumeAppLibrary
