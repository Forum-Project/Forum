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

const Routes = () => {

    return (
        <>
            <Route exact path="/" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/profile" exact component={Profile} />
            <NavRoute path="/categories" component={Categories} />
            <NavRoute path="/postpage" component={PostPage} />
            <Route path="/post" component={CreatePost} />
            <Route path="/comment" component={CreateComments} />
        </>
    );
}


export default Routes;