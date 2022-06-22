import { usersReducer } from "./reducers"

test('usersReducers receives initialState',( ) => {
  const nextState = usersReducer(undefined, { type: 'UNKNOWN' })
  expect(nextState).toEqual({ loading: false, items: [] });
})

test('usersReducers works with USER_FETCH action',( ) => {
  const previousState = {
    items: [{id: 1, name: 'Toto'}],
    loading: false,
  }
  const nextState = usersReducer(previousState, { type: 'USER_FETCH' })
  expect(nextState).toEqual({ loading: true, items: [] });
})
