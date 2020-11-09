//import uuidv4 from 'uuid/v4'


export default function cartReducer(state, action) {
  switch(action.type) {

    /* case 'add':
        console.log(action.payload.name)
        console.log(action.payload)
        const prdexists = state.products.filter(t => t.id === action.payload.id)
        if (!prdexists)
        {
                const newprd = {
                    id: action.payload.id,
                    img: action.payload.img,
                    name: action.payload.name,
                    selected: 'true',
                }
                const newprdlist = [...state.products, newprd]

                return {
                    ... state,
                    products: newprdlist
                }
        }
        else{
        console.log('found already')
        
        } */
        
      /*   console.log(action.payload.product.name)
        console.log(action.payload)
        const newprd = {
            id: action.payload.product.id,
            img: action.payload.product.img,
            name: action.payload.product.name,
        } */
        

        case 'handleToggle':
            /* return {
                ...state,
                currentCart : action.payload
            } */
            const selectedChanged = state.products.map(t => t.id === action.payload.id 
                ?
                {
                    ...action.payload,
                    selected: ! action.payload.selected}
                    :
                    t
                )
        return{
            ...state,
            products: selectedChanged
        }

      case 'infoChange':
          return {
              ...state,
              personalInfo: action.payload,
                
          }  

   /*      //return [...state, action.product];
    case 'remove':
        const prods = state.products.filter(t => t.id !== action.payload.id)
        return {
            ...state,
            products: prods
        } */
      case 'prodError':
          return {
              ...state,
              prodError: action.payload,
                
          }  
       
    default:
      return state;
  }
}