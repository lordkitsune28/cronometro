import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./components/footer";
import "./styled/fondo.css"
import Container from "./containers/container";

export default function App() {
  return (
    <div className="App">
      <Container/>
      <Footer />
    </div>
  );
}