import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup, findEmail } from './actions/session_actions'
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    let store
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.findEmail = findEmail


    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});