import { useContext } from 'react';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { ContextApp } from '../../context/app/app-context-provider';

import CollectionPage from './collection.component';

const CollectionPageContainer = () => {
  const context = useContext(ContextApp);
  const { shopContext: { isFetching } } = context;

  return (
    <CollectionPage isLoading={isFetching} />
  )
}

export default WithSpinner(CollectionPageContainer);