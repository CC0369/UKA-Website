//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Sponsors } from './components/Sponsors';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer} from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Sponsors />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
