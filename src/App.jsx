import { Outlet } from "react-router-dom";
import { Header } from "./Components";

function App() {

  return (
    <>
      <div className="max-w-screen-2xl min-h-screen bg-[#F6F6F6] flex flex-col sm:p-3">
        <Header/>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
