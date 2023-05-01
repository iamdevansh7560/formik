import Footer from "./Component/Footer/footer";
import Form from "./Component/Form/form";
import Header from "./Component/Header/header";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="Checkout" >
      <Header></Header>
      <Form></Form>
      </div>
     <Footer></Footer> 
    </div>
  );
}

export default App;
