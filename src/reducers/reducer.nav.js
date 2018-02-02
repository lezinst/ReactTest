
const initialState = {
  navChoice: 'FIRST-OPTION'
}


export default function navReducer (state = initialState, action) {

  switch(action.type){
    case 'FIRST-OPTION':
      return
        {...state,
          navChoice: 'FIRST-OPTION'
        }
    case 'SECOND-OPTION':
      return
        {...state,
          navChoice: 'SECOND-OPTION'
        }
    case 'THIRD-OPTION':
      return
        {...state,
          navChoice: 'THIRD-OPTION'
        }
  }
}
