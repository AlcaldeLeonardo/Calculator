import { captureKeys } from "./module/captureKeys.js";
import { setEvents } from "./module/setEvents.js";

const keyNum = [];
const keyOp = [];



//capturando los numeros
captureKeys(keyNum, "keyNum", 12);

//capturando a los operadores del DOM
captureKeys(keyOp, "keyOp", 4);

setEvents(keyNum, keyOp);


