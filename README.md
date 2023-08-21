# Recipe Web App Server

This is the server repository for my Recipe Web App! This server is responsible for handling various backend functionalities to provide users with a seamless recipe-sharing experience.

## Features

- **API Endpoints**: the server has a set of API endpoints that allow users to retrieve, create, update, and delete recipes as well as signup, login for users.

- **User Authentication**: the server ensures that only authenticated users can perform certain actions like adding new recipes or leaving comments.

- **Data Management**: the server connects to the PostgreSQL database to store and retrieve recipe data, user profiles, and comments.


## Technologies Used

- **Node.js**: built using Node.js.

- **Express.js**: usese Express.js framework to streamline the creation of API endpoints.

- **PostgreSQL**: the choice of database is PostgreSQL, that provides relational data storage for recipe data and related information.


## Getting Started

To set up the server locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Create a `.env` file based on the provided `.example.env`, and configure the necessary environment variables such as database connection details and API keys.
4. Finnaly, run the server using `npm start`.
