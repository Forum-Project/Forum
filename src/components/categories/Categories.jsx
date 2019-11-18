import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Post from './postcard/PostCard'

export default function Categories() {
    const [posts, setPosts] = useState([])
    // const [chrisMadeMeWriteThis, setChrisMadeMeWriteThis] = useState()

    useEffect(() => {
        const id = 1; 
        axios.get(`http://localhost:5000/categories/${id}/posts`)
        .then(res => {
            console.log(res)
            setPosts(res.data.data)
        })
        .catch(err => console.log('err',err))
    }, [])

    console.log(posts)

    return (
        <div>
            {/* (<Post post={post}/>) */}
            {posts && posts.map(post => {return (<Post post={post}/>)})}
            {/* something for chris */}
            {/* to comments */}
        </div>
    )
}
