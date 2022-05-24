import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './PhotoGallery.css';

const PhotoGallery = () => {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };
    return (
        <div className="app__gallery " id='Photo Gallery'>
            <div className='app__gallery-info'>
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                >
                    <p>Instagram <sub><BsInstagram /></sub></p>
                    <h1>Photo Gallery</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus consectetur ad totam maiores earum commodi repellat quo accusamus quas esse!</h4>
                    <button>View Menu</button>
                </motion.div>
            </div>
            <div className='app__gallery-images'>
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                            <img src={image} alt="gallery_image" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;