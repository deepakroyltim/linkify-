# 📦 Linkify - URL Shortener

A simple and efficient URL shortener service built with Node.js, Express, and MongoDB.

## 🚀 Features

- Shorten long URLs into compact, shareable links
- Click tracking for analytics
- User-specific link management
- RESTful API design
- MongoDB Atlas integration
- Input validation and security

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Nanoid
- CORS
- Dotenv

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn package manager

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/deepakroyltim/linkify-.git
cd url-shortener
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
SERVER_PORT=5171
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.sud4lwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
BASE_URL=http://localhost:5171
NODE_ENV=development
```

4. Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on port 5171.

## 📡 API Endpoints

### 1. Health Check
- **GET** `/`
- Returns: Server status message

### 2. Shorten URL
- **POST** `/shorten`
- Body:
```json
{
  "originalUrl": "https://example.com/very-long-url",
  "userId": "optional-user-id"
}
```
- Returns:
```json
{
  "success": true,
  "originalUrl": "https://example.com/very-long-url",
  "newUrl": "http://localhost:5171/abc123"
}
```

### 3. Redirect to Original URL
- **GET** `/:code`
- Redirects to the original URL and increments click counter

### 4. Get User Links
- **GET** `/user/:userId/links`
- Returns all links created by a specific user

## Project Structure

```
url-shortener/
├── Model/
│   └── Url.js          # MongoDB schema
├── routes/
│   └── url.js          # API routes
├── .env                # Environment variables
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
├── server.js           # Main server file
└── README.md           # This file
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `SERVER_PORT` | Port number for the server | 3000 |
| `MONGO_URI` | MongoDB connection string | Required |
| `BASE_URL` | Base URL for shortened links | http://localhost:5171 |
| `NODE_ENV` | Environment (development/production) | development |

## Security Considerations

- MongoDB credentials should be kept secure
- CORS is configured for development and production environments
- Input validation is implemented for URL format
- Error handling prevents information leakage

## 🧪 Testing

Use tools like Postman or curl to test the endpoints.

## 📌 Notes

- Make sure your IP is whitelisted in MongoDB Atlas under Network Access
- You can change the base URL in .env to match your deployment domain

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

ISC License
