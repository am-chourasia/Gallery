import React, {useState} from 'react';
import {motion} from 'framer-motion';

const ModalImage = ({selectedImage, setSelectedImage}) => {
    const [fullscreen, setFullscreen] = useState(false)
    const zoomout = (e)=>{
        if(e.target.classList.contains('backdrop'))
            setSelectedImage(null);
    }
    const toogleFullscreen = (e) =>{
        if(fullscreen)
        {
            closeFullscreen(e.target);
            e.target.style.cursor = "zoom-in";
        }    
        else    
        {
            openFullscreen(e.target);
            e.target.style.cursor = "zoom-out";
        }    
        setFullscreen(!fullscreen);
    }
    function openFullscreen(elem) {
        if (elem.requestFullscreen) {
        elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
        }
    }
    function closeFullscreen(elem) {
    if (document.exitFullscreen) {
    document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
    }
    }
    return (
        <motion.div className="backdrop" onClick={zoomout}
            initial={{opacity:0}}
            animate={{opacity: 1}}
        >
            <img src={selectedImage} alt="kshitij" onClick={toogleFullscreen}/>
        </motion.div>
    )
}

export default ModalImage;