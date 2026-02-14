# E-commerce REST API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=JSON%20web%20tokens&logoColor=white)

A production-ready RESTful API for an e-commerce platform built with Node.js, Express.js, and MongoDB. Features complete authentication system with email verification, role-based authorization, advanced product management, and comprehensive security measures.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [API Endpoints](#-api-endpoints)
- [Authentication Flow](#-authentication-flow)
- [Advanced Query Features](#-advanced-query-features)
- [Security](#-security)
- [Error Handling](#-error-handling)
- [License](#-license)

## ✨ Features

### 🔐 Authentication & Authorization
- **User Registration** with email confirmation using OTP
- **Email Verification** system with secure OTP generation
- **Secure Login** with JWT token authentication
- **Password Reset** functionality via email OTP
- **Role-Based Access Control** (Admin/User)
- **HTTP-only Cookie** support for token storage

### 📦 Product Management
- **CRUD Operations** for products
- **Image Upload** integration with Cloudinary
- **Advanced Search** across multiple fields (name, title, description)
- **Filtering** with comparison operators (gte, gt, lte, lt)
- **Sorting** by multiple fields
- **Pagination** with customizable limits
- **Field Selection** for optimized responses
- **Soft Delete** with restore capability (Admin only)
- **Permanent Deletion** (Admin only)

### 👥 User Management
- **Complete User CRUD** (Admin only)
- **User Role Management** (Admin only)
- **Soft Delete Users** with restore option
- **View Deleted Users** (Admin dashboard)

### 🛡️ Security Features
- **Helmet.js** for secure HTTP headers
- **Rate Limiting** on all endpoints
- **Enhanced Rate Limiting** for authentication routes
- **CORS** configuration with credentials support
- **Password Hashing** with bcrypt
- **Input Validation** using Yup schemas
- **Request Size Limiting** (10kb JSON payload)
- **XSS Protection**
- **MongoDB Injection Prevention**

### 📧 Email System
- **HTML Email Templates** for professional communications
- **OTP Generation** using nanoid
- **Email Verification** confirmations
- **Password Reset** emails
- **Success Notifications**

## 🛠️ Tech Stack

### Core
- **[Node.js](https://nodejs.org/)** (v14+) - JavaScript runtime
- **[Express.js](https://expressjs.com/)** (v5.2.1) - Web framework
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** (v9.1.1) - MongoDB ODM

### Authentication & Security
- **[JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)** (v9.0.3) - Authentication tokens
- **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)** (v5.1.1) - Password hashing
- **[Helmet](https://helmetjs.github.io/)** (v8.1.0) - Security headers
- **[CORS](https://github.com/expressjs/cors)** (v2.8.5) - Cross-origin resource sharing
- **[express-rate-limit](https://github.com/nfriedly/express-rate-limit)** (v8.2.1) - Rate limiting
- **[cookie-parser](https://github.com/expressjs/cookie-parser)** (v1.4.7) - Cookie handling

### File Upload & Cloud Storage
- **[Multer](https://github.com/expressjs/multer)** (v2.0.2) - File upload handling
- **[Cloudinary](https://cloudinary.com/)** (v2.9.0) - Cloud image storage and management

### Email & Validation
- **[Nodemailer](https://nodemailer.com/)** (v7.0.12) - Email sending
- **[Yup](https://github.com/jquense/yup)** (v1.7.1) - Schema validation
- **[nanoid](https://github.com/ai/nanoid)** (v5.1.6) - Secure unique ID generation

### Development & Utilities
- **[dotenv](https://github.com/motdotla/dotenv)** (v17.2.3) - Environment variables
- **[Morgan](https://github.com/expressjs/morgan)** (v1.10.1) - HTTP request logger
- **[Nodemon](https://nodemon.io/)** (v3.1.11) - Auto-restart on file changes
- **[Chalk](https://github.com/chalk/chalk)** (v4.1.2) - Terminal styling

## 📁 Project Structure

```
ecommerce-api/
│
├── config/
│   ├── dbConnect.js              # MongoDB connection configuration
│   └── cloudinary.js             # Cloudinary setup
│
├── controllers/
│   ├── authController.js         # Authentication logic (signup, login, reset)
│   ├── userController.js         # User management operations
│   ├── productsController.js     # Product CRUD operations
│   └── adminController.js        # Admin-specific operations
│
├── middleware/
│   ├── auth.js                   # JWT verification & protection
│   ├── restrictTo.js             # Role-based authorization
│   ├── validator.js              # Yup validation middleware
│   ├── multer.js                 # File upload configuration
│   └── globalError.js            # Centralized error handler
│
├── models/
│   ├── userModel.js              # User schema & methods
│   └── productModel.js           # Product schema & methods
│
├── routes/
│   ├── authRoutes.js             # Authentication endpoints
│   ├── userRoutes.js             # User management endpoints
│   ├── productRoutes.js          # Product endpoints
│   └── adminRouter.js            # Admin dashboard endpoints
│
├── utils/
│   ├── apiFeatures.js            # Query builder class (filter, search, sort, paginate)
│   ├── asyncCatch.js             # Async error wrapper
│   ├── classError.js             # Custom error class
│   ├── email.js                  # Email sending utility
│   ├── emailHTML.js              # HTML email templates
│   └── uploadToCloudinary.js     # Cloudinary upload helper
│
├── validators/
│   ├── login.js                  # Login validation schema
│   └── register.js               # Registration validation schema
│
├── .env                          # Environment variables
├── .gitignore                    # Git ignore rules
├── app.js                        # Express app configuration
├── server.js                     # Server entry point
├── package.json                  # Dependencies & scripts
└── README.md                     # Project documentation
```

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas account** or local MongoDB installation
- **Cloudinary account** (for image uploads) - [Sign up](https://cloudinary.com/)
- **Email service credentials** (Gmail recommended)

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecommerce-api.git
cd ecommerce-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
# Create .env file in the root directory
touch .env
```

4. **Configure environment variables** (see [Environment Variables](#-environment-variables))

5. **Start MongoDB**
- If using MongoDB Atlas, ensure your connection string is correct
- If using local MongoDB:
```bash
# macOS/Linux
sudo systemctl start mongodb

# Windows
net start MongoDB
```

6. **Run the application**
```bash
npm start
```

The API will be available at `http://localhost:5000`

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database Configuration
# MongoDB Atlas (recommended)
DATABASE=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# Or Local MongoDB
# DATABASE=mongodb://localhost:27017/ecommerce

# JWT Configuration
SECRET_KEY=your-super-secret-jwt-key-minimum-32-characters-long
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

# Password Hashing
SALT_ROUND=10

# Client Configuration (Frontend URL)
CLIENT_URL=http://localhost:4200

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email Configuration (Gmail Example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_MAIL=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password

# Rate Limiting
RATE_LIMIT_WINDOW_MS=600000
RATE_LIMIT_MAX_REQUESTS=100
AUTH_RATE_LIMIT_WINDOW_MS=900000
AUTH_RATE_LIMIT_MAX=5
```

### 📝 Configuration Notes

#### Gmail Setup for Email Service:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings → Security → 2-Step Verification
   - Scroll to "App passwords"
   - Generate a new app password
   - Use this password in `EMAIL_PASSWORD`

#### MongoDB Atlas Setup:
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user
3. Whitelist your IP address (or use 0.0.0.0/0 for development)
4. Copy your connection string and replace in `DATABASE`

#### Cloudinary Setup:
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Copy your Cloud Name, API Key, and API Secret from the dashboard
3. Add them to your `.env` file

## 🚀 Running the Project

### Development Mode
```bash
npm start
```
Server runs with nodemon for automatic restarts on file changes.

### Production Mode
```bash
NODE_ENV=production node server.js
```

### Testing the API

#### Using cURL:
```bash
# Health check
curl http://localhost:5000/health

# Get all products
curl http://localhost:5000/products

# Register a new user
curl -X POST http://localhost:5000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

#### Using Postman:
Import the endpoints below or access the API directly at `http://localhost:5000`

## 🔌 API Endpoints

### 🏠 Root & Health
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/` | API information & available endpoints | Public |
| GET | `/health` | Server health check | Public |

### 🔐 Authentication Routes (`/auth`)
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/auth/signup` | Register new user | Public |
| POST | `/auth/login` | User login | Public |
| POST | `/auth/confirm-email` | Verify email with OTP | Public |
| POST | `/auth/forget-password` | Request password reset OTP | Public |
| POST | `/auth/reset-password` | Reset password with OTP | Public |

### 📦 Product Routes (`/products`)
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/products` | Get all products with filters | Public |
| POST | `/products` | Create new product | Admin |
| GET | `/products/get-status` | Get product statistics | Public |
| GET | `/products/deleted-items` | Get soft-deleted products | Admin |
| GET | `/products/user-products` | Get user's products | User |
| GET | `/products/:id` | Get single product by ID | User |
| PATCH | `/products/:id` | Soft delete product | Admin |
| DELETE | `/products/:id` | Permanently delete product | Admin |
| PATCH | `/products/edit/:id` | Update product details | Admin |

### 👥 User Routes (`/users`)
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/users` | Get all users | Admin |
| POST | `/users` | Create new user | Admin |
| GET | `/users/:id` | Get single user | Admin |
| PATCH | `/users/:id` | Soft delete user | Admin |
| DELETE | `/users/:id` | Permanently delete user | Admin |
| PATCH | `/users/edit/:id` | Update user details | Admin |
| PATCH | `/users/role/:id` | Update user role | Admin |

### 🛡️ Admin Routes (`/admin`)
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/admin/deleted-users` | View all deleted users | Admin |
| GET | `/admin/deleted-products` | View all deleted products | Admin |
| PATCH | `/admin/restore-user/:id` | Restore deleted user | Admin |
| PATCH | `/admin/restore-product/:id` | Restore deleted product | Admin |

## 🔐 Authentication Flow

### 1. User Registration
```http
POST /auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "emailConfirm": false
  }
}
```
📧 An OTP will be sent to the user's email.

### 2. Email Confirmation
```http
POST /auth/confirm-email
Content-Type: application/json

{
  "email": "john@example.com",
  "confirmOTP": "123456"
}
```

**Response:**
```json
{
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "emailConfirm": true
  }
}
```

### 3. Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 4. Using Authentication
Include the JWT token in subsequent requests:
```http
GET /products/:id
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 5. Password Reset Flow

**Step 1 - Request OTP:**
```http
POST /auth/forget-password
Content-Type: application/json

{
  "email": "john@example.com"
}
```

**Step 2 - Reset Password:**
```http
POST /auth/reset-password
Content-Type: application/json

{
  "email": "john@example.com",
  "confirmOTP": "123456",
  "newPassword": "newSecurePassword123",
  "RepeatPassword": "newSecurePassword123"
}
```

## 🎯 Advanced Query Features

The API supports sophisticated querying through URL parameters:

### 1. Filtering
```bash
# Basic filtering
GET /products?category=electronics&stock=50

# Comparison operators: gte (≥), gt (>), lte (≤), lt (<)
GET /products?price[gte]=100&price[lte]=500

# Multiple filters
GET /products?category=electronics&stock[gte]=10&price[lt]=1000
```

### 2. Text Search
```bash
# Search across name, title, and description fields
GET /products?search=laptop

# Case-insensitive partial matching
GET /products?search=wireless%20headphones
```

### 3. Sorting
```bash
# Sort ascending
GET /products?sort=price

# Sort descending (prefix with -)
GET /products?sort=-price

# Sort by multiple fields
GET /products?sort=category,-price,createdAt
```

### 4. Field Selection
```bash
# Select specific fields only
GET /products?fields=name,price,category,stock

# Exclude specific fields (prefix with -)
GET /products?fields=-description,-reviews,-__v
```

### 5. Pagination
```bash
# Specify page and limit
GET /products?page=2&limit=20

# Default values: page=1, limit=10
GET /products?page=1
```

### 6. Combined Query Example
```bash
# Complex query with all features
GET /products?category=electronics&price[gte]=100&price[lte]=1000&search=gaming&sort=-price&fields=name,price,stock&page=1&limit=15
```

This returns:
- Electronics category
- Price between $100 and $1000
- Contains "gaming" in name/title/description
- Sorted by price (highest first)
- Only name, price, and stock fields
- First page with 15 items

## 🔒 Security

### Implemented Security Measures

#### 1. Helmet.js Protection
- XSS Protection
- Content Security Policy
- DNS Prefetch Control
- Frame Options (clickjacking protection)
- IE No Open
- HTTP Strict Transport Security

#### 2. Rate Limiting
```javascript
// Global API Rate Limit
100 requests per 10 minutes per IP

// Authentication Rate Limit
5 requests per 15 minutes per IP (for /auth/login and /auth/register)
```

#### 3. Authentication Security
- **JWT Tokens**: Stateless authentication with 7-day expiration
- **Password Hashing**: bcrypt with configurable salt rounds (default: 10)
- **HTTP-only Cookies**: Secure token storage option
- **Token Verification**: Middleware protects sensitive routes

#### 4. Input Validation
- **Yup Schemas**: Validate all user inputs
- **Email Validation**: RFC-compliant email format checking
- **Password Requirements**: Minimum 6 characters (customizable)
- **Name Validation**: 6-20 characters with proper sanitization

#### 5. Database Security
- **MongoDB Injection Prevention**: Input sanitization
- **Parameterized Queries**: Using Mongoose ODM
- **Connection String Security**: Environment variables only

#### 6. CORS Configuration
```javascript
{
  origin: process.env.CLIENT_URL,  // Specific origin only
  credentials: true,                // Allow cookies
}
```

#### 7. Request Size Limiting
- JSON payload limited to 10kb
- Prevents DoS attacks via large payloads

#### 8. Soft Delete Pattern
- **Data Recovery**: Admin can restore deleted items
- **Audit Trail**: Maintains deletion history
- **GDPR Compliance**: Permanent deletion available

### Security Best Practices Implemented
✅ No sensitive data in responses (passwords, OTPs excluded)  
✅ Environment variables for all secrets  
✅ Secure OTP generation using nanoid  
✅ Email verification before account activation  
✅ Password reset requires both email and OTP  
✅ Role-based access control throughout  
✅ Error messages don't expose system internals  
✅ HTTPS ready (configure reverse proxy in production)  

## ⚠️ Error Handling

### Error Response Format
All errors follow a consistent structure:

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error description",
  "isOperational": true
}
```

### HTTP Status Codes
| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (Invalid input, validation errors) |
| 401 | Unauthorized (Invalid/missing token, unconfirmed email) |
| 403 | Forbidden (Insufficient permissions) |
| 404 | Not Found (Resource doesn't exist) |
| 429 | Too Many Requests (Rate limit exceeded) |
| 500 | Internal Server Error |

### Common Error Scenarios

#### Invalid Credentials
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Invalid Credential"
}
```

#### Email Not Confirmed
```json
{
  "success": false,
  "statusCode": 401,
  "message": "please confirm your email first!"
}
```

#### Invalid OTP
```json
{
  "success": false,
  "statusCode": 400,
  "message": "OTP is invalid please try again!"
}
```

#### Rate Limit Exceeded
```json
{
  "success": false,
  "statusCode": 429,
  "message": "Too many authentication attempts, please try again later"
}
```

### Error Handling Architecture
- **Custom Error Class**: `AppError` for operational errors
- **Async Wrapper**: `asyncCatch` eliminates repetitive try-catch blocks
- **Global Error Handler**: Centralized error processing and formatting
- **Validation Errors**: Detailed Yup validation messages
- **MongoDB Errors**: Handled cast errors, duplicate keys, validation errors

## 🧪 Testing

### Manual Testing with cURL

**Create Product (requires admin token):**
```bash
curl -X POST http://localhost:5000/products \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -H "Content-Type: multipart/form-data" \
  -F "name=Gaming Laptop" \
  -F "price=1299.99" \
  -F "category=electronics" \
  -F "stock=25" \
  -F "description=High-performance gaming laptop" \
  -F "image=@/path/to/image.jpg"
```

**Get Products with Filters:**
```bash
curl "http://localhost:5000/products?category=electronics&price[gte]=500&sort=-price&limit=10"
```

**Search Products:**
```bash
curl "http://localhost:5000/products?search=laptop&fields=name,price,stock"
```

### Using Postman

1. Import the API endpoints
2. Set up an environment with:
   - `base_url`: `http://localhost:5000`
   - `token`: (will be set after login)
3. Test the authentication flow
4. Use the token in Authorization header for protected routes

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Express.js community
- MongoDB team
- All open-source contributors

## 📞 Support

For support or questions:
- Open an issue on GitHub
- Email: support@example.com

---

## 🚀 Deployment

### Deploy to Heroku

```bash
# Install Heroku CLI
heroku login

# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set DATABASE=your-mongodb-atlas-uri
heroku config:set SECRET_KEY=your-secret-key
# ... set all other environment variables

# Deploy
git push heroku main

# Open your app
heroku open
```

### Deploy to Railway

1. Connect your GitHub repository
2. Add environment variables in Railway dashboard
3. Deploy automatically on push

### Deploy to Render

1. Create new Web Service
2. Connect your repository
3. Set environment variables
4. Deploy

---

**⭐ If you found this project helpful, please give it a star!**
