import React, { useState, useEffect } from 'react'

export default function Categories() {
    const [category, setCategory] = useState()

    useEffect(() => {
        axios.get('#')
        .then(res => {
            console.log(res)
            // setCategory(res.data)
        })
    }, [])

    return (
        <div>
            {categories && catergories.map(post => {return (<Post post={post}/>)})}
        </div>
    )
}
