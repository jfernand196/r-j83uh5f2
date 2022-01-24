import React, { Component, useState } from 'react';
import './App.css';

// class App extends Component {
//   constructor(){
//     super();
//    this.state = {count: 0}
//   }
//   handleChange(event){
//     this.setState({count: event.target.value.length})
//     console.log(this.state.count)
//   }
//   render() {
//     return (
//       <div className="container">
//         <textarea rows="3" onChange={this.handleChange}></textarea>
//         <div className="counter">{this.state.value.length}</div>
//       </div>
//     );
//   }
// }

const App = () => {

  const[count, setCount] = useState(0)



  return(

<div className="container">
        <textarea rows="3" onChange={e => setCount(e.target.value.length)}></textarea>
        <div className="counter">{count}</div>
      </div>

  )


}

export default App;
