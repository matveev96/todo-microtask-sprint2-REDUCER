import {FilterValuesType} from "../App";

export const filterReducer = (initialState: FilterValuesType, action: ActionType): FilterValuesType => {
    switch (action.type) {
        case 'CHANGE-FILTER':
            return action.payload.filter
        default: return initialState;
    }
}

type ActionType = {
    type: 'CHANGE-FILTER',
    payload: {
        filter: FilterValuesType
    }
}

export const changeFilterAC = (filter: FilterValuesType) => {
    return {
        type: 'CHANGE-FILTER',
        payload: {
            filter
        }
    } as const
}