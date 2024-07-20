import React from 'react'
import QuickLink from './QuickLink'
import Contacts from './Contacts'

const FooterContent = () => {
  return (
    <div>
        <div className="footer-content footer-columns">
            <div className="column1">
            <img src="/logo.png" alt="" srcset="" height={'82px'} width={'168px'}/>
            </div>
            
            <div className='child'>
                <QuickLink/>
                <Contacts/>
            </div>
        </div>
    </div>
  )
}

export default FooterContent