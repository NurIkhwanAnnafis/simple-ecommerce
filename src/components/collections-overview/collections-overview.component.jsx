import React, { useContext } from "react";
import { ContextApp } from "../../context/app/app-context-provider";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

import './collections-overview.style.scss';

const CollectionsOverview = () => {
  const context = useContext(ContextApp);
  const { shopContext: { collections } } = context;
  let listCollections = selectCollectionsForPreview(collections);

  return (
    <div className="collections-overview">
      {listCollections.map(({ id, ...otherCollecionsProps }) => (
        <CollectionPreview key={id} {...otherCollecionsProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview;