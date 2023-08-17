import { ShopFirestore } from './config';

const deleteItemFromCollection = async (collectionName, itemId) => {
  try {
    await ShopFirestore.collection(collectionName).doc(itemId).delete();
    console.log(`Item with ID ${itemId} deleted from ${collectionName}`);
  } catch (error) {
    console.error(`Error deleting item with ID ${itemId} from ${collectionName}:`, error);
  }
};

export default deleteItemFromCollection;
