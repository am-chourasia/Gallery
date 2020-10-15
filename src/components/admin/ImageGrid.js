import React, {Fragment, useState} from 'react';
import useFirestore from '../hooks/useFirestore';
import ModalImage from './ModalImage';
import {motion} from 'framer-motion';
import {Storage, Firestore} from '../firebase/config';

const ImageGrid = () => {
    const {docs} = useFirestore('images');
    const [selectedImage, setSelectedImage] = useState(null);
    const handleClick = (e, url) =>{
        if(e.target.classList.contains('image'))          //to check for the click on the image and not on the trash can
            setSelectedImage(url);
    }
    const deleteDB = (doc) => {
        Firestore.collection('images').doc(doc.id).delete();    //deleting from the database
        Storage.ref().child(`${doc.name}`).delete();            //deleting from the storage
    }
    return(
        <Fragment>
            <div className="image-grid">
                {docs && docs.map(doc => (
                    <motion.div className="image-wrap" key={doc.id} onClick={(event) => handleClick(event, doc.url)}
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
                            onClick={()=> deleteDB(doc)}
                        >
                            <img src="https://img.icons8.com/android/24/ffffff/trash.png" alt='delete' id='trash'/>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            {selectedImage && <ModalImage selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
        </Fragment>
    )
}

export default ImageGrid;