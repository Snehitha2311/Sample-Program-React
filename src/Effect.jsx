import React, {Component, Fragment} from 'react';
import { Button } from 'react-bootstrap';

class Effect extends Component {
    constructor(props){ 
      super(props);
      this.state= {
        name: "Snehitha",
        id: "51897470",
        training: "React"
      }
      this.domRef = React.createRef();
    }
  
    // componentDidMount() {
    //   console.log('---ComponentDidMount---');
    //   fetch('https://jsonplaceholder.typicode.com/users', {
    //     method: "GET"
    //   }).then(response => response.json()).then(data => {
    //     console.log('----data---', data);
    //   })
        
    //     const responseData = response.json();
    //     console.log('--response---', responseData);
    
    // }
    componentDidMount() {
        this.domRef.current.addEventListener('mousemove', this.handleMouseMove);
        console.log('---componentDidMount---');
    }

    componentWillUnmount() {
        this.domRef.current.removeEventListener('mousemove', this.handleMouseMove);
        console.log('---componentWillUnmount---');
    }

    componentDidUpdate() {
        console.log('---ComponentDidUpdate---');
        
    }

    handleMouseMove = (e) => {
        console.log('---handleMousMove--Class Component---');
    }

    changeData = () => this.setState({name: "Snehitha Kodavati", id: "7470", training: "Angular"});
   
    render() {
    return (
      <div ref={this.domRef}>
          <h2>Class Components</h2>
          <p>Name: {this.state.name}</p>
          <p>Id:{this.state.id}</p>
          <p>Training: {this.state.training}</p>
         <Button variant ="secondary" onClick={this.changeData}>Click</Button>
      </div>
    );
    }
  }
  export default Effect;