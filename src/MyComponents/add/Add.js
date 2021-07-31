import React from 'react';
import './Add.css';
import AddPost from '../addPost/AddPost';
import image from '../guest.png';

export default class Add extends React.Component {
  state = {
    seen1: false,
    seen2: false
  };

  togglePop = () => {
    this.setState({
      seen1: !this.state.seen1,
      seen2: false
    });
  };

  toggleGif = () => {
    this.setState({
      seen2: !this.state.seen2
    });
  };

  render() {
    return (
      <div className="inputBox">
        <p> <img style={{width:'2.2vw',height:'2.2vw',borderRadius:'50%'}} src={image} alt="Dp" /> </p>
        <div className="btn" onClick={this.togglePop}>
          <button>Hey, What's on your mind, Guest?</button>
        </div>
        {this.state.seen1 ? <AddPost addPost={this.props.addPost} togglePop={this.togglePop} gifPop={this.state.seen2} toggleGif={this.toggleGif} /> : null}
      </div>
        );
    }
  }