// import { storage } from 'firebase';
import {useState, useEffect} from 'react';
import {Storage, Firestore, timestamp} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(() => {
        //whereabouts of the file that is saved
        const storageRef = Storage.ref(file.name);              //file will be identified with the file name in the database
        const collectionRef = Firestore.collection('images');   //will be stored in the collection 'images'

        storageRef.put(file).on(
            'state_changed',
            (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
               setError(err);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                collectionRef.add({ 
                    name: file.name,
                    url, 
                    createdAt: timestamp() 
                })  // Like the schema of the mongo
                setUrl(url);
            }
        )
    }, [file]);

    return { progress, error, url };
}

export default useStorage;