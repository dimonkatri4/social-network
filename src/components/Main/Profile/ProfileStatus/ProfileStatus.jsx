import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        let status = e.target.value;
        this.setState({
            status:status
        })
    }

    componentDidUpdate(prevProps,prevState) {

        if(this.props.status !== prevProps.status) {                    // умова щоб уникнути зациклення
            this.setState({
                status: this.props.status
            })
        }
    }

        render() {
        return <div>
            {!this.state.editMode &&
                <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'} </span>
            }
            {this.state.editMode &&
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
            }

        </div>
    }

}
export default ProfileStatus