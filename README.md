# Food Items API

A simple RESTful API for managing food items built with Express.js and MongoDB using Mongoose.

## Overview

This project allows you to add and retrieve food items. Each food item includes a name, category, and image.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jubayerahmmad/backend.git
   ```

2. Navigate into the project directory:

   ```bash
   cd backend-antopolis
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

## API Endpoints

### Base URL

```
http://localhost:5000/foods
```

### Routes

#### Add a Food Item

- **URL**: `/foods/add`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Body**:

  ```json
  {
    "name": "Pizza",
    "category": "Fast Food",
    "image": "https://example.com/pizza.jpg"
  }
  ```

- **Success Response**:

  - **Code**: `201 CREATED`
  - **Content**:

    ```json
    {
      "_id": "...",
      "name": "Pizza",
      "category": "Fast Food",
      "image": "https://example.com/pizza.jpg",
      "createdAt": "...",
      "updatedAt": "..."
    }
    ```

#### Get All Food Items

- **URL**: `/foods`
- **Method**: `GET`
- **Success Response**:

  - **Code**: `200 OK`
  - **Content**:

    ```json
    [
      {
        "_id": "...",
        "name": "Pizza",
        "category": "Fast Food",
        "image": "https://example.com/pizza.jpg",
        "createdAt": "...",
        "updatedAt": "..."
      },
      ...
    ]
    ```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

---
