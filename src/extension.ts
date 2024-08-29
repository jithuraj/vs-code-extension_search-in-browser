import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.searchInBrowser",
    () => {
      vscode.window
        .showInputBox({ prompt: "Enter search query" })
        .then(async (query) => {
          if (query) {
            const url = `https://www.google.com/search?q=${encodeURIComponent(
              query
            )}`;
            const open = (await import("open")).default;
            open(url);
          }
        });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
