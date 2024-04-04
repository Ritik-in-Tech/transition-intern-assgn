# Transition Intern Test

To run the Project please follow the following steps:

## Installation

Clone the repo using the command

```bash
git clone https://github.com/testgithubtiwari/transition-intern-assgn
```

Go to the project root directory

```bash
cd transitionintern
```

Install the dependencies and the packages

```bash
npm i
```

To run the project you have to setup env file which require these things

##### 1) MONGODB_PASS

##### 2) COLLECTION_NAME

##### 3) PORT

After setting all this you can run the project using the command

```bash
npm start
```

Now your project is runing on the port which you have defined in the .env file.
To access it go to your browser and type localhost:<port>

##### To see the swagger UI for the api calls go to this localhost:<port>/api-docs

### Note: To run the seed scrips to add data to the mongodb localhost Please follow these commands

1. First go to the seed folder from the root directory using the command

```bash
cd seed
```

2. There is file inside this folder named seed.js. You have to run that using the command

```bash
node seed.js
```

You will see the console message that the seed data added successfully.

#### To run the unit integration test follow these steps

1. First stop the server if any running by your terminal.
2. Now run the command

```bash
npm test
```

##### -> If this command shows any error then it might possible that the existing email that you are adding using the test already in the database or it may be your server not stop till yet.

### So these are the basic command and steps to run this Node.js Project.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
