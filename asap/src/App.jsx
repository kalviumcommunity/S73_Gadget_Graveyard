import './App.css'
import GadgetCard from './components/Gadgetcard'

function App() {


  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Gadget Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <GadgetCard name="iPhone X" category="Smartphone" condition="Used - Good" price="199" />
          <GadgetCard name="MacBook Air 2017" category="Laptop" condition="Refurbished" price="399" />
          <GadgetCard name="PS4 Pro" category="Gaming Console" condition="Used - Excellent" price="250" />
        </div>
      </div>
    </>
  )
}

export default App
