import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";

import './collection.style.scss';

const CollectionPage = ({ collection }) => {
  const { title, items = [] } = collection;
  console.log(collection)
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

const MapStateToProps = (state) => {
  const params = useParams();

  return ({
    collection: selectCollection(params.id)(state)
  })
}

export default connect(MapStateToProps, null)(CollectionPage);