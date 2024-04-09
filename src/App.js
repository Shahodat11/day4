import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import MainTop from './components/mainTop/MainTop';
import MainCards from './components/mainCards/MainCards';
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
      <Header/>
      <MainTop/>
      <MainCards/>
      <Main/>
    </div>
  );
}

export default App;
