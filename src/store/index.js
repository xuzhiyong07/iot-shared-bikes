import { createStore } from 'redux'

// demo reducer
function demoDeducer(count = 0, action) {
    switch (action) {
        case 'ADD':
            return count + 1
        default:
            return count
    }
}

export default createStore(demoDeducer)
