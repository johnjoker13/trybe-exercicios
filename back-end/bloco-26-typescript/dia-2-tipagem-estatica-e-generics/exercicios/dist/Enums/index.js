"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDirection = exports.EDoors = exports.EColors = void 0;
var EColors;
(function (EColors) {
    EColors[EColors["preta"] = 0] = "preta";
    EColors[EColors["branca"] = 1] = "branca";
    EColors[EColors["vermelha"] = 2] = "vermelha";
    EColors[EColors["prata"] = 3] = "prata";
})(EColors = exports.EColors || (exports.EColors = {}));
;
var EDoors;
(function (EDoors) {
    EDoors[EDoors["fEsquerda"] = 1] = "fEsquerda";
    EDoors[EDoors["fDireita"] = 2] = "fDireita";
    EDoors[EDoors["tEsquerda"] = 3] = "tEsquerda";
    EDoors[EDoors["tfDireita"] = 4] = "tfDireita";
})(EDoors = exports.EDoors || (exports.EDoors = {}));
;
var EDirection;
(function (EDirection) {
    EDirection["left"] = "left";
    EDirection["right"] = "right";
})(EDirection = exports.EDirection || (exports.EDirection = {}));
;
