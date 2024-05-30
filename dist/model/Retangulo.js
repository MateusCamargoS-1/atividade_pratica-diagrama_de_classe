"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormatoDeElemento_1 = __importDefault(require("./FormatoDeElemento"));
class Retangulo extends FormatoDeElemento_1.default {
    constructor(comprimento, altura) {
        super();
        this.comprimento = comprimento;
        this.altura = altura;
    }
    desenhar() { }
    redimensionar() { }
}
exports.default = Retangulo;
