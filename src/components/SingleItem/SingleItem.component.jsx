import React from 'react';

import './SingleItem.styles.scss';

const SingleItem = ({
  data: { ID, Name, Description, Price, selected },
  handleDelete,
  openUpdateModal,
}) => {
  const [isClicked] = React.useState(false);

  return (
    <div
      onClick={() => openUpdateModal(isClicked, ID)}
      className={
        selected ? 'singleitem-container active' : 'singleitem-container'
      }
    >
      <div className="left-side">
        <div className="img-container">
          <img
            src="https://previews.123rf.com/images/fordzolo/fordzolo1511/fordzolo151100093/47643461-new-product-green-stamp-text-on-green-circle-on-a-white-background-and-star.jpg"
            alt="newProduct"
          />
        </div>
        <div className="details">
          <div className="name">{Name}</div>
          <div className="description">{Description}</div>
        </div>
      </div>
      <div className="right-side">
        <input
          onClick={() => handleDelete(ID)}
          className="btn-delete"
          type="button"
          value="🗑️"
        />
      </div>
    </div>
  );
};

export default SingleItem;
