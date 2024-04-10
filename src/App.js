import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import MainTop from './components/mainTop/MainTop';
import MainCards from './components/mainCards/MainCards';
import Main from './components/main/Main';
import MainPastavki from './components/mainPastavki/MainPastavki';
import Footer from './components/footer/Footer';
import FooterTop from './components/footerTop/FooterTop';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainTop/>
      <MainCards/>
      <Main/>
      <MainPastavki/>
      <FooterTop/>
      <Footer/>
    </div>
  );
}

export default App;
