import React from 'react';
import './styles.css';
import Maps from '../../../assets/img/opportunities/maps.png';
import Setting from '../../../assets/img/opportunities/setting.png';

const OpportunitiesNavbar = () => {
  return (
    <div className='opportunities-navbar-wrapper'>
        <ul class="opportunities-navbar-breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#">Notifications</a></li>
        </ul>
        <div style={{display: "flex", justifyContent: "center", alignItems: 'center', gap:'2rem'}}>
            <span>
                Show Contract Signed
            </span>
            <div>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
            </div>
            <div className='opportunities-navbar-icon-wrapper'>
            <div className='opportunities-navbar-maps-icon-wrapper'>
                <img className='opportunities-navbar-maps-icon' src={Maps} alt=""></img>
            </div>
            <div className='opportunities-navbar-setting-icon-wrapper'>
                <img className='opportunities-navbar-setting-icon' src={Setting} alt=""></img>
            </div>
            </div>
            <div className='opportunities-navbar-adhoc-settings-button-wrapper'>
            <button>+ Adhoc Opportunity</button>
            </div>
        </div>
    </div>
  )
}

export default OpportunitiesNavbar