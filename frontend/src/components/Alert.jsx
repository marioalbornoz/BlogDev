import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({message}) => {
    return (
      <div className="alert alert-info my-3 animate__animated animate__bounce">
        <p>{message}</p>
      </div>
    );
}

Alert.propTypes = {
    message: PropTypes.array
}

export default Alert
