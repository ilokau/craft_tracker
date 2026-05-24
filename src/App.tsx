
import './App.css'

function App() {
  return (
    <div className="container">
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
      src="assets/images/knitting.png"
      className="max-w-sm"
    />
    <div>
      <h1 className="text-5xl font-bold">Craft Tracker</h1>
      <p className="py-6">
        Track your crochet and knitting projects easily!
        </p>
      <button className="btn btn-primary">New Project</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default App
