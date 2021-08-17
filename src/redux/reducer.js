const initState = {
    name: '',
    gender: '',
    answer: [],
    count: 0
}

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.name
            }
        case "SET_GENDER":
            return {
                ...state,
                gender: action.gender
            }
        case "ADD_ANSWER":
            const newArr = [...state.answer, action.answer];
            return {
                ...state,
                answer: newArr 
            }
        case "CHECK_PROGRESS":
            return {
                ...state,
                count: state.count + action.count
            }
        default:
            return state;
    }
}

export default Reducer;