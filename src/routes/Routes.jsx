import React from 'react'
import { Route } from 'react-router-dom';

//component imports
import NavRoute from './NavRoute'
import Signup from '../components/signup/Signup';
import Signin from '../components/signin/Signin';
import Profile from '../components/profile/profile';
import Categories from '../components/categories/Categories';
import CreatePost from '../components/categories/postcard/CreatePost'
import PostPage from '../components/postpage/PostPage';
import CreateComments from '../components/comment-text/CreateComments'
import Home from '../components/categories/Home'
import Account from '../components/categories/Account'
import Billing from '../components/categories/Billing'
import GamePlay from '../components/categories/GameHelp'

const Routes = () => {

    return (
        <>
            <Route exact path="/" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/profile" exact component={Profile} />
            <NavRoute path="/categories" component={Categories} />
            <NavRoute path="/postpage/:post_id" component={PostPage} />
            <Route path="/post" component={CreatePost} />
            <Route path="/comment" component={CreateComments} />
            <Route path="/home" component={Home} />
            <Route path="/account" component={Account} />
            <Route path="/billing" component={Billing} />
            <Route path="/gameplay" component={GamePlay} />
        </>
    );
}


export default Routes;