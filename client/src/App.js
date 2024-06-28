import { Route, Routes } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import Room from "./screens/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LobbyScreen></LobbyScreen>}></Route>
        <Route path="/room/:roomId" element={<Room></Room>}></Route>
      </Routes>
    </div>
  );
}

export default App;
