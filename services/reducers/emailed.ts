import { ModelOutput, OutputAction } from '../constant';

type MostEmailed= {
    emailed : ModelOutput[],
    loading:Boolean
}

const initialState = {
    emailed: [],
    loading:false
};

const emailedReducer = (state: MostEmailed = initialState, action : OutputAction) => {
    switch (action.type) {
        case 'EMAIL':
            return { ...state, emailed: action.payload, loading:true};
        default:
            return state;
    }
}

export { emailedReducer };