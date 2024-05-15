import React from 'react';
import OpportunitiesNavbar from './OpportunitiesNavbar/OpportunitiesNavbar';
import './styles.css';

const Opportunities = () => {
  return (
    <>
        <div className='opportunities-wrapper'>
            <h3 className='opportunities-link'>
                Opportunities
            </h3>
            <OpportunitiesNavbar />
        </div>
    </>
  )
}

export default Opportunities