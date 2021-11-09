import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImageItem from './ImageItem';
import UploadImageForm from './UploadImageForm';
import Preloader from '../layout/Preloader';
const Images = ({ image:{ image, loading }}) => {

  if (loading) {
    return (
      <div className="valign-wrapper">
        <div className="row center">
          <Preloader />
        </div>
      </div>
    )
  }
  return (
    <div className="valign-wrapper">
      <div className="row center">
        <div className="card white z-depth-3 main-card">
          <div className="card-content">
            {image === null ? 
              (<UploadImageForm />) : 
              (
                <Fragment>
                  <ImageItem image={image} />
                </Fragment>
              )
            }  
          </div>
        </div>    
      </div>
    </div>
  )
}

Images.propTypes = {
  image: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  image: state.image
});


export default connect(mapStateToProps)(Images);
