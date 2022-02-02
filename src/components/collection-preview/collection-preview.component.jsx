import { useLocation, useNavigate } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';

const CollectionPreview = ({  title, items, routeName  }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='collection-preview'>
      <h1 className='title' onClick={() => navigate(`${location.pathname}/${routeName}`)}>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.filter((item, idx) => idx < 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}


export default CollectionPreview;