# SimplyFI_Assignment
# Node.js Backend Assignment

This project is a Node.js backend application to manage articles, users, likes, views, and notifications using MongoDB. It follows the MVC (Model-View-Controller) architecture to ensure a clear separation of concerns, making the codebase easier to manage and scale.

## Features

1. **Article Management**: Create and manage articles with fields like title, author, body, likes, and views.
2. **User Management**: Create and manage users.
3. **Article Interaction**: Track which users have liked and viewed articles.
4. **Caching**: Keep track of views and likes for the most popular articles in memory.
5. **Notifications**: Notify users when their articles are liked, and keep track of these notifications.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer (for notifications)

## Project Structure

nodejs-backend-assignment

-├── controllers/
-│ ├── articleController.js
-│ ├── notificationController.js
-│ └── userController.js
-├── models/
-│ ├── Article.js
-│ ├── ArticleLike.js
-│ ├── ArticleView.js
-│ ├── Notification.js
-│ └── User.js
-├── routes/
-│ ├── articleRoutes.js
-│ ├── notificationRoutes.js
-│ └── userRoutes.js
-├── index.js
-├── package.json
-└── README.md



## API Endpoints

### Articles

#### Create a new article
- **URL:** `/articles`
- **Method:** `POST`
- **Body:**
    ```json
    {
      "title": "My First Article",
      "author": "Author Name",
      "body": "This is the body of the article."
    }
    ```

#### Like an article
- **URL:** `/articles/:id/like`
- **Method:** `POST`
- **Body:**
    ```json
    {
      "userId": "USER_ID"
    }
    ```

#### View an article
- **URL:** `/articles/:id/view`
- **Method:** `POST`
- **Body:**
    ```json
    {
      "userId": "USER_ID"
    }
    ```

### Users

#### Create a new user
- **URL:** `/users`
- **Method:** `POST`
- **Body:**
    ```json
    {
      "name": "User Name"
    }
    ```

### Notifications

#### Get notifications
- **URL:** `/notifications`
- **Method:** `GET`

## Example Usage

### Create a new article
```bash
curl -X POST http://localhost:3000/articles -H "Content-Type: application/json" -d '{"title": "My First Article", "author": "Author Name", "body": "This is the body of the article."}'
