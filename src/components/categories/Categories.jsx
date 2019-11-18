import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from '../filter/Filter';
import { withRouter } from 'react-router-dom'; 

import Post from './postcard/PostCard'

function Categories(props) {
    const [posts, setPosts] = useState([])
    // const [chrisMadeMeWriteThis, setChrisMadeMeWriteThis] = useState()
    const [tags, setTags] = useState([]);

    let domain = process.env.DOMAIN || 'localhost:5000';
    let categoryID = props.categoryID || 1; // probably should get a better default
    let [query, setQuery] = useState(props.location.search || ''); // this wont work, its an array. Just testing rn
    let base = `http://${domain}/categories/${categoryID}/posts/`;
    let request = `${base + query}`; // add two strings with room to modify end result, query will be added later
    console.log(props.location);


    useEffect(() => {
        receiveQuery();
        axios.get(request) // add the query when necessary
        .then(res => {
            console.log(res)
            setPosts(res.data.data)
        })
        .catch(err => console.log('err',err))
    }, [])

    console.log(props) ;
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
        if(!query) return false;
        if(query.indexOf('?') === 0) query = query.replace('?', '');
        let params = query.split('&');
        let attributes = {};
        for(let property of params) {
            let pair = property.split('=');
            if(pair.length < 2) continue;
            let paramVals = pair[1].split('+');
            if(Array.isArray(paramVals) && paramVals.length) {
                paramVals = paramVals.map(val => decodeURIComponent(val));
            }
            attributes[pair[0]] = paramVals; // these should be our key value pairs, with the value holding an array of 'state', or values
        }
        return attributes;
    };

    const receiveQuery = () => {
        let decoded = decodeRequest(query);
        if(decoded.tags) setTags(decoded.tags);
    }

    console.log(posts)

    return (
      <>
        <div>
            {/* (<Post post={post}/>) */}
            {posts && posts.map(post => {return (<Post post={post}/>)})}
            {/* something for chris */}
            {/* to comments */}
        </div>
        <Filter {...props} tags={tags} setTags={setTags} handleSubmit={submitQuery} />
      </>
    )
}

export default withRouter(Categories); 
