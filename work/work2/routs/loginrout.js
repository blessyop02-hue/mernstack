// loginrout.js
// import express from "express";
// import { users } from "./siguprout.js";
// import { loginhandler } from "./controls/controlslogin.js";
// export const loginRouter=express.Router();




import express from "express";
import { loginhandler } from ".controls/logincontrols.js";

export const loginRouter = express.Router();

loginRouter.post("/", loginhandler);




