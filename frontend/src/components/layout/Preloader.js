import React, { Fragment } from 'react'

const Preloader = () => {
  return (
    <Fragment>
      <h5>Uploading...</h5>
      <div className="progress loader">
      <div className="indeterminate blue"></div>
      </div>
    </Fragment>
  )
}

export default Preloader
