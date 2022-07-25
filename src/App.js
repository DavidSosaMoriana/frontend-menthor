import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/Homepage/Homepage"
import PreviewCard from "./components/PreviewCard/PreviewCard"
import cardImage from "./components/PreviewCard/img/imageD.jpg"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/main/card" element={
          <PreviewCard image={cardImage} maxWidth="600px"
              category="PERFUME"
              title="Gabrielle Essense Eau De Parfum"
              about="A floral, solar and vuluptuos interpretation composed by Olivier Polge, Perfume-Creator for the house of Channel."
              currentPrice="$149.99"
              oldPrice="$169.99"
            />
          }/>
      </Routes>
   </>
  )
} 

export default App;
