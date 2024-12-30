import * as actionTypes from "./actionTypes";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          completed: action.payload.completed,
        },
      ];
    case actionTypes.REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case actionTypes.COMPLETE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: !task.completed };
        }
      });
    default:
      return state;
  }
}
