let initialState = {
    friends: [
        { id: '1', name: 'Sami', surname: 'Kizibash', img: 'images/users/1.jpg' },
        { id: '2', name: 'Aleck', surname: 'Wu', img: 'images/users/2.jpg' },
        { id: '3', name: 'Sarah', surname: 'Loren', img: 'images/users/3.png' },
        { id: '4', name: 'Cameron', surname: 'Diaz', img: 'images/users/4.jpg' },
        { id: '5', name: 'Daniel', surname: 'Warber', img: 'images/users/5.jpg' }
    ]
}

const sidebarReducer = (state = initialState, action) => {


    return state
}

export default sidebarReducer;