import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { shopTypes } from "./shop.types";

export const fetchCollectionStart = () => ({
  type: shopTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionSuccess = (collectionMap) => ({
  type: shopTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap
})

export const fetchCollectionFailure = (errorMessage) => ({
  type: shopTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
})

export const fetchCollection = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());

    collectionRef.get().then(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionMap));
    }).catch(error => dispatch(fetchCollectionFailure(error.message)))
  }
}

// const collectionRef = firestore.collection('collections');

// Promise Style by library
// collectionRef.get().then(async snapshot => {
//   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
//   updateCollection(collectionMap);
//   this.setState({ loading: false });
// })

//Snapshot Style
// collectionRef.onSnapshot(async snapshot => {
//   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
//   updateCollection(collectionMap);
//   this.setState({ loading: false });
// })

//Legacy Promise Style
// fetch('https://firestore.googleapis.com/v1/projects/crown-db-9bb79/databases/(default)/documents/collections')
// .then(res => res.json())
// .then(collections => {
//   const collectionMap = convertCollectionsSnapshotToMap(collections);
//   updateCollection(collectionMap);
//   this.setState({ loading: false });
// })