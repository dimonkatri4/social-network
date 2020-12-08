const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 10, userName: 'cat griffith', commentsCount: 5, viewsCount: 9, shareCount: 1, date: 'June,2 2018 19:20' },
        { id: 2, message: 'It\'s my first post', likeCount: 5, userName: 'cat griffith', commentsCount: 3, viewsCount: 7, shareCount: 2, date: 'June,2 2018 19:20' },
        { id: 3, message: 'Helo!', likeCount: 7, userName: 'cat griffith', commentsCount: 1, viewsCount: 21, shareCount: 0, date: 'June,2 2018 19:20' },
        { id: 4, message: 'Hi, how are you?', likeCount: 14, userName: 'cat griffith', commentsCount: 15, viewsCount: 20, shareCount: 3, date: 'June,2 2018 19:20' },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
                userName: 'cat griffith',
                commentsCount: 0,
                viewsCount: 0,
                shareCount: 0,
                date: 'November, 20 2020 16:43'
            };
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default  profileReducer;