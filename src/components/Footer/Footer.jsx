import React from 'react'
import Logo from "../../assets/logo.png"
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    LinkIcon,
} from "@heroicons/react/outline";

import css from './Footer.module.css'

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>

            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Amazon</span>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Contact US</span>

                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>111 north avenue Orlando,FL 32801</span>
                    </span>
                    <span className={css.pngLine}>
                        {" "}
                        <PhoneIcon className={css.icon} />
                        <a href='tel:355-306-4415'>355-306-4415</a>
                    </span>


                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon} />
                        <a href='mailto:support@amazon.com'></a>
                    </span>                  
                </div>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Account</span>
                        <span className={css.pngLine}>
                        <LoginIcon className={css.icon} />
                        Sign In
                    </span>
                </div>   
            </div>


            <div className={css.block}>
                <div className={css.details}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon} />
                        <p>Safety Privacy & Trems</p>
                    </span>
                </div>
            </div>


        </div>

        
        <div className={css.copyRight}>
            <span>Copyright 2020 by Amazon, Inc.</span>
            <span>All rights reserved.</span>
        </div>
    </div>
  );
};

export default Footer;