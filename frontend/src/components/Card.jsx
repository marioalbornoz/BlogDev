import React from 'react'

const Card = ({post, handleAlertEdit, handleEdit, handleDelete}) => {
    return (
      <div
        className="card w-45 m-2 animate__animated animate__bounceInRight"
      >
        <div className="card-header">
          <p className="h5">{post.title} </p>
          <button
            type="submit"
            onClick={() => handleDelete(post.id)}
            className="btn radio"
          >
            x
          </button>
        </div>
        <div
          className="card-body"
          onClick={handleAlertEdit}
          onDoubleClick={() => handleEdit(post.id)}
        >
          <p>{post.content}</p>
        </div>
      </div>
    );
}

export default Card
