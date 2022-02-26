import { useContext } from 'react';
import { ContextApp } from '../../context/app/app-context-provider';

import WithSpinner from '../with-spinner/with-spinner';
import CollectionsOverview from './collections-overview.component';

const CollectionOverviewContainer = () => {
  const context = useContext(ContextApp);
  const { shopContext: { isFetching } } = context;

  return (
    <CollectionsOverview isLoading={isFetching} />
  )
}

export default WithSpinner(CollectionOverviewContainer);