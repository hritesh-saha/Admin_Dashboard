import Dashboard from "./components/Dashboard/Dashboard"
import Sidebar from "./components/Sidebar/Sidebar"


function App() {
  
  return (
    <div className="bg-stone-100 text-stone-950">
      <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar/>
        <Dashboard/>
      </main>
    </div>
  )
}

export default App
