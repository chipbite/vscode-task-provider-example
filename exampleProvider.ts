'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log("---- Activation of exampleProvider... -----");
    var type = "exampleProvider";
    vscode.tasks.registerTaskProvider(type, {
        provideTasks(token?: vscode.CancellationToken) {
            console.log("ProvideTasks...");
            
            var execution = new vscode.ShellExecution("echo \"Hello World\"");
            var problemMatchers = ["$myProblemMatcher"];
            const vsCodeTask = new vscode.Task({ type: type }, vscode.TaskScope.Global,
                "Build Example Task", "myExtension", execution, problemMatchers);
            const tasksArray = [ vsCodeTask ];

            console.log(vsCodeTask.name + "\r\n" + "---------------");
            return tasksArray;
        },
        resolveTask(task: vscode.Task, token?: vscode.CancellationToken) {
            console.log("Resolve task...");
            return task;
        }
    });
}