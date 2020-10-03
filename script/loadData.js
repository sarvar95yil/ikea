import { getData } from './getData.js';

const wishList = ['idd009', 'idd033', 'idd044', 'idd025', 'idd011'];


    const cartList = [
        {
            id: 'idd009',
            count: 2
        },
        {
            id: 'idd022',
            count: 3
        },
        {
            id: 'idd011',
            count: 2
        },

    ];



export const loadData = () => {

    if (location.search) {

        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substr(1);
        const value = search.split('=')[1];

        if (prop === 's') {
            getData.search(value, (data) => console.log(data));
        }
        else if (prop === 'wishlist') {
            getData.wishList(wishList, (data) => console.log(data));
        } else if (prop === 'cat' || prop === 'subcat'){
            getData.category(prop, value, (data) => console.log(data))
        }

    };

    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data));
    };

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

};

