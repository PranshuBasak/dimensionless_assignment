import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Navigator = ({ text, icon, active }) => {
  
  const isActive = active === true;

  return (
    <ListItem key={text} disablePadding>
      <ListItemButton className={isActive ? "bg-sky-100 rounded-xl" : "text-black-500"}>
        <ListItemIcon>
          <div className={isActive ? "text-sky-500" : "text-black-500"}>
            {icon}
          </div>
        </ListItemIcon>
        <ListItemText primary={text} className={isActive ? "text-sky-500 text-xl" : "text-black-500"} />
      </ListItemButton>
    </ListItem>
  );
};

Navigator.defaultProps = {
  active: false 
};

export default Navigator;
