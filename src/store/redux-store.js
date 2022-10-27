import { createStore } from 'redux'
const store = createStore(click, ['Use Redux'])

function TrackClick(text) {
  return {
    type: 'Add_Click',
    text
  }
}

store.dispatch(TrackClick('Message 1'))