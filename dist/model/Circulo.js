"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormatoDeElemento_1 = __importDefault(require("./FormatoDeElemento"));
class Circulo extends FormatoDeElemento_1.default {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    desenhar() { }
    redimensionar() { }
}
exports.default = Circulo;
