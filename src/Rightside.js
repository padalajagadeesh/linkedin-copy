import React from 'react'
import './Rightside.css';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Rightside() {
    return (
        <div className="rightside-top">
            <div className="rightside-header">
                <h1>linkendin news </h1>
                <NewReleasesIcon/>
            </div>
            <div className="news"> 
        <div className="rightside-news">
            <FiberManualRecordIcon/>
                <p>corona viours</p>
                <FiberManualRecordIcon/>
                <p>linkendin news</p>
                <FiberManualRecordIcon/>
                <p>jobs notifications</p>
                <FiberManualRecordIcon/>
                <p>top news</p>
                <FiberManualRecordIcon/>
                <p>linkendin news</p>
                <FiberManualRecordIcon/>
                <p>related jobs for you</p>
                <FiberManualRecordIcon/>
                <p>top jobs</p>
                <FiberManualRecordIcon/>
                <p>what is your cuurent job?</p>
                <FiberManualRecordIcon/>
                <p>hot toipcs</p>
            </div>
        </div>
        </div>
         
    )
}

export default Rightside
