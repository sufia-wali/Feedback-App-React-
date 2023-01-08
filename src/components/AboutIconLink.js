import React from 'react'
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';

function AboutIconLink() {

  return (
    <div className='about-link'>
       <Link to="/about"><HelpIcon /></Link>
    </div>
  )
}

export default AboutIconLink