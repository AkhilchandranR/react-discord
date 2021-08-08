import React from 'react';
import './ChatHeader.css';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import NotificationsIcon from '@material-ui/icons/Notifications';

function ChatHeader({ channelName }) {
    return (
        <div className="chatheader">
            <div className="chatheader__left">
                <h3><span className="chatheader__hash">#</span>
                {channelName}</h3>
            </div>
            <div className="chatheader__right">
                <NotificationsIcon/>
                <EditLocationIcon/>
                <PeopleAltRoundedIcon/>
                <div className="chatheader__search">
                    <input placeholder="Search"/>
                    <SearchRoundedIcon/>
                </div>
                <SendRoundedIcon/>
                <HelpRoundedIcon/>
            </div>
            
        </div>
    )
}

export default ChatHeader
