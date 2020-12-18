const initialState=false

export const themeReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'toggle_theme':
            return action.payload
        default:
            return state
    }   
}