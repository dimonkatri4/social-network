import user1Photo from '../images/users/1.jpg'
import user2Photo from '../images/users/2.jpg'
import user3Photo from '../images/users/3.png'
import user4Photo from '../images/users/4.jpg'
import user5Photo from '../images/users/5.jpg'


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {name: 'Dima', id: '1', img: user1Photo},
        {name: 'Oleg', id: '2', img: user2Photo},
        {name: 'Yuriy', id: '3', img: user3Photo},
        {name: 'Petro', id: '4', img: user4Photo},
        {name: 'Andriy', id: '5', img: user5Photo}
    ],
    messages: [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Do you like coffe?'},
        {id: '4', message: 'YO!'},
        {id: '5', message: 'Blablabla'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;