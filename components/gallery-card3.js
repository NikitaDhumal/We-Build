import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card3.css'

import defaultImage from '../images/team-building-activities.png'

const GalleryCard3 = (props) => {
  return (
    <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card3-image"
      />
    </div>
  )
}

GalleryCard3.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src:{defaultImage}
    }

GalleryCard3.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard3
