# LinkMe

A customizable micro-landing page creator using React, Flask and PostgreSQL.

# Frontend Documentation (React)

## Initial setup

- Clone this respository `git clone <SSH/HTTPS URL>`.
- Change directory to the frontend directory `cd linkme/frontend`.
- Install the dependencies `npm install`.

## Setting up frontend environment variables

- Create a copy of .env.example to .env `cp .env.example .env`.
  - For `REACT_APP_FRONTEND_URL`:
    - In local and production development, set the variable to `http://localhost:3000`.
  - For `REACT_APP_BACKEND_URL`:
    - In local and production development, set the variable to `http://localhost:5000`.

## Running frontend in development mode

- Run the frontend `npm run start`.

## Deploying the frontend

- Deploy the frontend on [Vercel](https://vercel.com).

# Backend Documentation (Flask)

## Database setup

- Run the psql command using a terminal (Eg: Git bash).
- Login to your PSQL account `psql -U <user>`.
- Enter your password.
- Create the database `CREATE DATABASE linkme;`.
- Connect to that database `\c linkme;`.
- Create the necessary tables using flask-migrate.
  - Run the command `flask db upgrade`.

## Backend setup

- Install python virtual environment package if not installed already `pip install virtualenv`.
- Create a python virtual environment `virtualenv <environment_name>`.
- Run the virtual environment:
  - For windows based systems (environment_name): `source <environment_name>\Scripts\activate.bat`.
  - For Unix based systems (environment_name): `source <environment_name>/bin/activate`.
- Install dependencies `pip install -r requirements.txt`.

## Setting backend environment variables

- Create a copy of .env.example to .env `cp .env.example .env`.
- For `DATABASE_URL`:
  - In local development, set the variable to `postgresql://<username>:<password>@localhost:5432/linkme`.
  - In production development, set the variable to the published URL.

## Running backend in development mode

- Run the backend `flask run`.

## Running backend in production mode

- Run the backend `gunicorn app:app`. <br />**Note:** This command works only on Linux.
  <br />**Warning:** This module has not been installed in the `requirements.txt` file.
