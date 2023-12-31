import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import { Toaster } from "react-hot-toast";
import Questions from "./Components/Questions/Questions";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Container></Container>
      <Toaster />
      <Questions></Questions>
    </div>
  );
}

export default App;
