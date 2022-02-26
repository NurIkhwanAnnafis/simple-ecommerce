import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { ContextApp } from "../../context/app/app-context-provider";
import { selectCollection } from "../../redux/shop/shop.selector";

import './collection.style.scss';

const CollectionPage = () => {
  const params = useParams();
  const context = useContext(ContextApp);
  const { shopContext: { collections } } = context;
  const { title, items = [] } = collections[params.id];

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
    )
  }

export default CollectionPage;