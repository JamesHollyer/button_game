let initialState = {clicks:[]};
let kBUTTON_CLICK = 'buttonclick';
export default function root_reducer(state = initialState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    switch(action.type) {
        case kBUTTON_CLICK:
            state.clicks.push(action.value);
        default:
            return state;
    }
    return state
}
// export default root_reducer;