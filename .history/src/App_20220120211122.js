import './App.css';
import React, { Component, ReactDOM}from 'react'

function App() {
 class DoneItems extends React.Component {
   removeDoneItem(id) {
     this.props.deleteDoneItem(id);
   }

   render() {
     const completedStyle = {
       color: "#999999",
       textDecoration: "line-through",
       fontWeight: 400,
     };

     const listItems = this.props.entries.map((doneItems) => (
       <div className="field" key={doneItems.id}>
         <h3>
           <label className="item" style={completedStyle}>
             {doneItems.text}
           </label>
           <button
             className="mini ui icon button"
             onClick={() => {
               this.removeDoneItem(doneItems.id);
             }}
           >
             <i className="minus circle icon"></i>
           </button>
         </h3>
       </div>
     ));

     return (
       <div>
         <div>{listItems}</div>
       </div>
     );
   }
 }

 class ToDoItems extends React.Component {
   removeItem(id) {
     this.props.deleteItem(id);
   }

   checkItem(id) {
     this.props.updateCheckedItem(id);
   }

   render() {
     const listItems = this.props.entries.map((item) => (
       <div className="field" key={item.id}>
         <div className="ui checkbox">
           <input type="checkbox" onChange={() => this.checkItem(item.id)} />
           <label className="item" checked={item.completed}>
             <h2>{item.text}</h2>
           </label>
         </div>
         <button
           className="mini ui icon button"
           onClick={() => {
             this.removeItem(item.id);
           }}
         >
           <i className="minus circle icon"></i>
         </button>
       </div>
     ));

     return (
       <div>
         <div>{listItems}</div>
       </div>
     );
   }
 }

 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       items: [],
       newItem: "",
       doneItems: [],
       weekday: new Date().getDay(),
       month: new Date().getMonth(),
       day: new Date().getDate(),
       year: new Date().getFullYear(),
     };

     this.addNewItem = this.addNewItem.bind(this);
     this.newItemBuffer = this.newItemBuffer.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
     this.updateCheckedItem = this.updateCheckedItem.bind(this);
     this.deleteDoneItem = this.deleteDoneItem.bind(this);
   }

   // adds to state.newItem on add button click
   addNewItem(event) {
     const newItem = {
       id: this.state.items.length,
       text: this.state.newItem,
       completed: false,
     };

     this.setState((prevState) => {
       return {
         items: prevState.items.concat(newItem),
       };
     });
     this.setState({ newItem: "" });
     console.log(this.state.items);
     event.preventDefault();
   }

   // figures out what's to be added on input update
   newItemBuffer(event) {
     this.setState({ newItem: event.target.value });
   }

   deleteItem(id) {
     const filteredItems = this.state.items.filter((item) => {
       return item.id !== id;
     });
     this.setState({ items: filteredItems });
   }

   deleteDoneItem(id) {
     const filteredItems = this.state.doneItems.filter((item) => {
       return item.id !== id;
     });
     this.setState({ doneItems: filteredItems });
   }

   updateCheckedItem(id) {
     this.setState((prevState) => {
       const updatedTodo = prevState.items.map((item) => {
         if (item.id === id) {
           item.completed = !item.completed;
         }
         return item;
       });
       return {
         items: updatedTodo,
       };
     });

     const doneItem = this.state.items.filter((item) => {
       return item.id === id;
     });

     this.setState((prevState) => {
       return {
         doneItems: prevState.doneItems.concat(doneItem),
       };
     });

     this.deleteItem(id);
   }

   render() {
     const monthNames = [
       "January",
       "February",
       "March",
       "April",
       "May",
       "June",
       "July",
       "August",
       "September",
       "October",
       "November",
       "December",
     ];
     const weekdayNames = [
       "Sunday",
       "Monday",
       "Tuesday",
       "Wednesday",
       "Thursday",
       "Friday",
       "Saturday",
     ];
     return (
       <div className="ui grid App">
         <div className="sixteen wide column">
           <h5>{`${weekdayNames[this.state.weekday]}, ${this.state.day} ${
             monthNames[this.state.month]
           } ${this.state.year}`}</h5>
         </div>
         <div className="sixteen wide column">
           <h1>To Do List</h1>
           <ToDoItems
             entries={this.state.items}
             deleteItem={this.deleteItem}
             updateCheckedItem={this.updateCheckedItem}
           />
         </div>

         <div className="sixteen wide column">
           <form onSubmit={this.addNewItem}>
             <div className="row">
               <div className="ui input">
                 <input
                   type="text"
                   placeholder="add task..."
                   onChange={this.newItemBuffer}
                   value={this.state.newItem}
                 />
               </div>
               <button
                 className="ui circular icon button"
                 type="submit"
                 onClick={this.addNewItem}
               >
                 <i className="plus icon"></i>
               </button>
             </div>
           </form>
         </div>

         <div className="sixteen wide column">
           <DoneItems
             entries={this.state.doneItems}
             deleteDoneItem={this.deleteDoneItem}
           />
         </div>
       </div>
     );
   }
 }

 ReactDOM.render(<App />, document.getElementById("root"));
  return <div id="root"></div>;
}

export default App;
