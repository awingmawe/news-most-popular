import { ModelOutput, OutputAction } from '../constant';

type MostShared = {
    shared : ModelOutput[],
    loading:Boolean
}

const initialState = {
    shared: [],
    loading:false
};

const sharedReducer = (state: MostShared = initialState, action : OutputAction) => {
    switch (action.type) {
        case 'SHARED':
            return { ...state, shared: action.payload, loading:true};
        default:
            return state;
    }
}

export { sharedReducer };