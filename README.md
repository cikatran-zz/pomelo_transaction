# Pomelo Test App

Pomelo Pay

## Technical

- Redux
- React Hooks
- Prefer Function Component than Class

## Instalation

- Simply run `npm install` or `yarn` after clone the project.
- Remember run `npm install` or `yarn` when pull new code.

## Lottie

- This project uses Lottie animation, to make it works on iOS, please `cd ios` and run `pod install`

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

## Run Test

- Simply run `yarn test`
- For update new Snapshot please run `yarn test -u`
