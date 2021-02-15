const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
}


const CartReducer = (state = initialState, action) => {
    let findPro;
    let fIndex;
    switch(action.type){
        case 'ADD_TO_CART':
        const {product, quantities} = action.payload;
        
        const check = state.products.find(pr => pr.id === product.id);
        if(check){
            return state;
        }else{
            const tPrice = state.totalPrice + product.discountPrice * quantities;
            console.log(tPrice);
            const tQuantity = state.totalQuantities + quantities;
            product.quantity = quantities;
            return{
                ...state,
                products: [...state.products, product],
                totalPrice: tPrice,
                totalQuantities: tQuantity,
            }
        }
        case 'INC':
            findPro = state.products.find((product => product.id === action.payload));
            fIndex = state.products.findIndex((product)=> product.id === action.payload);
            findPro.quantity += 1;
            state.products[fIndex] = findPro;
            return{
                ...state,
                totalPrice: state.totalPrice + findPro.discountPrice,
                totalQuantities: state.totalQuantities +1,
            }
            case 'DEC':
                findPro = state.products.find((product => product.id === action.payload));
                fIndex = state.products.findIndex((product)=> product.id === action.payload);
                if(findPro.quantity > 1){
                    findPro.quantity -= 1;
                    state.products[fIndex] = findPro;
                    return{
                        ...state,
                        totalprice: state.totalPrice - findPro.discountPrice,
                        totalQuantities: state.totalQuantities - 1
                    }
                }else{
                    return state;
                }
                case 'REMOVE':
                    findPro = state.products.find((product => product.id === action.payload));
                    const filtered = state.products.filter(product => product.id !== action.payload);
                    return {
                        ...state,
                        products: filtered,
                        totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity,
                        totalQuantities: state.totalQuantities - findPro.quantity,
                    }
        default:
            return state;
    }
}


export {CartReducer};