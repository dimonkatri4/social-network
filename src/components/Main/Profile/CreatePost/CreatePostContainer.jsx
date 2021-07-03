import {addPost} from '../../../../redux/profile-reducer';
import CreatePost from "./CreatePost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profileOwner: state.profilePage.profileOwner
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

const CreatePostContainer = connect(mapStateToProps, {addPost})(CreatePost)

export default CreatePostContainer