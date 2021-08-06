import React from 'react';
import './Sidebar.css';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Akhil Chandran</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelheader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addchannel"/>
                </div>
                <div className="sidebar__channellist">
                <SidebarChannel/>
                <SidebarChannel/>
            </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceicon"
                fontSize="large"/>
                <div className="sidebar__voiceinfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceicons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar/>
                <div className="sidebar__profileinfo">
                    <h3>@akhil</h3>
                    <p>#my id</p>
                </div>
                <div className="sidebar__profileicons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
