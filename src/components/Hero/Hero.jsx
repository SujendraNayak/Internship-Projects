import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {motion} from "framer-motion"

import {BsArrowRight} from 'react-icons/bs'
const Hero = () => {
    const transition = {duration:3,type:"spring"}
  return (
    <div className={css.container}>

        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>
            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Seedily say has suitable diposal and boy. Exercise joy man children rejoiced</span>
            </div>
        </div>

        <div className={css.wrapper}>
            <motion.div
                initial={{bottom: "2rem"}}
                whileInView={{bottom: "0rem"}}
                className={css.blueCircle}
                transition={transition}
            ></motion.div>

            <motion.img
                initial={{bottom: "-2rem"}}
                whileInView={{bottom: "0rem"}}             
                transition={transition} 
                src={HeroImg} alt="" width={600}
             />

           
            <motion.div 
            initial={{right: "4%"}}
            whileInView={{right: "2%"}}             
            transition={transition}            
            className={css.cart2}>

                <RiShoppingBagFill />
                <div className={css.signup}>
                    <span>Best Signup offers</span>

                    <div>
                        <BsArrowRight />
                    </div>

                </div>
            </motion.div>
        </div>

        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
                
            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>Happy customers</span>
            </div>
        </div>
    </div>
) 
}

export default Hero