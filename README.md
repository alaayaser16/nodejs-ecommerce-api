# E-commerce REST API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=JSON%20web%20tokens&logoColor=white)

A robust and secure RESTful API for an e-commerce platform built with Node.js, Express.js, and MongoDB. Features complete authentication, role-based authorization, product management, and advanced query capabilities.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Authentication & Authorization](#-authentication--authorization)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [API Features](#-api-features)
- [Security](#-security)
- [Error Handling](#-error-handling)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

## ✨ Features

### Authentication & User Management
- 🔐 User registration with email confirmation
- 🔑 Secure login with JWT tokens
- 📧 Password reset via email
- 👤 Role-based access control (Admin/User)
- 🗑️ Soft delete for users with restore capability

### Product Management
- 📦 Full CRUD operations for products
- 🖼️ Image upload integration with Cloudinary
- 🔍 Advanced search and filtering
- 📊 Pagination and field selection
- 🗂️ Soft delete with admin restore
- 👁️ Public product viewing for authenticated users

### Admin Features
- 👨‍💼 Complete user management dashboard
- 📋 View and restore deleted users
- 🛒 View and restore deleted products
- 🔧 Update user roles
- 🗑️ Permanent deletion capabilities

### Advanced Query Features
- 🔎 Text search across multiple fields
- 🎯 Advanced filtering with comparison operators
- ⬆️⬇️ Multi-field sorting
- 📄 Pagination with customizable limits
- 🎭 Field selection (choose which fields to return)

## 🛠️ Tech Stack

### Core
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### Authentication & Security
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcrypt** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **express-rate-limit** - Rate limiting middleware
- **cookie-parser** - Cookie parsing

### File Upload & Email
- **Multer** - Multipart/form-data handling
- **Cloudinary** - Cloud image storage
- **Nodemailer** - Email service

### Validation & Utilities
- **Yup** - Schema validation
- **dotenv** - Environment variable management
- **Morgan** - HTTP request logger
- **nanoid** - Unique ID generation

## 📁 Project Structure

```
ecommerce-api/
│
├── config/
│   ├── dbConnect.js              # MongoDB connection
│   └── cloudinary.js             # Cloudinary configuration
│
├── controllers/
│   ├── authController.js         # Authentication logic
│   ├── userController.js         # User management
│   ├── productsController.js     # Product operations
│   └── adminController.js        # Admin operations
│
├── middleware/
│   ├── auth.js                   # JWT verification
│   ├── restrictTo.js             # Role-based authorization
│   ├── validator.js              # Yup validation middleware
│   ├── multer.js                 # File upload configuration
│   └── globalError.js            # Global error handler
│
├── models/
│   ├── userModel.js              # User schema
│   └── productModel.js           # Product schema
│
├── routes/
│   ├── authRoutes.js             # Auth endpoints
│   ├── userRoutes.js             # User endpoints
│   ├── productRoutes.js          # Product endpoints
│   └── adminRouter.js            # Admin endpoints
│
├── utils/
│   ├── apiFeatures.js            # Query builder class
│   ├── asyncCatch.js             # Async error wrapper
│   ├── classError.js             # Custom error class
│   ├── email.js                  # Email utility
│   ├── emailHTML.js              # Email templates
│   └── uploadToCloudinary.js     # Cloudinary upload helper
│
├── validators/
│   ├── login.js                  # Login validation schema
│   └── register.js               # Registration validation schema
│
├── .gitignore
├── app.js                        # Express app configuration
├── server.js                     # Server entry point
├── package.json
└── config.env                    # Environment variables
```

## 🔌 API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/auth/signup` | Register new user | Public |
| POST | `/auth/login` | User login | Public |
| POST | `/auth/confirm-email` | Confirm email address | Public |
| POST | `/auth/forget-password` | Request password reset | Public |
| POST | `/auth/reset-password` | Reset password with token | Public |

### Product Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/products` | Get all products | Public |
| POST | `/products` | Create new product | Admin |
| GET | `/products/get-status` | Get product statistics | Public |
| GET | `/products/deleted-items` | Get soft-deleted products | Admin |
| GET | `/products/user-products` | Get products for logged user | User |
| GET | `/products/:id` | Get single product | User |
| PATCH | `/products/:id` | Soft delete product | Admin |
| DELETE | `/products/:id` | Permanently delete product | Admin |
| PATCH | `/products/edit/:id` | Update product | Admin |

### User Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/users` | Get all users | Admin |
| POST | `/users` | Create new user | Admin |
| GET | `/users/:id` | Get single user | Admin |
| PATCH | `/users/:id` | Soft delete user | Admin |
| DELETE | `/users/:id` | Permanently delete user | Admin |
| PATCH | `/users/edit/:id` | Update user | Admin |
| PATCH | `/users/role/:id` | Update user role | Admin |

### Admin Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/admin/deleted-users` | Get all deleted users | Admin |
| GET | `/admin/deleted-products` | Get all deleted products | Admin |
| PATCH | `/admin/restore-user/:id` | Restore deleted user | Admin |
| PATCH | `/admin/restore-product/:id` | Restore deleted product | Admin |

## 🔐 Authentication & Authorization

### Authentication Flow
1. User registers via `/auth/signup`
2. Confirmation email sent with verification code
3. User confirms email via `/auth/confirm-email`
4. User logs in via `/auth/login` and receives JWT token
5. Token sent in Authorization header: `Bearer <token>`

### Role-Based Access Control
- **Public Routes**: Product listing, authentication endpoints
- **User Routes**: View product details, personal product access
- **Admin Routes**: Full CRUD on users and products, restore deleted items

### JWT Token Structure
```javascript
{
  userId: "user_id",
  role: "admin" | "user",
  iat: timestamp,
  exp: timestamp
}
```

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn
- Cloudinary account (for image uploads)
- Email service credentials (Gmail/SendGrid/Mailtrap)

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecommerce-api.git
cd ecommerce-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp config.env.example config.env
```
Edit `config.env` with your actual credentials (see [Environment Variables](#-environment-variables))

4. **Ensure MongoDB is running**
```bash
# For local MongoDB
sudo systemctl start mongodb

# Or use MongoDB Atlas connection string in config.env
```

5. **Start the server**
```bash
npm start
```

The API will be available at `http://localhost:5000`

## 🔑 Environment Variables

Create a `config.env` file in the root directory:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce
# Or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

# Client URL (Frontend)
CLIENT_URL=http://localhost:4200

# Cloudinary (Image Upload)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email Configuration (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_MAIL=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Rate Limiting
RATE_LIMIT_WINDOW_MS=600000
RATE_LIMIT_MAX_REQUESTS=100
AUTH_RATE_LIMIT_WINDOW_MS=900000
AUTH_RATE_LIMIT_MAX=5
```

### Email Provider Options
- **Gmail**: Use app-specific password (enable 2FA first)
- **SendGrid**: Use API key as password
- **Mailtrap**: For testing emails in development

## 🚀 Running the Project

### Development Mode
```bash
npm start
```
Server runs with nodemon (auto-restart on file changes)

### Production Mode
```bash
NODE_ENV=production node server.js
```

### Testing Endpoints
```bash
# Health check
curl http://localhost:5000/health

# Get all products
curl http://localhost:5000/products

# Register user
curl -X POST http://localhost:5000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

## 🎯 API Features

### Advanced Querying

The API supports sophisticated query operations through URL parameters:

#### 1. Filtering
```bash
# Basic filtering
GET /products?category=electronics&stock[gte]=10

# Comparison operators: gte, gt, lte, lt
GET /products?price[gte]=100&price[lte]=500
```

#### 2. Searching
```bash
# Search across name, title, and description fields
GET /products?search=laptop

# Case-insensitive partial matching
GET /products?search=phone
```

#### 3. Sorting
```bash
# Sort by single field (ascending)
GET /products?sort=price

# Sort descending (prefix with -)
GET /products?sort=-createdAt

# Sort by multiple fields
GET /products?sort=category,-price
```

#### 4. Field Selection
```bash
# Select specific fields
GET /products?fields=name,price,category

# Exclude fields (default excludes: isDeleted, __v)
GET /products?fields=-description,-reviews
```

#### 5. Pagination
```bash
# Custom page and limit
GET /products?page=2&limit=20

# Default: page=1, limit=10
GET /products?page=1
```

#### Combined Example
```bash
GET /products?category=electronics&price[gte]=100&search=laptop&sort=-price&fields=name,price,stock&page=1&limit=10
```

### Request/Response Examples

#### Register User
**Request:**
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
  "message": "User registered successfully. Please check your email to confirm.",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    }
  }
}
```

#### Create Product (Admin)
**Request:**
```http
POST /products
Authorization: Bearer <admin_token>
Content-Type: multipart/form-data

{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "category": "electronics",
  "stock": 50,
  "image": <file>
}
```

**Response:**
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "product": {
      "id": "507f1f77bcf86cd799439012",
      "name": "Laptop",
      "price": 999.99,
      "imageUrl": "https://res.cloudinary.com/...",
      "stock": 50,
      "createdAt": "2024-02-14T10:30:00.000Z"
    }
  }
}
```

## 🔒 Security

### Implemented Security Measures

1. **Helmet.js**
   - Sets secure HTTP headers
   - XSS protection
   - Content Security Policy
   - Frame options

2. **Rate Limiting**
   - Global API limit: 100 requests/10 minutes
   - Auth endpoints: 5 requests/15 minutes
   - Prevents brute force attacks

3. **Authentication**
   - JWT-based stateless authentication
   - HTTP-only cookies support
   - Token expiration handling

4. **Password Security**
   - bcrypt hashing with salt rounds
   - Minimum password length validation
   - No plain-text storage

5. **Input Validation**
   - Yup schema validation on all inputs
   - Prevents injection attacks
   - Type checking and sanitization

6. **CORS Configuration**
   - Restricted to specified origins
   - Credentials support enabled
   - Prevents unauthorized access

7. **Request Size Limiting**
   - JSON payload limited to 10kb
   - Prevents DoS attacks

8. **Soft Delete Pattern**
   - Data recovery capability
   - Audit trail maintenance
   - Admin-only permanent deletion

## ⚠️ Error Handling

### Error Response Format
```json
{
  "success": false,
  "message": "Error description",
  "statusCode": 400,
  "error": {
    "details": "Detailed error information"
  }
}
```

### HTTP Status Codes
- **200**: Success
- **201**: Created
- **400**: Bad Request (Invalid input)
- **401**: Unauthorized (Invalid/missing token)
- **403**: Forbidden (Insufficient permissions)
- **404**: Not Found
- **429**: Too Many Requests (Rate limit exceeded)
- **500**: Internal Server Error

### Error Handling Strategy
- **Custom Error Class**: `AppError` for operational errors
- **Async Wrapper**: `asyncCatch` prevents try-catch repetition
- **Global Error Handler**: Centralized error processing
- **Validation Errors**: Yup schema validation with detailed messages
- **MongoDB Errors**: Cast errors, duplicate key errors handled

## 📈 Future Improvements

### Planned Features
- [ ] Order management system
- [ ] Shopping cart functionality
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Real-time notifications with WebSockets
- [ ] Advanced analytics dashboard
- [ ] Product categories with hierarchical structure
- [ ] Inventory management
- [ ] Multi-language support

### Technical Enhancements
- [ ] API documentation with Swagger/OpenAPI
- [ ] Unit and integration tests (Jest/Mocha)
- [ ] Caching layer with Redis
- [ ] Microservices architecture
- [ ] GraphQL API endpoint
- [ ] Docker containerization
- [ ] CI/CD pipeline setup
- [ ] Logging with Winston
- [ ] Performance monitoring

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support or questions:
- Open an issue on GitHub
- Email: support@example.com

---

**⭐ If you find this project useful, please consider giving it a star!**



