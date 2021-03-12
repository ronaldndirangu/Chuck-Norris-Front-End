import './App.css';
import JokesCategories from './components/JokesCategories';


function App() {
  this.state = {
    selectedCategories: ''
  }
  
  handleSelectCategory = category => {
    this.setState({ selectedCategories: category })
  }
  
  return (
    <div className="App">
      <JokesCategories handleSelectCategory={handleSelectCategory} />
      <RandomJokes categories={selectedCategories} />
    </div>
  );
}

export default App;
