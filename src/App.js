import React from 'react';
import './App.css';
import './common/style/reset.css'
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <MainContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App)

