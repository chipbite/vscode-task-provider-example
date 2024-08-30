# VS Code Task Provider - Build task - Simple (NON) Working Example

https://stackoverflow.com/questions/55135876/extension-api-task-provider-build-task-example

# What? Why?

The task provider sample of the VS code extensions samples demonstrates several things at once - and I cannot get it to work.

A really simple example of a task provider was posted on SO (link above). I still cannot get even that to work. Frustration has ensued. Stubborness has ensued.

I must be missing something fundamental.

Goal is to have this example working.

**To run/reproduce:** clone this. Run `npm install`. Start debug in vs code (e g hit `F5`). 
Go command palette (`ctrl-shift-p`) select `Run Tasks...` and then `exampleProvider`...

* **Expected:** `Build Example Task` is displayed.
* **Actual:** `No exampleProvider tasks found. Go back`

![Screencapture of test and no tasks found](https://private-user-images.githubusercontent.com/559199/362665333-d23058c6-4b67-480c-ad0d-8daaa9e97e32.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjUwMTM1NzksIm5iZiI6MTcyNTAxMzI3OSwicGF0aCI6Ii81NTkxOTkvMzYyNjY1MzMzLWQyMzA1OGM2LTRiNjctNDgwYy1hZDBkLThkYWFhOWU5N2UzMi5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgzMFQxMDIxMTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MDM4YjIwYmEwYjkyM2FlY2RkZTA5YjUyNzM0NTVmZjNiZTgyMDdkMDZiYWNkNWY0NDBmMWY4MmVhNTk5NWE4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.41XZyXtS9TNrYDy0n_xgMg_B2JJESKr8P0AfT_nj8Y4)


-------

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


-------

## References

* https://code.visualstudio.com/api/extension-guides/task-provider
* https://github.com/Microsoft/vscode-extension-samples/tree/main/task-provider-sample

I posted this question 
* [on SO here](https://stackoverflow.com/questions/78927527/vs-code-extension-api-task-provider-build-task-example-simple?noredirect=1&lq=1) (basically just a rerun of the old question). 
* [on VS Code Discussions on github here](https://github.com/microsoft/vscode-discussions/discussions/1577)

Obviously, there is "nothing" wrong with the API. There are likely 100s of working implementations (I looked at [some of these on github](https://github.com/search?q=vs+code+task+provider&type=repositories), like [this one](https://github.com/gep13/vscode-task-sample) and [this](https://github.com/kettek/vscode-gobl-task-provider)). 

I am just having an issue getting started, and this example was popular, but not working.

Also, other people with same question:
* https://stackoverflow.com/questions/67075336/vscode-taskprovider-no-tasks-in-the-menu
* https://github.com/g-arjones/vscode-task-provider-bug
* https://github.com/radu-matei/vscode-draft-task-provider


