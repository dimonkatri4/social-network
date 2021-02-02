import {addPost, updateNewPost} from '../../../../redux/profile-reducer';
import CreatePost from "./CreatePost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        updateNewPost: (text) => {
            dispatch(updateNewPost(text))
        }
    }
}*/

const CreatePostContainer = connect(mapStateToProps, {addPost,updateNewPost})(CreatePost)

export default CreatePostContainer