import React, {Fragment, useState} from 'react';
import useFirestore from './hooks/useFirestore'
import ModalImage from './ModalImage';

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
                    <div className="image-wrap" key={doc.id} onClick={ () => handleClick(doc.url) } >
                        <img src={doc.url} alt="Graphics"/>
                    </div>
                ))}
            </div>
            {selectedImage && <ModalImage selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
        </Fragment>
    )
}

export default ImageGrid;