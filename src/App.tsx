import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 w-screen h-screen">
      <Outlet />
    </div>
  );
}

export default App;
