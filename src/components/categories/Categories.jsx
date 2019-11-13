import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Post from '../posts/Post'

export default function Categories() {
    const [categories, setCategories] = useState([])
    // const [chrisMadeMe, setChrisMadeMe] = useState()

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
        .then(res => {
            console.log(res)
            setCategories(res.data.data)
        })
        .catch(err => console.log('err',err))
    }, [])

    console.log(categories)

    return (
        <div>
            {/* (<Post post={post}/>) */}
            {categories && categories.map(post => {return (<Post post={post}/>)})}
            {/* something for chris */}
            {/* to comments */}
        </div>
    )
}
