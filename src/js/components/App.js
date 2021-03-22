import React from 'react';
import Form from './Form';
import List from './List'
import Post from './Post'

const App=()=>{
    return(
        <div>
            <h1>Article List</h1>
            <List/>
            <Form/>
            <br/>
            <Post/>
        </div>
    )
}
export default App