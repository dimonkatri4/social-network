const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { name: 'Dima', id: '1', img: 'images/users/1.jpg' },
        { name: 'Oleg', id: '2', img: 'images/users/2.jpg' },
        { name: 'Yuriy', id: '3', img: 'images/users/3.png' },
        { name: 'Petro', id: '4', img: 'images/users/4.jpg' },
        { name: 'Andriy', id: '5', img: 'images/users/5.jpg' }
    ],
    messages: [
        { id: '1', message: 'Hi!' },
        { id: '2', message: 'How are you?' },
        { id: '3', message: 'Do you like coffe?' },
        { id: '4', message: 'YO!' },
        { id: '5', message: 'Blablabla' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;