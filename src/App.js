import Nav from "./components/Nav"
import Card from "./components/card"
import data from "./data"
import './App.css';

function App() {
  const cards = data.map(item => {
    return (
              <Card 
                key={item.id}
                item = {item}
              />
    )
  })
  return (
    <div className="container">
          <Nav />
          {cards}
    </div>
  );
}

export default App;
