import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode:false
        })
    }

    render() {
        return <div>
            {!this.state.editMode &&
                <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>

            }
            {this.state.editMode &&
                <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
            }

        </div>
    }

}
export default ProfileStatus