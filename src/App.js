import './index.css';
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import UsersSection from "./sections/UsersSection";
import FormSection from "./sections/FormSection";
import SuccessRegSection from "./sections/SuccessRegSection";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <div className="w-full h-full">
        <Nav/>
        <Hero/>
        <UsersSection/>
        <FormSection/>
        <SuccessRegSection/>

        <SpeedInsights />
    </div>
  );
}

export default App;
