import {BotTesterActionType} from "../Action-Types/bot-tester.actiontype";
//import {BotTesterActionType} from "../action-types/bot-tester.actiontype";

const initialState={
    file:"",
   

};

export default function BotTesterReducer(state = initialState, action){

    switch(action.type){

        case BotTesterActionType.SET_FILE:
            return{
                ...state, file:action.file
            };

       

        default:
             return state;
  
    }
}