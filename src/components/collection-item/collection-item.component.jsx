import React, { useContext } from "react";
import CustomButton from "../custom-button/custom-button.component";
import { ContextApp } from '../../context/app/app-context-provider';

import './collection-item.style.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const context = useContext(ContextApp);
  const { addItem } = context.cartContext;
  console.log(context)
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
  )
}

export default CollectionItem;