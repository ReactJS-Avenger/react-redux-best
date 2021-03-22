import React from 'react';
import { connect } from "react-redux";

const mapStateToProps=state=>{
    return {article: state.articles}
}

const ConnectedList=({article})=>{

    return(
        <div>
            <ul>
                {article.map((el)=>{
                   return <li key={el.id}>{el.title}</li>
                })}
            </ul>
        </div>
    )
}

const List= connect(mapStateToProps)(ConnectedList)
export default List