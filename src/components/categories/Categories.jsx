import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from '../filter/Filter';
import { withRouter } from 'react-router-dom';
import PostCard from './postcard/PostCard'

// stylesheet imports 
import './Categories.scss'

function Categories(props) {
    const [posts, setPosts] = useState([])
    // const [chrisMadeMeWriteThis, setChrisMadeMeWriteThis] = useState()
    const [tags, setTags] = useState([]);

    let domain = process.env.DOMAIN || 'localhost:5000';
    let categoryID = props.categoryID || '5dcde8a74379d61f5813bdc4'; // probably should get a better default
    let [query, setQuery] = useState(props.location.search || ''); // this wont work, its an array. Just testing rn
    let base = `http://${domain}/categories/${categoryID}/posts/`;
    let request = `${base + query}`; // add two strings with room to modify end result, query will be added later
    console.log(props.location);


    useEffect(() => {
        localStorage.setItem('catID', props.categoryID)
        receiveQuery();
        axios.get(request) // add the query when necessary
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => console.log('err', err))
    }, [])

    console.log(props);
    useEffect(() => {
        props.history.push(`/${props.componentName}/${categoryID}/${query}`);
    }, [query]);

    const submitQuery = () => {
        // build query onto request
        buildTags();
    };

    console.log(props);
    const buildTags = () => {
        let base = `?tags=`;
        let reduced = tags.reduce((acc, tag) => {
            tag = encodeURIComponent(tag);
            return acc + '+' + tag;
        });
        console.log(reduced);
        setQuery(base + reduced);
        console.log(base);
        // request built, send it back through hook to controller
    };

    const decodeRequest = (query = props.location.search) => {
        if (!query) return false;
        if (query.indexOf('?') === 0) query = query.replace('?', '');
        let params = query.split('&');
        let attributes = {};
        for (let property of params) {
            let pair = property.split('=');
            if (pair.length < 2) continue;
            let paramVals = pair[1].split('+');
            if (Array.isArray(paramVals) && paramVals.length) {
                paramVals = paramVals.map(val => decodeURIComponent(val));
            }
            attributes[pair[0]] = paramVals; // these should be our key value pairs, with the value holding an array of 'state', or values
        }
        return attributes;
    };

    const receiveQuery = () => {
        let decoded = decodeRequest(query);
        if (decoded.tags) setTags(decoded.tags);
    }

    const createPost = () => {
        props.history.push('/post')
    }

    console.log(posts)

    return (
        <div className="cat-wrapper">
            <div className="post-wrapper">
                <button onClick={createPost}>Click here to create a post</button>
                {/* (<Post post={post}/>) */}
                {console.log('This should be catID', props.categoryID)}
                {posts && posts.map((post, index) => {
                    return (
                        <PostCard key={Date.now() + index} post={post} />
                    )
                })}
                {/* something for chris */}
                {/* to comments */}
            </div>
            <Filter {...props} tags={tags} setTags={setTags} handleSubmit={submitQuery} className="filter" />
        </div>
    )
}

export default withRouter(Categories); 
