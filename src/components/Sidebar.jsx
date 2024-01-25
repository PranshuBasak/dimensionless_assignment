import * as React from 'react';
import List from '@mui/material/List';
import Navigator from './Navigator';
import LanguageIcon from '@mui/icons-material/Language';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function Sidebar() {
  return (
    <div className="flex-row justify-center items-center p-2">
      <img src="/assets/company_logo.svg" alt="" className='w-32'/>
      <p className='pl-4 text-gray-500 text-sm'>MAIN MENU</p>
      <List>
        <Navigator text={"News Quant"} icon={<LanguageIcon />} active={true}/>
        <Navigator text={"Real Economic Indicators"} icon={<SignalCellularAltIcon />} />
        <Navigator text={"One Score"} icon={<ScoreboardIcon />} />
        <Navigator text={"Alert Central"} icon={<NotificationImportantIcon />} />
        <Navigator text={"Customer Support"} icon={<SupportAgentIcon />} />
      </List>
    </div>
  );
}
