import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearImage } from '../../actions/imageActions';
import M from 'materialize-css/dist/js/materialize.min.js';


const ImageItem = ({ image, clearImage }) => {

  const copyLink = () => {
    navigator.clipboard.writeText(image.data.url)
    M.toast({ html: 'Copied Link!' })
  };

  const onBack = () => {
    clearImage();
  }


  return (
    <div>
      <h5>
        <i className="material-icons x-med green-text accent-3 ">check_circle</i>
        <p>Uploaded successfully</p>
      </h5>
      <div className="card-image upload">    
        <img className="responsive-image" src={image.data.url} alt="User's upload" />
      </div>
      <div>
        <input type="text" value={image.data.url} readOnly />
        <button className="waves-effect waves-light btn" onClick={copyLink}>Copy Link</button>
      </div>
      <div className="padding-sm">
        <a className="cyan-text lighten-5" href="/" onClick={onBack}>
          <span>
            <i className="material-icons tiny">arrow_back</i> Upload again
          </span>
        </a>
      </div>
    </div>
  )
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
  clearImage: PropTypes.func.isRequired,
}

export default connect(null, { clearImage })(ImageItem);
