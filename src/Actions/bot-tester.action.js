import {BotTesterActionType} from "../Action-Types/bot-tester.actiontype";
//import {BotTesterActionType} from "../action-types/bot-tester.actiontype";

export function inputFile(inpfile){
    return {type:BotTesterActionType.SET_FILE,
            file: inpfile
    };
}
