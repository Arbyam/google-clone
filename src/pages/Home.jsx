import React from 'react'
import './Home.css'
import MicIcon from '@mui/icons-material/Mic';
import { Link } from "react-router-dom"
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search';

function Home() {
  return (
    <div className='home'>
     
      <div className="home__header">
        <div className="header__left">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="header__right">
        <Link to='/gmail'>Gmail</Link>
        <Link to='/images'>Images</Link>
        <AppsIcon/>
      <AccountCircleIcon className='icon'/>
        </div>
      </div>

      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
      <div className="home__input--container">
        <Search/>
      </div>
      </div>
    </div>
  )
}

export default Home
