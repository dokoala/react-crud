import React, {Component} from "react";

class Subject extends Component{
    render(){ //하나의 최상위 태그만 써야한다.
      console.log('subject render');
      return (
        <header>           
          <h1><a href="/">{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );    
    }
  }

  export default Subject;
