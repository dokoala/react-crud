import React, {Component} from "react";

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value});
  }
  render(){ 
    console.log(this.props.data);
    console.log('UpdateContent render');
    return (
      <article>
        <h2>Update</h2>
        <form action="/update_process" method="post"
          onSubmit={function(e){
            e.preventDefault(); //페이지 안바뀌도록..
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p><input 
              type ="text" 
              name = "title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p><textarea 
              onChange={this.inputFormHandler}
              name="desc"
              placeholder="description"
              value={this.state.desc}></textarea>
              {/* {this.state.desc} 이건 html 아님 react 는 value에 넣어줘야함  */}
          </p>          
          <p><input type="submit"></input></p>
        </form>
      </article>
    );    
  }
}

 export default UpdateContent;
