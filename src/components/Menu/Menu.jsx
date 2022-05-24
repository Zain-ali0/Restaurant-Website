import React from 'react';
import { MenuItem } from '../../components';
import { data, images } from '../../constants';
import { motion } from 'framer-motion';
import './Menu.css';

const Menu = () => {
    return (
        <div className="app__specialMenu " id="Menu">
            <div className="app__specialMenu-title">
                <h1 >Today&apos;s Special</h1>
            </div>
            <div className="app__specialMenu-menu">
                <div className="app__specialMenu-menu_wine ">
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
                        <div className="app__specialMenu_menu_items">
                            {data.wines.map((wine, index) => (
                                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="app__specialMenu-menu_img">
                    <motion.img
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        src={images.menu}
                        alt='menu-img'
                    >
                    </motion.img>
                </div>
                <div className="app__specialMenu-menu_cocktails">
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="app__specialMenu-menu_heading">Cocktails</p>
                        <div className="app__specialMenu_menu_items">
                            {data.cocktails.map((cocktail, index) => (
                                <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Menu;