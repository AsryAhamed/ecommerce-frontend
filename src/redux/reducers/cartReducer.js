const initialState = {
    items: [],
    totalCount: 0, // Track total count of items
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += 1;
                return {
                    ...state,
                    items: updatedItems,
                    totalCount: state.totalCount + 1, // Increment total count
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                    totalCount: state.totalCount + 1, // Increment total count
                };
            }
        case 'REMOVE_FROM_CART':
            const itemToRemove = state.items.find(item => item.id === action.payload);
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                totalCount: state.totalCount - itemToRemove.quantity, // Decrement total count
            };
        case 'UPDATE_CART_QUANTITY':
            const updatedCartItems = state.items.map(item => 
                item.id === action.payload.productId 
                ? { ...item, quantity: action.payload.quantity }
                : item
            );
            const totalCount = updatedCartItems.reduce((total, item) => total + item.quantity, 0);
            return {
                ...state,
                items: updatedCartItems,
                totalCount: totalCount, // Update total count
            };
        default:
            return state;
    }
};

export default cartReducer;
