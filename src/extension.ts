// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.window.registerCustomEditorProvider(
        'customEditor.testEditor',
        new CustomEditorProvider(), 
        { 
            webviewOptions: { retainContextWhenHidden: true },
        }
    ));
}


class CDoc implements vscode.CustomDocument {
	uri: vscode.Uri;

	constructor(uri: vscode.Uri){
		this.uri = uri;
	}

	dispose(): void {
		
	}

}

class CustomEditorProvider implements vscode.CustomEditorProvider<CDoc> {
	
	private readonly _onDidChangeCustomDocument = new vscode.EventEmitter<vscode.CustomDocumentEditEvent<CDoc>>();
	public readonly onDidChangeCustomDocument = this._onDidChangeCustomDocument.event;

	saveCustomDocument(document: CDoc, cancellation: vscode.CancellationToken): Thenable<void> {
		return Promise.resolve();
	}
	saveCustomDocumentAs(document: CDoc, destination: vscode.Uri, cancellation: vscode.CancellationToken): Thenable<void> {
		return Promise.resolve();
	}
	revertCustomDocument(document: CDoc, cancellation: vscode.CancellationToken): Thenable<void> {
		return Promise.resolve();
	}
	backupCustomDocument(document: CDoc, context: vscode.CustomDocumentBackupContext, cancellation: vscode.CancellationToken): Thenable<vscode.CustomDocumentBackup> {
		return Promise.resolve({
			id: "",
			delete: () => {}
		});
	}
	openCustomDocument(uri: vscode.Uri, openContext: vscode.CustomDocumentOpenContext, token: vscode.CancellationToken): CDoc | Thenable<CDoc> {
		return Promise.resolve(new CDoc(uri));
	}
	resolveCustomEditor(document: CDoc, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): void | Thenable<void> {
		webviewPanel.webview.html = "<html><body><h2>Hello world</h2></body></html>";
	}
	
}

