export const TITTLE = 'TITTLE';

export const OfficeReducer = (state, action) => {
    switch (action.type) {
        case TITTLE:
            return {
                ...state, tittle : action.tittle
            }
        default:
            return state
    }
}