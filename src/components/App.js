import React from 'react';
import AddColorForm from "./ui/AddColorForm";
import ColorList from "./ui/ColorList";
import { v4 } from 'uuid';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         colors: [],
         sort: ''
      };

      this.addColor = this.addColor.bind(this);
      this.rateColor = this.rateColor.bind(this);
      this.removeColor = this.removeColor.bind(this);
   }

   addColor(title, color) {
      this.setState({
         colors: [...this.state.colors, {
            id: v4(),
            rating: 0,
            timeStamp: new Date().toString(),
            title,
            color,
         }]
      })
   }

   rateColor(id, rating) {
      this.setState({
         colors: this.state.colors.map( color =>
            color.id === id ? (color.rating = rating, color) : color
         )
      });
   }

   removeColor(id) {
      this.setState({
         colors: this.state.colors.filter( color => color.id !== id)
      })
   }

   render() {
      const {colors} = this.state;
      const {addColor, rateColor, removeColor} = this;

      return (
         <div className="app">
            <AddColorForm oneNewColor={addColor}/>
            <ColorList colors={colors} onRate={rateColor} onRemove={removeColor}/>
         </div>
      );
   }
}

export default App;