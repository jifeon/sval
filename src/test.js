"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var interpreter = new _1.default();
interpreter.run("\nvar start = Date.now()\nfor (var i = 0; i < 50000000; i++) {}\nconsole.log((Date.now() - start) / 1000) // 3.45s now :D\n");
