import React, {useState} from 'react';
import LeftPanel from './LeftPanel/LeftPanel';
import s from './main.module.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";
import RightPanel from "./RightPanel/RightPanel";
import ModalWindow from "./ModalWindow/ModalWindow";
import Page404 from "../common/Page404/Page404";
//import DialogsContainer from "./Dialogs/DialogsContainer";
//import ProfileContainer from "./Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));

const Main = (props) => {

    const [active,setActive] = useState(false);

    const profilePhoto = props.profile && props.profile.photos;

    console.log("Main");

    return (
        <div className={s.main_page}>
            {props.isAuth && <LeftPanel/>}
                <Redirect exact from='/' to='/profile'/>
                <Route path='/profile/:userId?' render={() =>
                    <React.Suspense fallback={<div>Loading..</div>}>
                        <ProfileContainer getMainPhotoRef={props.getMainPhotoRef} setActive={setActive} />
                    </React.Suspense>}/>
            <div className={s.content}>
                <Switch>
                    <Redirect exact from='/' to='/profile'/>
                    <Route path='/dialog' render={() =>
                        <React.Suspense fallback={<div>Loading..</div>}>
                            <DialogsContainer/>
                        </React.Suspense>
                    }/>
                    <Route path='/profile'/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={()=><UsersContainer scrollToMainPhoto={props.scrollToMainPhoto} />}/>
                    <Route path='/login' component={Login}/>
                    <Route exact path='*' render={() => <Page404/>}/>
                </Switch>
                <ModalWindow active={active} setActive={setActive}>
                    {profilePhoto && <img src={profilePhoto.large}/>}
                </ModalWindow>
            </div>

            {props.isAuth && <RightPanel getProfileDataRef={props.getProfileDataRef}/>}
        </div>
    )
}

export default Main

