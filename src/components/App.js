import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";

import TrelloList from './TrelloList';
import TrelloCreate from "./TrelloCreate";
import AppRouter from "../routes";

class App extends PureComponent {
  render() {
    return (
      <AppRouter />
    )
  }
}




export default App;