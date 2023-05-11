import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Container></Container>
      <Toaster />
    </div>
  );
}

export default App;
