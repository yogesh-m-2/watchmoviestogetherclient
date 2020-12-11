import React,{Component} from 'react';

class Embedvideo extends Component {



  constructor(props) {
      super(props);

      this.state = {
          count : "https://www.youtube.com/embed/p3HR9QDMj18"
      };
      this.handleChang = this.handleChang.bind(this);

  }

        handleChang(event){
            console.log(event.target.value);

          this.setState({count : event.target.value});
          }
url(){
  var str1=this.state.count;
  var str2=str1.replace('https://www.youtube.com/watch?v=','https://www.youtube.com/embed/');
  return(str2);
}
  render(){
    if(this.state.count == ""){
      this.setState({count :"https://www.youtube.com/embed/p3HR9QDMj18" });
    }
    return(

        <div>
        <input
          type="text"
    onChange={this.handleChang}
    />
  <span></span>
        <iframe title="myFrame" width="560" height="315" src={this.url()}
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-success">button</button>
        </div>
    );
  }
}

export default Embedvideo;
