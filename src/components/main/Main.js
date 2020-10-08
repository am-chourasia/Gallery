import React from 'react';
import Header from "../Header";
import useFirestore from '../hooks/useFirestore';
// import {motion} from 'framer-motion';


function Main() {
    const { docs } = useFirestore('images');
    return (
            <div className="main">
            <Header />
            {docs && docs.map(doc => (
                    <div className="main-images" key={doc.id}
                        style={{
                            background: `url(${doc.url})`,
                            backgroundAttachment: "fixed",
                            backgroundSize: 'cover'
                        }}
                    />
            ))}
            </div>
    )
}

export default Main;
