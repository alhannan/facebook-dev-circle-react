import React from 'react';
import Button from './components/Button';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isSelected: true,
    }
  }
  render() {
    const { isSelected } = this.state;
    return (
      <div>
        <Button color = {isSelected && 'red'} text="World" />
      </div>
    );
  }
}

export default App;