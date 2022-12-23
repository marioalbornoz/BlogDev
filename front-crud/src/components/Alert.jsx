import React from 'react'

import './styled.css';
import PropTypes from 'prop-types'

const Alert = ({message, mostraralertEdit}) => {
  const quitarAlert = ()=>{
    mostraralertEdit(false)
  }
    return (
      <div className="alert alert-info my-3 x animate__animated animate__bounce">
        <p>{message}</p>
        <input onClick={quitarAlert} className="btn" type="button" value="x"/>
      </div>
    );
}

Alert.propTypes = {
    message: PropTypes.array
}

export default Alert
