import React from 'react'

const Card = ({post, handleAlertEdit, handleEdit, handleDelete}) => {
    return (
      <div
        className="card w-45 m-2 animate__animated animate__bounceInRight"
      >
        <div className="card-header">
          <p className="h5">{post.name} </p>
          <button
            type="submit"
            onClick={() => handleDelete(post._id)}
            className="btn radio"
          >
            x
          </button>
        </div>
        <div
          className="card-body"
          onClick={handleAlertEdit}
          onDoubleClick={() => handleEdit(post._id)}
        >
          <p>IP: {post.ip}</p>
          <p>Whse: {post.warehouse}</p>
        </div>
      </div>
    );
}

export default Card
