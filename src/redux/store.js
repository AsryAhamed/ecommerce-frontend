import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer'; // Assuming you have a cart reducer

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    // Add other reducers here
});

const store = createStore(rootReducer);

export default store;
