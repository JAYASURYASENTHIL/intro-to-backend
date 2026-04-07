Intro to Backend (Node.js + Express + MongoDB)

This project is my hands-on implementation of backend fundamentals using Node.js, Express, and MongoDB. It focuses on building a REST API with proper structure, routing, and error handling.

📌 Features Implemented
✅ Express server setup
✅ REST API structure
✅ CRUD operations for Posts
✅ Modular folder structure (routes, controllers, models)
✅ MongoDB integration (Mongoose)
✅ Proper HTTP methods usage (GET, POST, PATCH, DELETE)
✅ Error handling with status codes
✅ API testing using Postman
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Tech Stack:

Node.js
Express.js
MongoDB
Mongoose


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 -------- PROJECT STRUCTURE --------
src/
│
├── controllers/
│   ├── post.controller.js
│   └── get.controller.js
│
├── routes/
│   ├── post.route.js
│   ├── get.route.js
│   └── user.route.js
│
├── models/
│   └── post.model.js
│
├── app.js
└── index.js

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Controllers
- post.controller.js → createPost, updatePost, deletePost
- get.controller.js → getPosts

##  Routers
- post.route.js → handles create, update, delete post routes
- get.route.js → handles fetching posts
- user.route.js → handles user-related routes

##  API Endpoints

###  Post Routes
- POST   /api/v1/post/createPost         → Create a new post
- PATCH  /api/v1/update/updatePost/:id  → Update a post
- DELETE /api/v1/delete/deletePost/:id  → Delete a post

###  Get Routes
- GET    /api/v1/get/getPosts           → Get all posts

###  User Routes
- POST   /api/v1/users/register         → Register a user

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Key Learnings:
1.Understanding Express routing and middleware
2.Handling module imports/exports in ES Modules
3.Debugging common backend errors (404, module not found)
4.Structuring backend projects properly
5.Using correct HTTP methods for APIs
6.Managing async operations with try/catch
