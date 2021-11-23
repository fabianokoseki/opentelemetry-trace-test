"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const dao_1 = require("./src/dao/dao");
const express = require("express");
const PORT = process.env.PORT || "8082";
const app = express();
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`Request received: ${req.params.id}`);
    const dao = new dao_1.DaoTest();
    res.send(yield dao.fetchDataFromDB());
}));
app.listen(parseInt(PORT, 10), () => {
    console.log(`Listening for requests on http://localhost:${PORT}`);
});
