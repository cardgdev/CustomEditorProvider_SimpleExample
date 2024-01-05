"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    context.subscriptions.push(vscode.window.registerCustomEditorProvider('customEditor.testEditor', new CustomEditorProvider(), {
        webviewOptions: { retainContextWhenHidden: true },
    }));
}
exports.activate = activate;
class CDoc {
    uri;
    constructor(uri) {
        this.uri = uri;
    }
    dispose() {
    }
}
class CustomEditorProvider {
    _onDidChangeCustomDocument = new vscode.EventEmitter();
    onDidChangeCustomDocument = this._onDidChangeCustomDocument.event;
    saveCustomDocument(document, cancellation) {
        return Promise.resolve();
    }
    saveCustomDocumentAs(document, destination, cancellation) {
        return Promise.resolve();
    }
    revertCustomDocument(document, cancellation) {
        return Promise.resolve();
    }
    backupCustomDocument(document, context, cancellation) {
        return Promise.resolve({
            id: "",
            delete: () => { }
        });
    }
    openCustomDocument(uri, openContext, token) {
        return Promise.resolve(new CDoc(uri));
    }
    resolveCustomEditor(document, webviewPanel, token) {
        webviewPanel.webview.html = "<html><body><h2>This is a very basic example of a custom editor</h2></body></html>";
    }
}
//# sourceMappingURL=extension.js.map