import * as actions from './index';

describe('Test Suite for Actions', () => {
    it('should create an action to add todo', () => {
        const text = 'Go Shopping';
        const expectedAction = {
            type: 'ADD_TODO',
            id: 0,
            text
        };

        expect(actions.addTodo(text)).toEqual(expectedAction);
    });

    it('should create an action to create visibility filter', () => {
        const filter = 'SHOW_ALL';

        expect(actions.setVisibilityFilter(filter).filter).toEqual('SHOW_ALL');
    });

    it('should create an action to toggle a Todo', () => {
        const expectedAction = {
            type: 'TOGGLE_TODO',
            id: 0
        };

        expect(actions.toggleTodo(0)).toEqual(expectedAction);
    });
});