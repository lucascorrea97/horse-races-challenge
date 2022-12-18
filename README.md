# Horse Races App

This application simply shows a list of the 5 next-to-go horse races to the user. It provides some information about each race like name, region, time and number. The time is updated every second and the user is able to filter the list by race type.

## Running the app

### Requirements:

- Node v16 or higher (recommended use of nvm to manage node versions)

### Setup:

- In the root folder, run `yarn` to install all the dependencies

#### IOS:

- Run `pod install` in the `ios` folder
- Return to the root folder and run `yarn ios` to start the simulator

#### Android:

- Simply run `yarn android` to start the simulator

## Linting

- Run `yarn lint`

## Testing

- Run `yarn test`
- Run `yarn test --coverage` then `cd coverage && open index.html` to visualise the coverage with more details on a web page

## Development:

- Please refer to [DEVELOPMENT.md](./documents/DEVELOPMENT.md).
