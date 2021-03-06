
const initialState = {
  navChoice: 'FIRST-OPTION'
}

export default function navReducer (state = initialState, action) {

  switch(action.type){
    case 'FIRST-OPTION':
      return {
          ...state,
          navChoice: action.payload
        }
    case 'SECOND-OPTION':
      return {
          ...state,
          navChoice: action.payload
        }
    case 'THIRD-OPTION':
      return {
          ...state,
          navChoice: action.payload
        }
  }
  return state;
}
