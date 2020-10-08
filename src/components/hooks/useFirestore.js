import {useState, useEffect} from 'react';
import {Firestore} from '../firebase/config';
//component to upload files to the collection recieved
const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        const unsub = Firestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach( doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            })
        return ()=>unsub();        
    }, [collection])

    return {docs};
}

export default useFirestore;