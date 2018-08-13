import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Gokul", age: 32 },
      { id: 2, name: "Vinay", age: 34 },
      { id: 3, name: "Arjun", age: 33 }
    ],
    visibility: false
  };

  deleteHandler = id => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  shuffleHandler = event => {
    const currentVisibility = this.state.visibility;
    this.setState({ visibility: !currentVisibility });
    console.log("Shuffle now");
  };

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });
    const person = persons[personIndex];
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  render() {
    let persons = null;
    if (this.state.visibility === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
                clicked={() => this.deleteHandler(person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <button onClick={this.shuffleHandler}>Shuffle the names</button>
        {persons}
      </div>
    );
  }
}

export default App;
