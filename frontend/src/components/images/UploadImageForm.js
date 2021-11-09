import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uploadImage } from '../../actions/imageActions';
import ImageDropZone from './ImageDropZone';
import M from 'materialize-css/dist/js/materialize.min.js';


const UploadImageForm = ({ uploadImage }) => {
  const [file, setFile] = useState(null);
  const hiddenFileInput = useRef(null);

  useEffect(() => {
    if (file) {
      upload()
    }
  });

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const onClick = (e) => {
    setFile(null);
  };

  const buttonClick = event => {
    hiddenFileInput.current.click();
  };

  const upload = () => {
    if (!file) {
      M.toast({ html: 'Please choose a file first' })
    } else {
      const formData = new FormData();
      formData.append(
          "image",
          file
      );
      uploadImage(formData)
      setFile(null);
    }
  };

  return (
    <div className="center-align">
      <div>
        <h5>
          <p className="grey-text darken-4">Upload your image</p>
        </h5>
        <p className="padding-med grey-text lighten-3">File should be jpeg, png...</p>
      </div>
      <div className="grey darken-1">
        <ImageDropZone setFile={ setFile } />
      </div>
      <div className="grey-text lighten-5 upload">Or</div>
      <div>
          <button className="waves-effect blue lighten-1 btn upload-btn z-depth-2" onClick={buttonClick}>Upload a file</button>
          <input type="file" onChange={selectFile} onClick={onClick} accept="image/*" ref={hiddenFileInput} style={{ display: 'none' }} />
      </div>
    </div>
  )
}

UploadImageForm.propTypes = {
  uploadImage: PropTypes.func.isRequired,
}


export default connect(null, { uploadImage })(UploadImageForm);
