import { SvgIcon } from '@mui/material';
import {HomeIcon, BuildingLibraryIcon, EnvelopeIcon, MapIcon} from '@heroicons/react/24/outline'

export const navItems = [
    {
      title: 'Inicio',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ChartBarIcon/> */}
          <HomeIcon/>
        </SvgIcon>
      ),
      id:'Inicio',
      dropdown: [],
      role: []
    },
    {
      title: 'Municipio',
      icon: (
        <SvgIcon fontSize='small' sx={{mr:1}}>
          {/* <FolderPlusIcon/> */}
          <BuildingLibraryIcon />
        </SvgIcon>
      ),
      id: 'Municipio',
      dropdown: [],
      role: []
    },
    {
      title: 'Contacto',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ListBulletIcon /> */}
          <EnvelopeIcon />
        </SvgIcon>
      ),
      id: 'Contacto',
      dropdown: [],
      role: ['admin', 'user']
    },
    {
      title: 'Mapa',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ListBulletIcon /> */}
          <MapIcon />
        </SvgIcon>
      ),
      id: 'Mapa',
      dropdown: [],
      role: ['admin', 'user']
    },
    {
      title: 'Comuna',
      icon: (
        <SvgIcon fontSize="small" sx={{mr:1}}>
          {/* <ListBulletIcon /> */}
          <MapIcon />
        </SvgIcon>
      ),
      id: 'Slider',
      dropdown: [],
      role: ['admin', 'user']
    }
  ];