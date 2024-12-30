import { addTask, completeTask } from "./store/tasks/action";
import store from "./store/storeConfig";

store.subscribe(() => {
    console.log("Updated", store.getState());
});

store.dispatch(addTask({
    id: 1,
    title: "Task 1",
    description: "This is task 1",
    completed: false
}));

store.dispatch(completeTask(1));