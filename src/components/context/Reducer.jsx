export const initialState = {
    total:0,
    products:[],
}
const storeReducer = (state,action) => {
    switch (action.type) {
       case "add":
            return{
                ...state,
                products:action.payload
            };
        case "remove":
            return {
                ...state,
                products:action.payload
            };
        case "update price":
            return {
                ...state,
                total:action.payload
            };

        case "set_Decrement":
        case "set_Increment":
            return {
                ...state,
                products: action.payload,
            };

        case "increment":
        case "decrement":
            return {
                ...state,
                products: action.payload,
                total: action.total,
            };
        case "clearCart":
            return initialState;
        
        default:
            throw Error("Cannot match case in reducer")
    }
}
export default storeReducer;