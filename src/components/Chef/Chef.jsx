import React from 'react'
import "./Chef.css";
import  { motion } from "framer-motion";
import { images } from '../../constants';
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Chef = () => {
    return (
        <div className='app__chef'>
            <div className='app__chef-img'>
                <img src={images.chef} alt="chef-img"/>
            </div>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: .8 }}
            >
                <div className='app__chef-info'>
                    <h1>Rachael Ray</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis labore minima, quibusdam corrupti quod eius. Placeat maiores laudantium praesentium.
                    </p>
                    <div className='soical'>
                        <AiOutlineInstagram className='s'/>
                        <AiOutlineWhatsApp className='s'/>
                        <FaFacebookF className='s'/>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Chef