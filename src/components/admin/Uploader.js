import React, {useState, Fragment} from 'react';
import ProgressBar from "./ProgressBar";

const Uploader = () => {
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [error, setError] = useState(null);
    const fileType = ['image/png', 'image/jpeg', 'image/jpg'];
    const handleChange = (e) => {
        const fileSelected = e.target.files[0];
        if(fileSelected && fileType.includes(fileSelected.type)){       // if the file is not null
            setError('');
            setFile(fileSelected);
            setFilePreview(URL.createObjectURL(e.target.files[0]));
        } else {
            setError("Please upload a valid image with png/jpg/jpeg extension");
            setFile(null);
        }
    }
    return(
        <Fragment>
            <form>
                <label>
                    <input type="file" onChange={handleChange} />
                    <span>+</span>
                </label>
            </form>
            <div className="output">
                {error && <div> {error} </div> }
                {file && <div>{file.name}</div> }
                {file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </Fragment>
    )
}

export default Uploader;