import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeatureList from "./Components/FeatureList"
import TopBar from "./Components/TopBar"
import HomeMessage from "./Components/HomeMessage"
import HealthMain from "./Components/FeatureFolder/HealthMain"
import ReqAnalysisMain from "./Components/FeatureFolder/ReqAnalysisMain"
import GraphDemoMain from "./Components/FeatureFolder/GraphDemoMain"
import ScenarioManager from "./Components/FeatureFolder/ScenarioManager"
import { Provider } from "react-redux";
import store from "./Store/store";
import UnrecognizedMails from "./Components/FeatureFolder/UnrecognizedMails"
import ScenarioManager1 from "./Components/FeatureFolder/ScenarioManager (1)"
import TrainedBot from "./Components/FeatureFolder/TrainedBot"
import LoginPage from "./Components/FeatureFolder/LoginPage"
import BotManager from "./Components/FeatureFolder/BotManager"
import TrainBot from "./Components/FeatureFolder/TrainBot"
import BotTester from "./Components/FeatureFolder/BotTester"
import TrainedData from "./Components/FeatureFolder/TrainedDat"
//import BotManager2 from "./Components/FeatureFolder/bot2"


function App() {
  return (
    <Provider store={store}>
<TopBar />
      <FeatureList />
<ScenarioManager />

           </Provider>
  );
}

export default App;



/*
<HomeMessage />
<ReqAnalysisMain />
        <LoginPage />
<ScenarioManager />

<TrainedBot />


*/