import React from 'react'
import HomeLogo from '../../assets/img/navbar/logo.png'
import NotificationsIcon from '../../assets/img/navbar/bell.png'
import SettingsIcon from '../../assets/img/navbar/customer-support.png'
import ProfileIcon from '../../assets/img/navbar/user.png'
import './styles.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-home'>
            <img src={HomeLogo} alt='home-logo' className='navbar-home-logo'/>
        </div>
        <div className='navbar-links-wrapper'>
            <div className='navbar-link-1'>
                Dashboard
            </div>
            <div className='navbar-link-1'>
                Account
            </div>
            <div className='navbar-link-1'>
                Opportuinities
            </div>
        </div>

        <div className='navbar-icons-wrapper'>
            <div className='navbar-notifications'>
                <img src={NotificationsIcon} alt='navbar-notifications-icon' className='notifications-icon'/>
            </div>
            <div className='navbar-notifications-2'>
                <img src={SettingsIcon} alt='navbar-settings-icon' className='settings-icon'/>
            </div>
        </div>

        <div className='navbar-profile-details-wrapper'>
            <div className='navbar-profile-details'>
            <div className='navbar-profile-name'>
                Anand Mishra
            </div>
            <div className='navbar-profile-designation'>
                Designation
            </div>
            </div>
            <div className='navbar-profile-icon'>
                <img src={ProfileIcon} alt='navbar-profile-icon' className='navbar-icon-profile'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar