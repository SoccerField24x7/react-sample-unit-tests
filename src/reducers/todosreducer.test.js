import todos from './todos';

describe('Todos Reducer Unit Tests', () => {
    it('should return empty array when initial state and action is undefined', () => {
        expect(todos(undefined, {})).toEqual([]);
    });

    it('should update initial state by adding 1 Todo item to the list', () => {
        const addTodoAction = {
            type: 'ADD_TODO',
            id: 1,
            text: 'Buy Milk'
        }
        expect(todos([], addTodoAction)).toEqual([{
            completed: false,
            id: 1,
            text: 'Buy Milk'
        }]);

    });

    it('should update initial state by adding a second Todo item', () => {
        const initialState = [{
            id: 1,
            completed: false,
            text: 'Buy Milk'
        }];

        const addTodoAction = {
            type: 'ADD_TODO',
            id: 2,
            text: 'Go Shopping'
        }
        expect(todos(initialState, addTodoAction)).toEqual([
            {
                completed: false,
                id: 1,
                text: 'Buy Milk'
            },
            {
                completed: false,
                id: 2,
                text: 'Go Shopping'
            }
        ]);
    });

    it('should toggle incomplete Todo to complete', () => {
        const initialState = [{
            id: 1,
            completed: false,
            text: 'Buy Milk'
        }];

        const toggleTodoAction = {
            type: 'TOGGLE_TODO',
            id: 1
        }

        expect(todos(initialState, toggleTodoAction)).toEqual([
            {
                completed: true,
                id: 1,
                text: 'Buy Milk'
            }
        ]);
    });
});