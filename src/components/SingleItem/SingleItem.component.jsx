import React from 'react';

import './SingleItem.styles.scss'


const SingleItem = ({data:{ID , Name , Description , Price, selected}, handleDelete, openUpdateModal}) => {

    const [isClicked , setIsClicked] = React.useState(false)

    React.useEffect(() => {
      openUpdateModal(isClicked , ID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isClicked])

console.log('child',selected, ID)
  return (
    <div onClick={()=>setIsClicked(!isClicked)} className={selected ? "singleitem-container " : "singleitem-container active"}>
      <div className="left-side">
    <div className="img-container">
      <img src="https://previews.123rf.com/images/fordzolo/fordzolo1511/fordzolo151100093/47643461-new-product-green-stamp-text-on-green-circle-on-a-white-background-and-star.jpg" alt="newProduct" />
    </div>
    <div className="details">
    <div className="name">{Name}</div>
    <div className="description">{Description}</div>
    </div>
    </div>
    <div className="right-side">
    <input onClick={()=>handleDelete(ID)} className="btn-delete" type="button" value="🗑️" />
    </div>
    </div>
  )
}

export default SingleItem;