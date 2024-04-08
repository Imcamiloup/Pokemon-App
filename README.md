# Pokémon Project

## Overview

This project is a Single Page Application (SPA) built using React, Redux, Node.js, Express, and Sequelize. The main objectives are to create a functional Pokémon application where users can search for, view details of, filter, sort, and create new Pokémon. The application interacts with the PokeAPI for data retrieval and storage, and it incorporates basic styling and design principles.

## Features

- **Search Pokémon**: Search for Pokémon by name.
- **View Pokémon Details**: View detailed information about each Pokémon.
- **Filter Pokémon**: Filter Pokémon by type and source (API or database).
- **Sort Pokémon**: Sort Pokémon alphabetically and by attack.
- **Create New Pokémon**: Create new Pokémon with custom attributes and types.

## Getting Started

### Prerequisites

Ensure you have the following software installed:

- Node.js (version 12.18.3 or higher)
- NPM (version 6.14.16 or higher)

You can check your Node.js and NPM versions using the following commands:

```bash
node -v
npm -v
Installation
Fork this repository to your GitHub account.

Clone the forked repository to your local machine.

Navigate to the api folder and create a .env file with your PostgreSQL credentials:

env
Copy code
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
Replace your_postgres_user and your_postgres_password with your actual PostgreSQL credentials.

Create a PostgreSQL database named pokemon.

Install dependencies for both the client and server:

bash
Copy code
cd client
npm install
cd ../api
npm install
Running the Application
Start the server:

bash
Copy code
cd api
npm start
In a separate terminal, start the client:

bash
Copy code
cd client
npm start
Open your browser and navigate to http://localhost:3000 to view the application.
```

## API Endpoints
#### GET /pokemons: Get a list of all Pokémon.
#### GET /pokemons/:idPokemon: Get details of a specific Pokémon by ID.
#### GET /pokemons/name?="...": Search for Pokémon by name.
#### POST /pokemons: Create a new Pokémon.
#### GET /types: Get a list of all Pokémon types.


## Frontend Structure
#### Landing Page: Welcome page with a background image and a button to enter the home page.
#### Home Page: Main page with a search bar, a list of Pokémon cards, filters, sorting options, and pagination.
#### Detail Page: Detailed view of a Pokémon with all its attributes.
#### Form Page: Form to create a new Pokémon with custom attributes and types.

### Additional Notes:

#### Styling: CSS is used for styling throughout the application, adhering to basic design principles.
#### Validation: Form validation is implemented using JavaScript to ensure data integrity.
#### Testing: Unit tests and integration tests are not included in this project but should be implemented for production-ready applications.
#### Feel free to explore the application and enjoy your Pokémon journey!

