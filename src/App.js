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

    catchAllUnhandledErrors = (reason,promise) => {
        alert(reason.reason)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)
    }

    scrollToProfileEdit = () => {
        let scroll = () => this.props.profileDataRef.current.scrollIntoView({ behavior: "smooth" });
        this.props.profileDataRef.current ? scroll() : setTimeout(scroll, 500);
    }

    scrollToMainPhoto = () => {
        let scroll = () => this.props.mainPhotoRef.current.scrollIntoView({ behavior: "smooth" });
        this.props.mainPhotoRef.current ? scroll() : setTimeout(scroll, 500)
        }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer scrollToProfileEdit={this.scrollToProfileEdit}
                                 scrollToMainPhoto={this.scrollToMainPhoto}/>
                <MainContainer scrollToMainPhoto={this.scrollToMainPhoto}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    profileDataRef:state.app.profileDataRef,
    mainPhotoRef:state.app.mainPhotoRef
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

