import './index.css';
import { increment, decrement, asyncIncrement, changeTheme } from './Redux/actions';
// import { createStore } from './Redux/createStore';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Redux/rootReducer';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const deleteBtn = document.getElementById('delete');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('changeTheme');

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    let state = store.getState();

    counter.textContent = state.counter;

    document.body.className = state.theme.value;

    [addBtn, deleteBtn, asyncBtn, themeBtn].forEach((btn) => {
        btn.disabled = state.theme.disabled;
    })
});
store.dispatch({ type: 'INIT_APPLICATION' });

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
})

deleteBtn.addEventListener('click', () => {
    store.dispatch(decrement());
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
})

themeBtn.addEventListener('click', () => {
    let newTheme = document.body.classList.contains('light')
        ? 'dark'
        : 'light';
        
    store.dispatch(changeTheme(newTheme))
})