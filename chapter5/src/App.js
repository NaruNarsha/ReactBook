import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';


function ChildComp(){
  return <div>child component</div>
}

function App() {

  const BodyProps = {
    name: "Naru",
    location: "서울시",
    fovoriteList: ["축구", "농구", "야구"],
  }

  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
