import { createStore } from "redux";
import rootReducer from "../../reducers";
import { addTodo, toggleTodo } from '../../actions';

describe('Redux store integration tests', () => {
    let store;
    beforeEach(() => {
        store = createStore(rootReducer);
    });

    it('should add 1 Todo', () => {
        store.dispatch(addTodo('Buy Milk'));
        //console.log(store.getState());
        const todo = store.getState().todos.find(x => x.text === 'Buy Milk');

        expect(todo.text).toEqual('Buy Milk');
        expect(todo.completed).toEqual(false);
    });
    it('should toggle 1 Todo', () => {
        store.dispatch(addTodo('Go Shopping'));
        store.dispatch(toggleTodo(1));

        const todo = store.getState().todos.find(x => x.text === 'Go Shopping');

        expect(todo.text).toEqual('Go Shopping');
        expect(todo.completed).toEqual(true);
    });
});