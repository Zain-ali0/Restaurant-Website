import React from 'react';
import "./Header.css";
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <div className='app__header' id='Home'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: .8 }}
            >
                <div className='app__header-info'>
                    <h1>An old <span>experience</span> with a <span>modern</span> touch</h1>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Provident dolorum tempore ipsa ipsum, quas, neque id similique
                    ullam cupiditate eos, maiores debitis dolore incidunt laudantium
                    dolores? Hic aut id dolor esse rem? Soluta, corrupti laboriosam,
                    nobis est asperiores ullam aspernatur vero impedit porro nisi
                    iure numquam minus atque aperiam tenetur?
                    </p>
                    <button>Explore Menu</button>
                </div>
            </motion.div>
        </div>

    )
}

export default Header