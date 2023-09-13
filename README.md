# API Documentation

## Introduction

This is a simple CRUD (Create, Read, Update, Delete) operations endpoints on a "person" resource. It is built using Express.js and mongoose. This API interacts with the MONGODB database in order to manage and organize data.

## Table of Contents

- [API Documentation](#api-documentation)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisite](#prerequisite)
    - [Installation](#installation)
    - [Running API](#running-api)
  - [Endpoints](#endpoints)
    - [Create a Person](#create-a-person)
    - [Retrieve a Person by ID](#retrieve-a-person-by-id)
    - [Update a Person by ID](#update-a-person-by-id)
    - [Delete a Person by ID](#delete-a-person-by-id)
  - [Response Formats](#response-formats)
  - [Sample API Usage](#sample-api-usage)
    - [1. Creating a Person](#1-creating-a-person)
      - [Request](#request)
      - [Response](#response)
    - [2. Retrieving a Person](#2-retrieving-a-person)
      - [Request](#request-1)
      - [Response](#response-1)
    - [3. Updating a Person](#3-updating-a-person)
      - [Request](#request-2)
      - [Response](#response-2)
    - [4. Deleting a Person](#4-deleting-a-person)
      - [Request](#request-3)
      - [Response](#response-3)
  - [How To Use URI String](#how-to-use-uri-string)

## Getting Started

To start using the Person API, you'll need to understand the available endpoints and how to interact with them. This documentation provides detailed information on each endpoint, including request and response formats.

### Prerequisite

Before this project can be executed, there are some dependencies that need to already be installed on your system which are

- node and npm
- Creating a mongodb database and extracting your URI and check [how to use URI String](#how-to-use-uri-string) below

### Installation

1. Clone the repository to your local machine

   ```
   git clone https://github.com/yourusername/person-api.git
   ```

2. Navigate to the folder you cloned it into
   ```
   cd folder-name
   ```
3. Install all the dependencies that comes with the project
   ```
   npm install
   ```

### Running API

To run the project, we will use the nodemon dependency (which already comes with the project)

```
nodemon server.js
```

Then go to `http://localhost:9000` where the api will be available

## Endpoints

The API offers the following endpoints for managing person data:

### Create a Person

- **Endpoint**: `POST /api/persons`
- **Description**: Create a new person.
- **Method**: POST
- **Request Format**:

```json
{
  "name": "Kim Taehyung"
}
```

- **Response Format**:

  ```json
  {
    "name": "Kim Taehyung",
    "_id": "650202876966ffeefacdb776",
    "__v": 0
  }
  ```

- **Status Codes**:
  - `201 OK`: User created successfully
  - `500 Internal Server Error`: Server error

### Retrieve a Person by ID

- **Endpoint**: `GET /api/persons/:id`
- **Description**: Get a person's data based on the ID.
- **Method**: GET
- **Response Format**:

  ```json
  {
    "name": "Kim Taehyung",
    "_id": "650202876966ffeefacdb776",
    "__v": 0
  }
  ```

- **Status Codes**:
  - `200 OK`: User retrieved successfully
  - `404 Not Found`: Person with the specified ID not found
  - `500 Internal Server Error`: Server error

### Update a Person by ID

- **Endpoint**: `PUT /api/persons/:id`
- **Description**: Update a person's data based on the ID.
- **Method**: PUT
- **Request Format**:

  ```json
  {
    "name": "Kim Namjoon"
  }
  ```

- **Response Format**:

  ```json
  {
    "name": "Kim Namjoon",
    "_id": "650202876966ffeefacdb776",
    "__v": 0
  }
  ```

- **Status Codes**:
  - `200 OK`: User updated successfully
  - `404 Not Found`: Person with the specified ID not found
  - `500 Internal Server Error`: Server error

### Delete a Person by ID

- **Endpoint**: `DELETE /api/persons/:id`
- **Description**: Delete a person's data based on the ID.
- **Method**: DELETE
- **Status Codes**:
  - `204 OK`: No Content
  - `404 Not Found`: Person with the specified ID not found
  - `500 Internal Server Error`: Server error

## Response Formats

Responses from the Person API are in JSON format. Each endpoint provides specific response formats, as described in the documentation.

## Sample API Usage

In this section, we provide sample API usage scenarios and code examples to help you understand how to interact with thePerson API.

### 1. Creating a Person

#### Request

```http
POST /api/persons
Content-Type: application/json

{
  "name": "Park Jimin",
}
```

#### Response

```json
{
  "id": "6501f96d688f4ae06a225070",
  "name": "Park Jimin",
  "__v": 0
}
```

### 2. Retrieving a Person

#### Request

```http
GET /api/persons/6501f96d688f4ae06a225070
```

#### Response

```json
{
  "id": "6501f96d688f4ae06a225070",
  "name": "Park Jimin",
  "__v": 0
}
```

### 3. Updating a Person

#### Request

```http
PUT /api/persons/6501f96d688f4ae06a225070
Content-Type: application/json

{
  "name": "Updated Park Jimin",
}

```

#### Response

```json
{
  "id": "6501f96d688f4ae06a225070",
  "name": "Updated Park Jimin",
  "__v": 0
}
```

### 4. Deleting a Person

#### Request

```http
DELETE /api/persons/6501f96d688f4ae06a225070
```

#### Response

```
204 No Content
```

## How To Use URI String

- Create a .env file and add the following as key: value
  - PORT: 9000 (can be any port example: 3000)
  - MONGO_URI: your MONGODB database URI
