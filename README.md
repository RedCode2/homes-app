# HomesApp

The root of this project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Install npm

- Before you start a local development server, you first need to install npm via [nodejs](https://nodejs.org/en).
- To test if you properly installed npm, run the following command in your terminal:
  ```bash
  npm --version
  ```
- Correct any errors before you move to the next step.

## Install the Angular CLI via npm

- In order to install the angular CLI, run the following command in your terminal:
  ```bash
  npm install -g @angular/cli
  ```
- Test if the Angular CLI is correctly installed on your system:
  ```bash
  ng version
  ```
- If you encounter any issues while installing the Angular CLI, view the [official installation procedure](https://angular.dev/tools/cli/setup-local) by Angular.

## Install JSON Server via npm

- In order to install `json-server`, run the following command in your terminal:
  ```bash
  npm install -g json-server
  ```
- Test if `json-server` is correctly installed on your system:
  ```bash
  json-server --version
  ```
- If you encounter any issues while installing JSON Server package, view [json-server - npm](https://www.npmjs.com/package/json-server).

## Install necessary packages and dependencies for the project

- Navigate into this repository in your computer and open your terminal.
- Run the following command to install packages and dependencies for the project (this will not be installed globally on your computer).
  ```bash
  npm install
  ```
- A folder named `node_modules` should appear. Now, you're almost ready to start the website.

## Run a JSON Server and fetch house details data

- Clone this repository, navigate to the folder where you saved this repository, and open the repository folder
- Now, in the root directory of the project, run:
  ```bash
  json-server --watch "src/data/houseDetails.json"
  ```

## Set up a local development environment on your system

- Clone this repository, navigate to the folder where you saved this repository, and open the repository folder
- Now, open a different terminal without closing the previous one and in the root directory of the project, run:
  ```bash
  ng serve
  ```
- Go to [http://localhost:4200](http://localhost:4200) and view the project.


