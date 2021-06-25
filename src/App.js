import React from 'react';
import './App.css';
import './common/style/reset.css'
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {initializeApp} from "./redux/app-reducer";
import {connect, Provider} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {HashRouter, withRouter} from "react-router-dom";
import store from "./redux/redux-store";

class App extends React.Component {
    state = {
        profileDataRef: "",
        mainPhotoRef: ""
    }

    componentDidMount() {
        this.props.initializeApp();
    }

    getProfileDataRef = (ref) => {
        this.setState({profileDataRef:ref})
    }
    getMainPhotoRef = (ref) => {
        this.setState({mainPhotoRef:ref})
    }

    scrollToProfileEdit = () => {
        let scroll = () => this.state.profileDataRef.current.scrollIntoView({ behavior: "smooth" });
        if(this.state.profileDataRef.current){
            scroll();
        } else {
            setTimeout(scroll, 500)
        }
    }

    scrollToMainPhoto = () => {
        let scroll = () => this.state.mainPhotoRef.current.scrollIntoView({ behavior: "smooth" });
        if(this.state.mainPhotoRef.current){
            scroll();
        } else {
            setTimeout(scroll, 500)
        }
    }

/*    scrollToComponent = (componentRef) => {
        let scroll = () => componentRef.current.scrollIntoView({ behavior: "smooth" });
        if(componentRef.current){
            scroll();
        } else {
            setTimeout(scroll, 500)
        }
    }*/


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer profileDataRef={this.state.profileDataRef}
                                 scrollToProfileEdit={this.scrollToProfileEdit}
                                 scrollToMainPhoto={this.scrollToMainPhoto}/>
                <MainContainer getProfileDataRef={this.getProfileDataRef}
                               getMainPhotoRef={this.getMainPhotoRef}
                               scrollToMainPhoto={this.scrollToMainPhoto}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const AppSocialNetwork = () => {
    return <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
}

export default AppSocialNetwork

