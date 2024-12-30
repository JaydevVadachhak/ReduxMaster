import * as actionTypes from "./actionTypes";

const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: {
      // id: Date.now(),
      ...task,
    },
  };
};

const removeTask = (taskId) => {
  return {
    type: actionTypes.REMOVE_TASK,
    payload: {
      id: taskId,
    },
  };
};

const completeTask = (taskId) => {
  return {
    type: actionTypes.COMPLETE_TASK,
    payload: {
      id: taskId,
    }
  };
};

export { addTask, removeTask, completeTask };
