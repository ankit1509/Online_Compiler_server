"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const outputPath = path_1.default.join(__dirname, "output");
if (!fs_1.default.existsSync(outputPath)) {
    fs_1.default.mkdirSync(outputPath, { recursive: true });
}
const executePy = (filepath) => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(`python ${filepath}`, (error, stdout, stderr) => {
            error && reject({ error, stderr });
            stderr && reject(stderr);
            resolve(stdout);
        });
    });
};
exports.default = executePy;