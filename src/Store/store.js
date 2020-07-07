import { createStore,combineReducers,compose } from "redux";
import GraphReducer from "../Reducers/GraphReducer"
import ScenarioManagerReducer from "../Reducers/ScenarioManagerReducer"
import TopBarReducer from "../Reducers/TopBarReducer"
import TrainedDataReducer from "../Reducers/trained-data.reducer"
import LoginReducer from "../Reducers/login.reducer"
import BotManagerReducer from "../Reducers/bot-manager.reducer"
import BotTesterReducer from "../Reducers/bot-tester.reducer"


const rootReducer=combineReducers({
	graph:GraphReducer,
	scenario:ScenarioManagerReducer,
	topBar:TopBarReducer,
	trainedData:TrainedDataReducer,
	login:LoginReducer,
	botManager:BotManagerReducer,
	botTester:BotTesterReducer
});
const store = createStore(rootReducer);

export default store;