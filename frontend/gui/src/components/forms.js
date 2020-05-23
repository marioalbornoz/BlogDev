import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (requestType, articleID) => {
              
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        console.log(title, content);

        switch (requestType) {
          case 'post':
            return axios.post('http://localhost:8000/api/', {
              title:title,
              content:content
            })
            .then(res => console.log(res))
            .catch(err => console.error(err))
            
        
            case 'put':
              return axios.put(`http://localhost:8000/api/${articleID}/`, {
                title:title,
                content:content
              })
              .then(res => console.log(res))
              .catch(err => console.error(err))
        }
        
    }

    render() {
        return (
          <div>
            <Form 
            onFinish={() => this.handleFormSubmit(
              this.props.requestType,
              this.props.articleID
            )}
            >
              <FormItem label="Title" name="title" >
                <Input id="title" placeholder="Put a title here" />
              </FormItem>
              <FormItem label="Content" name="content">
                <Input id="content" placeholder="Enter some content ..." />
              </FormItem>
              <FormItem >
                <Button type="primary" htmlType="submit">
                  {this.props.btnText}
                </Button>
              </FormItem>
            </Form>
          </div>
        );
    }

    
}

export default CustomForm;