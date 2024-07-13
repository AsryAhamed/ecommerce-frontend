const initialState = {
    items: [
        {
            id: 1,
            name: 'iPhone X',
            price: '$999.00',
            imageUrl: 'https://images.dailyobjects.com/marche/product-images/1101/slick-phone-case-cover-for-iphone-13-pro-images/Nimbus-Phone-Case-Cover-For-iPhone-13-Pro.png?tr=cm-pad_resize,v-2,w-412,h-490,dpr-2,q-60'
        },
        {
            id: 2,
            name: 'iPhone X (Black)',
            price: '$1099.00',
            imageUrl: 'https://www.freeiconspng.com/thumbs/iphone-x-pictures/new-iphone-x-photo-18.png'
        },
        {
            id: 3,
            name: 'iPhone X (Silver)',
            price: '$1199.00',
            imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/06/Samsung-Mobile-Phone-PNG-HD.png'
        },
        // Add more products here
    ],
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        // Add cases for handling actions if needed
        default:
            return state;
    }
};

export default productsReducer;
