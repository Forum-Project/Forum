import React from 'react'
import { Route } from 'react-router-dom';

//component imports
import NavRoute from './NavRoute'
import Signup from '../components/signup/Signup';
import Signin from '../components/signin/Signin';
import Profile from '../components/profile/profile';
// import Categories from '../components/categories/Billing';
import CreatePost from '../components/categories/postcard/CreatePost'
import PostPage from '../components/postpage/PostPage';
import CreateComments from '../components/comment-text/CreateComments'
import Billing from '../components/categories/Billing';
import Account from '../components/categories/Account';
import Contact from '../components/categories/Contact';


const Routes = () => {

    return (
        <>
            <Route exact path="/" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/profile" exact component={Profile} />
            <NavRoute path="/billing" component={Billing} />
            <NavRoute path="/account" component={Account} />
            <NavRoute path="/contact" component={Contact} />
            <NavRoute path="/postpage/:post_id" component={PostPage} />
            <Route path="/post" component={CreatePost} />
            <Route path="/comment" component={CreateComments} />
        </>
    );
}


export default Routes;