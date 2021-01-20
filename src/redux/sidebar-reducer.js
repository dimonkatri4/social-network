import user1Photo from '../images/users/1.jpg'
import user2Photo from '../images/users/2.jpg'
import user3Photo from '../images/users/3.png'
import user4Photo from '../images/users/4.jpg'
import user5Photo from '../images/users/5.jpg'

let initialState = {
    friends: [
        { id: '1', name: 'Sami', surname: 'Kizibash', img: user1Photo },
        { id: '2', name: 'Aleck', surname: 'Wu', img: user2Photo },
        { id: '3', name: 'Sarah', surname: 'Loren', img: user3Photo },
        { id: '4', name: 'Cameron', surname: 'Diaz', img: user4Photo },
        { id: '5', name: 'Daniel', surname: 'Warber', img: user5Photo }
    ]
}

const sidebarReducer = (state = initialState, action) => {


    return state
}

export default sidebarReducer;