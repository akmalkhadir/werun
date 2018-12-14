import { combineReducers } from 'redux'

const runsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RUNS':
      return [...action.payload]
    case 'DELETE_RUN':
      return state.filter(run => run.id !== action.id)
    default:
      return state
  }
}

const activeRunIdReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_ACTIVE_RUN':
      return action.id
    default:
      return state
  }
}

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return action.newFilter
    default:
      return state
  }
}

const rootReducer = combineReducers({
  runs: runsReducer,
  activeRunId: activeRunIdReducer,
  filter: filterReducer
})

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer
