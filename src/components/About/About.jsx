import React from 'react';
import './About.css';
import { images } from "../../constants";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='app__about' id='About'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: .8 }}
            >
                <div className='app__about-info'>
                    <h1>About <span>Us</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta rem eos numquam explicabo mollitia nesciunt officia sapiente accusamus consequatur.
                    </p>
                    <div className='soical'>
                        <AiOutlineInstagram className='s' />
                        <AiOutlineWhatsApp className='s' />
                        <FaFacebookF className='s' />
                    </div>
                </div>
            </motion.div>
            <div className='app__about-img'>
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.aboutimg}
                    alt='about-img'
                >
                </motion.img>
            </div>
            <motion.div
                whileInView={{ y: [100, -100], opacity: [0, 1] }}
                transition={{ duration: .8 }}
            >
                <div className='app__about-info'>
                    <h1><span>Our</span> History</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum necessitatibus consectetur, unde quos neque illo quo earum aliquid commodi ad!
                    </p>
                    <div className='soical'>
                        <AiOutlineInstagram className='s' />
                        <AiOutlineWhatsApp className='s' />
                        <FaFacebookF className='s' />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About;