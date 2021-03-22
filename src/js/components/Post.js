import React from 'react';
import { connect } from "react-redux";
import { getData } from "../actions/index";

class Post extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getData()
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.article.map((el)=>{
                        return <li key={el.id}>{el.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        article: state.remoteArticles.slice(0,10)
    }
}

export default connect(mapStateToProps, {getData})(Post)