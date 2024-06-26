# SAFE NET BANK 

![Logo](https://github.com/gugafromMARS/homebanking-app/assets/116969206/9a6e96da-065d-4077-8648-2d1e748fe893)


Welcome, to SafeNet Bank with Java in microservices and Spring Security for backend and React with Typescript for frontend, the theme of the project is net banking where you can create your user account, your current and savings account for deposits, payments and transfer between accounts.
This project include in the dashboard a management of account balance, calculate your incomes and outcomes and show a graph about all your movements.

Summary for usage:
Create a user account, create accounts (current or savings or both), deposits, payments or transfers.

## Architecture

![ArchitectureImg](https://github.com/gugafromMARS/homebanking-app/assets/116969206/fe54c961-ed06-42e7-9d89-42f5ec4504f2)


## Technology

Here are some technologys used on this project.

* Java version 17
* React
* Typescript

## Services

Services used.

* Github
  
## Getting started

1- Create docker containers for both microservices in backend (run on therminal):

1.1- Accounts database container
```shell script
docker run -d -p 3306:3306 --name accountsdb  -v $(pwd)/accountsdata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=accountsdb  mysql:latest
```
1.2- Users database container
```shell script
docker run -d -p 3307:3306 --name usersdb  -v $(pwd)/usersdata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=usersdb  mysql:latest
```
2- Run backend microservices(on backend project folder)

2.1- Users microservice

2.2- Accounts microservice

3- Run on therminal
```shell script
npm install
npm run dev
```


## App functionalitys

### Home

![HomeSlider](https://github.com/gugafromMARS/homebanking-app/assets/116969206/d27c9b05-6c95-4e56-ad4e-9c8342cd386e)

![Services](https://github.com/gugafromMARS/homebanking-app/assets/116969206/47d23afc-8afc-4a49-905c-de4b70fdc3f7)

![SignUp](https://github.com/gugafromMARS/homebanking-app/assets/116969206/04a0bf27-974b-4502-8fe0-7acf81d0e13d)

### Login

![login](https://github.com/gugafromMARS/homebanking-app/assets/116969206/6f140c6a-3726-424b-aa00-bd8a133b8272)

### Dashboard

![dashboard1](https://github.com/gugafromMARS/homebanking-app/assets/116969206/fc624997-215a-4eaa-8924-4a2a36832865)

![dashboard2](https://github.com/gugafromMARS/homebanking-app/assets/116969206/010e768c-720e-479e-b0a4-fdcc5d5d049c)


### Summary of api possibilities in all microservices.

### Users Service Endpoints

* **Register User**

* **Login **

* **Update User Image **

### Accounts Endpoints

* **Create Accounts**
  
* **Get Accounts**

### Balance Endpoints
* **Get Balance **

### Movements Endpoints

* **Deposit**
![Deposit](https://github.com/gugafromMARS/homebanking-app/assets/116969206/b4aef806-e89a-4375-95a9-147e4635c2a0)

* **Payment**
![Payment](https://github.com/gugafromMARS/homebanking-app/assets/116969206/2e1b73c6-c0f5-4f87-be41-1c4b54213895)

* **Transfer**
![Transfer](https://github.com/gugafromMARS/homebanking-app/assets/116969206/74842f59-61eb-4fd9-b4be-d61f788bfad1)




## Authors

**gugafromMars**

[Github-gugafromMars](https://github.com/gugafromMARS)

Thanks to visiting and happy coding!
