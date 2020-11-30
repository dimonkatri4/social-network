

let store = {
    _subscriber() {
        console.log('no subscribers (observer)')
    },

    _state: {
        profilePage: {posts:[
            { id: 1, message: 'Hi, how are you?', likeCount: 10, userName: 'cat griffith', commentsCount: 5, viewsCount: 9, shareCount: 1, date:'June,2 2018 19:20' },
            { id: 2, message: 'It\'s my first post', likeCount: 5, userName: 'cat griffith', commentsCount: 3, viewsCount: 7, shareCount: 2, date:'June,2 2018 19:20' },
            { id: 3, message: 'Helo!', likeCount: 7, userName: 'cat griffith', commentsCount: 1, viewsCount: 21, shareCount: 0, date:'June,2 2018 19:20' },
            { id: 4, message: 'Hi, how are you?', likeCount: 14, userName: 'cat griffith', commentsCount: 15, viewsCount: 20, shareCount: 3, date:'June,2 2018 19:20' },
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
            { id: '1', message: 'Hi!'},
            { id: '2', message: 'How are you?' },
            { id: '3', message: 'Do you like coffe?' },
            { id: '4', message: 'YO!' },
            { id: '5', message: 'Blablabla' }
        ],
        newMessageText: ''
    },
    sidebarPage: {
        friends: [
            {id:'1', name: 'Sami', surname:'Kizibash', img:'images/users/1.jpg'},
            {id:'2', name: 'Aleck', surname:'Wu', img:'images/users/2.jpg'},
            {id:'3', name: 'Sarah', surname:'Loren', img:'images/users/3.png'},
            {id:'4', name: 'Cameron', surname:'Diaz', img:'images/users/4.jpg'},
            {id:'5', name: 'Daniel', surname:'Warber', img:'images/users/5.jpg'}
        ]
    }
    },
    subscribe(observer)  {
        this._subscriber = observer
    },

    getState() {
        return this._state;
    },

    // addPost()  {
    //     let newPost = {
    //         id:5,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0,
    //         userName: 'cat griffith',
    //         commentsCount: 0,
    //         viewsCount: 0,
    //         shareCount: 0,
    //         date: 'November, 20 2020 16:43'
    //     };
    //     this._state.profilePage.posts.unshift(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._subscriber(this._state)
    // },

    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._subscriber(this._state)
    // },

    //  addMessage() {
    //     let newMessage = {
    //         id: 6,
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._subscriber(this._state)
    // },

    // updateNewMessageText(newText) {
    //     this._state.dialogsPage.newMessageText = newText;
    //     this._subscriber(this._state)
    // },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
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
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._subscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._subscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._subscriber(this._state)
        }
    }

    
}

     export default store