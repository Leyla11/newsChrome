
import './App.css';
import { Explore } from './Explore';
import { Footer } from './Footer';
import { Log } from './Log';
import { New } from './New';
import { Perform } from './Perform';
import { Performs } from './Performs';
import { Tip } from './Tip';

function App() {
  return (
    <div>
      <New />
      <Log />
      <Perform />
      <Performs />
      <Tip />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
