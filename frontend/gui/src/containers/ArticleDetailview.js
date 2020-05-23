import React from 'react';
import axios from 'axios';
import { Card, Button } from 'antd'

import CustomForm from '../components/forms'

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://localhost:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });

            })
    }
    handleDelete = (articleID) =>{
        axios.delete(`http://localhost:8000/api/${articleID}`)}


    render() {
        return (
            <div>
                <Card title={this.state.article.title} >
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm requestType="put" articleID={this.props.match.params.articleID} btnText="Update" />
                <form onSubmit={this.handleDelete(this.props.match.params.articleID)}>
                    <Button type="danger"  htmlType="submit">Delete</Button>
                </form>
            </div>
            
        );
    }
}

export default ArticleDetail;