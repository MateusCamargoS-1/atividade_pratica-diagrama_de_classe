"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cachorro extends Animal_1.default {
    constructor() {
        super(4, true, true);
    }
    andar() {
        console.log("andando...");
    }
    comer() {
        console.log("comendo...");
    }
    latir() {
        console.log("latindo...");
    }
}
exports.default = Cachorro;
