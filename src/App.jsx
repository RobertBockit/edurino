import './App.css'
import { Link, Route, Switch } from "wouter";


import StartScreen from "./Components/StartScreen/StartScreen.jsx";
import GameSelectionScreen from "./Components/GameSelectionScreen/GameSelectionScreen.jsx";
import GameScreen from "./Components/GameScreen/GameScreen.jsx";
import EndScreen from "./Components/EndScreen/EndScreen.jsx";


function App() {

    return  <Switch>
                <Route path="/start" component={StartScreen} />
                <Route path="/game-selection" component={GameSelectionScreen} />
                 <Route path="/game" component={GameScreen} />
                <Route path="/end" component={EndScreen} />

    </Switch>
}

export default App
