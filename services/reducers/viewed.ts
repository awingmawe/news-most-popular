import { ModelOutput, OutputAction } from './../constant';

type MostViewed = {
    viewed : ModelOutput[],
    loading:Boolean
}

const initialState = {
    viewed: [],
    loading:false
};

const viewedReducer = (state: MostViewed = initialState, action : OutputAction) => {
    switch (action.type) {
        case 'VIEWED':
            return { ...state, viewed: action.payload, loading:true};
        default:
            return state;
    }
}

export {viewedReducer};