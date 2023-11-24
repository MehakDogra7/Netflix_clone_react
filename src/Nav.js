import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if(window.scrollY > 100) {
    //             handleShow(true);
    //         }
    //         else handleShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // }, []);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div className= {`nav ${show && 'nav_black'}`}>
      <img 
        className='nav_logo'
        src='https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png'
        alt='Netflix Logo'
      />

        <img 
        className='nav_avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
        alt='Avatar'
      />
    </div>
  )
}

export default Nav
