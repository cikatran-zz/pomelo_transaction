# Pomelo Test App
Pomelo Pay

## Technical
- Redux
- React Hooks
- Prefer Function Component than Class

## Instalation
- Simply run `npm install` or `yarn` after clone the project.
- Remember run `npm install` or `yarn` when pull new code.

## How to run
- Using VSCode: Please copy below settings to .vscode/launch.json (inside `configurations` tag)
```
    {
      "name": "Debug iOS",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "launch",
      "platform": "ios"
    },
    {
      "name": "Debug Android",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "launch",
      "platform": "android"
    }
```
- Others, start packager server first by this command on terminal `yarn start` then run `yarn android` or `yarn ios`
