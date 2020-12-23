import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer';
import CreatePost from "./CreatePost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPost: (text) => {dispatch(updateNewPostTextActionCreator(text))}
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default CreatePostContainer