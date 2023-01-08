import React, { Children } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function Mode({Children, mode}) {
  return (
    <div className={`lightmode  ${mode && 'darkmode'}`}>
       {Children}
    </div>
  )
}

export default Mode