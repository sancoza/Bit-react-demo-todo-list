import './App.css';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';

function App() {
  const title ='Hello World';
  return (
    <div className="App">
      <Header text={title} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
