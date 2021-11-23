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
exports.DaoTest = void 0;
const logger_1 = __importDefault(require("../../logger"));
class DaoTest {
    constructor() {
        this.BATCH_DELAY = 3000;
    }
    fetchDataFromDB() {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.default.info("Reached DAO...");
            return yield this.simulateDB();
        });
    }
    simulateDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise(resolve => {
                logger_1.default.info(`Fetching data from the database...`);
                setTimeout(resolve, this.BATCH_DELAY);
            });
            const result = {
                "data": "true"
            };
            logger_1.default.info("Result: ", result);
            return result;
        });
    }
}
exports.DaoTest = DaoTest;
