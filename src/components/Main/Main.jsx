import React from 'react';
import LeftPanel from './LeftPanel/LeftPanel';
import Sidebar from './RightPanel/Sidebar/Sidebar';
import s from './main.module.css';
import {Route} from 'react-router-dom';
//import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import UsersContainer from "./Users/UsersContainer";
//import ProfileContainer from "./Profile/ProfileContainer";
import Login from "./Login/Login";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import RightPanel from "./RightPanel/RightPanel";
const Dialogs = React.lazy(() => import('./Dialogs/Dialogs'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));

const Main = (props) => {

    return (
        <div className={s.main_page}>
            <LeftPanel />
            <Route path='/profile/:userId?' render={() =>
                <React.Suspense fallback={<div>Loading..</div>}>
                    <ProfileContainer/>
                </React.Suspense>
            }
            />
            <div className={s.content}>
                <Route path='/dialog' render={() =>
                    <React.Suspense fallback={<div>Loading..</div>}>
                        <Dialogs dialogsPage={props.dialogsPage} isAuth={props.isAuth}/>
                    </React.Suspense>
                }/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/users' component={UsersContainer}/>
                <Route path='/login' component={Login}/>
            </div>
            <RightPanel sidebarPage={props.sidebarPage} isAuth={props.isAuth}/>
        </div>
    )
}

export default Main

