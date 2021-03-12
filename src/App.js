import './App.css';
import JokesCategories from './components/JokesCategories';


function App() {
  this.state = {
    selectedCategory: ''
  }
  
  handleSelectCategory = category => {
    this.setState({ selectedCategory: category })
  }
  
  return (
    <div className="App">
      <JokesCategories handleSelectCategory={handleSelectCategory} />
      <RandomJokes category={selectedCategory} />
    </div>
  );
}

export default App;
