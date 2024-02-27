import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='search-wrapper'>
          <SearchSharpIcon className='search-icon'/>
          <input  type="text" />
        </div>
        <Link to='/'>Categories</Link>
        <Link to='/builders'>Website Builders</Link>
        <Link to='/deals'>Today's deals</Link>
    </div>
  )
}

export default Navbar