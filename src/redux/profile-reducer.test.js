import profileReducer, {addPost, deletePost} from "./profile-reducer";

// 1. test data
let state = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likeCount: 10,
            userName: 'cat griffith',
            commentsCount: 5,
            viewsCount: 9,
            shareCount: 1,
            date: 'June,2 2018 19:20'
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likeCount: 5,
            userName: 'cat griffith',
            commentsCount: 3,
            viewsCount: 7,
            shareCount: 2,
            date: 'June,2 2018 19:20'
        },
        {
            id: 3,
            message: 'Helo!',
            likeCount: 7,
            userName: 'cat griffith',
            commentsCount: 1,
            viewsCount: 21,
            shareCount: 0,
            date: 'June,2 2018 19:20'
        },
        {
            id: 4,
            message: 'Hi, how are you?',
            likeCount: 14,
            userName: 'cat griffith',
            commentsCount: 15,
            viewsCount: 20,
            shareCount: 3,
            date: 'June,2 2018 19:20'
        },
    ]
}

test('length of post should be increment', () => {
    // 1. test data
    let action = addPost("Hello world!");
    // 2. action
    let newState = profileReducer(state,action);
    //3. expectation
    expect(newState.posts.length).toBe(5)
});

test('added message should be correct', () => {
    let action = addPost("Hello world!");
    let newState = profileReducer(state,action);
    expect(newState.posts[0].message).toBe("Hello world!")
});

test('after deleting length should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(3)
});

test(`after deleting length should't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(4)
});