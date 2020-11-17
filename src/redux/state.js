import { rerenderEntireTree } from "../render";

    let state = {
        profilePage: {posts:[
                { id: 1, message: 'Hi, how are you?', likeCount: 10 },
                { id: 2, message: 'It\'s my first post', likeCount: 5 },
                { id: 3, message: 'Helo!', likeCount: 7 },
                { id: 4, message: 'Hi, how are you?', likeCount: 14 },
            ]
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
            ] 
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
        
    }


    export let addPost = (postMessage) => {
        let newPost = {
            id:5,
            message: postMessage,
            likeCount: 0
        };
        state.profilePage.posts.push(newPost);
        rerenderEntireTree(state);
    }

    

    export default state