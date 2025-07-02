# 📦 Linkify - A URL Shortener App
A simple and efficient URL shortening service built with Node.js, Express, MongoDB Atlas, and Nanoid. It allows users to convert long URLs into short, shareable links and redirect them back to the original URLs.

## 🚀 Features
  - Shorten long URLs using a unique 6-character code
  - Redirect short URLs to their original destinations
  - MongoDB Atlas integration for persistent storage
  - RESTful API endpoints
  - Lightweight and easy to deploy

## 🛠️ Tech Stack
  - Node.js
  - Express.js
  - MongoDB Atlas
  - Mongoose
  - Nanoid
  - Dotenv

## Folder Structure
- project-root/
  - server.js
  - .env
  - package.json
  - routes/
    - url.js
  - Model/
    - Url.js


## ⚙️ Setup Instructions
##### 1. Clone the repository
```
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```
##### 2. Install dependencies
```

npm install

```

##### 3. Configure environment variables
Create a ***.env*** file in the root directory:
```
MONGO_URI=your_mongodb_connection_string
SERVER_PORT=3000
BASE_URL=http://localhost:3000
```
> **Note:** 💡 You can get your MongoDB Atlas URI from the Atlas dashboard under Connect → Connect your application. 

##### 4. Start the server
```

npm run dev

```


## 📡 API Endpoints
### GET /
Returns a simple message confirming the app is running.

### GET /shorten?originalUrl=<URL>
Shortens the provided URL and returns a new short URL.

##### Example:
```

GET /shorten?originalUrl=https://example.com

```

##### Response:
```

{
  "newUrl": "http://localhost:3000/abc123"
}

```


### GET /:code
Redirects to the original URL associated with the short code.

Example:
```
GET /abc123

```

## 🧪 Testing
Use tools like Postman or curl to test the endpoints.

## 📌 Notes
Make sure your IP is whitelisted in MongoDB Atlas under Network Access.
You can change the base URL in .env to match your deployment domain.
📄 License
This project is licensed under the ISC License.
