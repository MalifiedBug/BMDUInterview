import './App.css';
import Carouserl1 from './Carousel1';
import Navibar from './Navibar';
import Carousel2 from './Carousel2';
import Text1 from './Text1';
import Blocks from './Blocks';
import { NavItem } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navibar />
      <Carouserl1 />
      <Text1 />
      <Blocks />
      <Carousel2 />      
    </div>
  );
}

export default App;
