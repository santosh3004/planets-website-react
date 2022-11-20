import './App.css';
import Carousel from './components/pages/Carousel';
import Details from './components/pages/Details';
import Header from './components/pages/Header';
import Section from './components/pages/Section';
import { Data } from './components/variables/Data';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Details/>
      <Carousel slides={Data}/>
    </div>
  );
}

export default App;
