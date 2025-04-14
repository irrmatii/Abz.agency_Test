import './index.css';
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import UsersSection from "./sections/UsersSection";
import FormSection from "./sections/FormSection";
import SuccessRegSection from "./sections/SuccessRegSection";
import {useState} from "react";

function App() {

  return (
    <div className="w-full h-full">
        <Nav/>
        <Hero/>
        <UsersSection/>
        <FormSection/>
        <SuccessRegSection/>
    </div>
  );
}

export default App;
