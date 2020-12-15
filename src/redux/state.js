import profileReducer from "./profile-reducer";
import dialogsReducer from "./dilogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _subscriber() {
        console.log('no subscribers (observer)')
    },

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likeCount: 10, userName: 'cat griffith', commentsCount: 5, viewsCount: 9, shareCount: 1, date: 'June,2 2018 19:20' },
                { id: 2, message: 'It\'s my first post', likeCount: 5, userName: 'cat griffith', commentsCount: 3, viewsCount: 7, shareCount: 2, date: 'June,2 2018 19:20' },
                { id: 3, message: 'Helo!', likeCount: 7, userName: 'cat griffith', commentsCount: 1, viewsCount: 21, shareCount: 0, date: 'June,2 2018 19:20' },
                { id: 4, message: 'Hi, how are you?', likeCount: 14, userName: 'cat griffith', commentsCount: 15, viewsCount: 20, shareCount: 3, date: 'June,2 2018 19:20' },
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebarPage: {
            friends: [
                { id: '1', name: 'Sami', surname: 'Kizibash', img: 'images/users/1.jpg' },
                { id: '2', name: 'Aleck', surname: 'Wu', img: 'images/users/2.jpg' },
                { id: '3', name: 'Sarah', surname: 'Loren', img: 'images/users/3.png' },
                { id: '4', name: 'Cameron', surname: 'Diaz', img: 'images/users/4.jpg' },
                { id: '5', name: 'Daniel', surname: 'Warber', img: 'images/users/5.jpg' }
            ]
        }
    },
    subscribe(observer) {
        this._subscriber = observer
    },

    getState() {
        return this._state;
    },

<<<<<<< HEAD
    addPost()  {
        let newPost = {
            id:5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
            userName: 'cat griffith',
            commentsCount: 0,
            viewsCount: 0,
            shareCount: 0,
            date: 'November, 20 2020 16:43'
        };
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._subscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._subscriber(this._state);
    },

     addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._subscriber(this._state);
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._subscriber(this._state);
    },

    subscribe(observer)  {
        this._subscriber = observer
    }
}

     export default store
=======
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._subscriber(this._state)
    }
}


export default store
>>>>>>> df5aac8bb61eb77d3a1b32279eec3431097eea5e
