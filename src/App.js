
import './App.css';
import Header from './mycomponents/header';
import Footer from './mycomponents/Footer';
import Todos from './mycomponents/Todos';
function App() {
  let todos =[
    {
      sno: 1,
      title: "Go to the market",
      desc: " you need to go the market to buy bread"
    }
  ]
  return (
   <>
   <Header/>
   <Todos todos = {todos}/>
   <Footer/>
   </>
  );
}

export default App;
