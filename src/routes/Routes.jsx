import React from 'react'
import { Route } from 'react-router-dom';

//component imports 
import Signup from '../components/signup/Signup';
import Signin from '../components/signin/Signin';
import Profile from '../components/profile/profile';
// import Categories from '../components/categories/Billing';
import CreatePost from '../components/categories/postcard/CreatePost'
import PostPage from '../components/postpage/PostPage';
import CreateComments from '../components/comment-text/CreateComments'
import Billing from '../components/categories/Billing';
import Home from '../components/categories/Home';
import Account from '../components/categories/Account';
import Gameplay from '../components/categories/Gameplay';
import NavRoute from './NavRoute'


const Routes = () => {

    return (
        <>
            <Route exact path="/" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/profile" exact component={Profile} />
            <NavRoute path="/billing" component={Billing} />
            <NavRoute path="/home" component={Home} />
            <NavRoute path="/account" component={Account} />
            <NavRoute path="/gameplay" component={Gameplay} />
            <NavRoute path="/postpage/:post_id" component={PostPage} />
            <Route path="/post" component={CreatePost} />
            <Route path="/comment" component={CreateComments} />
        </>
    );
}


export default Routes;