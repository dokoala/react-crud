import React, {Component} from "react";
import Content from "./components/Content";
import TOC from "./components/TOC"
import Subject from "./components/Subject";
import './App.css';

class App extends Component{
  constructor(props){ //스테이트 초기화 하려고
    super(props); // 콘스트럭터 안에서 초기화 가능.
    //컴포넌트를 실행할때 constructor가 있으면 초기화 먼저한다.
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'이거 되긴 하냐?'},
      //외부가 사용못하도록하는게 좋음.
      welcome:{title:'welcome', desc:'hello react!'},
      contents:[
        {id:1 , title:'HTML', desc:'HTMLS is HyperText...'},
        {id:2 , title:'CSS', desc:'css...'},
        {id:3 , title:'JavaScript', desc:'js...'}
      ]
    }
  }
  render(){
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title =  this.state.welcome.title;
      _desc =  this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title =  this.state.contents[0].title;
      _desc =  this.state.contents[0].desc;
    }    
    console.log('render', this);
    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>           
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.state.mode = 'welcome';
            //이것만쓰면 오류가 걸림 this가 뭔지 모르기때문에 bind써야함. 
            this.setState({
              mode:'welcome'
            }); // 바뀐 값을 적용하기 위해서 사용.                      
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data = {this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
