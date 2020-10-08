import React, {Fragment, useState} from 'react';
import useFirestore from '../hooks/useFirestore';
import ModalImage from './ModalImage';
import {addScaleCorrection, motion} from 'framer-motion';

const ImageGrid = () => {
    const {docs} = useFirestore('images');
    const [selectedImage, setSelectedImage] = useState(null);
    const handleClick = (url) =>{
        setSelectedImage(url);
    }
    return(
        <Fragment>
            <div className="image-grid">
                {docs && docs.map(doc => (
                    <motion.div className="image-wrap" key={doc.id} onClick={() => handleClick(doc.url)}
                        layout
                        whileHover={{opacity: 1}} 
                    >
                        <motion.img src={doc.url} alt="Graphics"
                            initial={{opacity: 0.4}}
                            animate={{opacity: 1}}
                            className='image'
                        />
                        <motion.div className="trash"
                            whileHover={{scale :1.2}}    
                        >
                            <img src="https://img.icons8.com/android/24/ffffff/trash.png" id='trash'/>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            {selectedImage && <ModalImage selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
        </Fragment>
    )
}

export default ImageGrid;