import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }
        case 'start_recording':
            return { ...state, recording: true }
        case 'stop_recording':
            return { ...state, recording: false }
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] };
        case 'change_name':
            return { ...state, name: action.payload };
        case 'reset' :
            return {...state, name:'', locations: []};
        default:
            return state;
    }
};
const changeName = (dispatch) => {
    return (name) => {
        dispatch({ type: "change_name", payload: name })
    }
}

const startRecording = (dispatch) => {
    return async () => {
        dispatch({ type: "start_recording" })
    }
};

const stopRecording = (dispatch) => {
    return async () => {
        dispatch({ type: "stop_recording" })
    }
};
const addLocation = (dispatch) => {
    return async (location, recording) => {
        dispatch({ type: 'add_current_location', payload: location });
        if (recording) {
            dispatch({ type: "add_location", payload: location })
        }
    }
};

const reset =(dispatch) => {
    return async () => {
        dispatch({type:'reset'})
    }
}

export const { Context, Provider } = createDataContext(locationReducer, { reset,changeName, startRecording, stopRecording, addLocation }, { name: "", recording: false, locations: [], currentLocation: null })