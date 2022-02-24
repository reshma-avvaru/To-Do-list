# ToDoList

A to-do list application to keep a track of pending and completed taks.

The project is deployed using firebase hosting at https://to-do-list-70ee8.web.app .

# Tech Stack
- Angular 12
- Firebase


# Features of the Application
1. User Authentication
   Email and password authentication using firebase.
   
2. Add Task
   ![Screenshot (77)](https://user-images.githubusercontent.com/69675204/155579310-d41ccbb4-1534-4bd3-906d-507d7d685daf.png)
   
3. Delete Task

4. Strike out completed task
   ![Screenshot (78)](https://user-images.githubusercontent.com/69675204/155579532-e1bf24f1-8620-43f6-b0f7-aaf2902d73bb.png)

5. Shift completed tasks to seperate list
   ![Screenshot (79)](https://user-images.githubusercontent.com/69675204/155579652-2d1b84df-7c7f-433b-98af-390c30bbca35.png)
   
6. Clear all completed tasks

# Installation

To use this project, follow the steps below:

Initialise git on your terminal.

```bash
git init
```
Clone this repository.

```bash
git clone https://github.com/reshma-avvaru/To-Do-list.git
``` 

Navigate to project root directory. 

```bash
cd To-Do-list
```

Open the repository with your code editor. 
In case you do not have a code editor, personally recommended Visual Studio Code. 

```bash
code .
```

Open the terminal in Visual code by pressing Ctrl+J (Windows) and run the following commands:

```bash
npm i
```
After the required packages are installed, run the following command to start development server: 

```bash
ng serve
```
Please note: Replace the placeholders in environment files with appropriate firebase config data.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
