# 🍔 CraveNow - Food Delivery App

A modern, full-stack food delivery application built with React.js and Node.js, featuring a beautiful UI and complete authentication system.

## ✨ Features

### 🎨 **Modern & Beautiful UI**
- Responsive design that works on all devices
- Modern glassmorphism effects and smooth animations
- Beautiful gradient colors and hover effects
- Clean, intuitive user interface

### 🔐 **Authentication System**
- User registration and login functionality
- JWT token-based authentication
- Secure password hashing with bcrypt
- Protected routes and user sessions

### 🛒 **Shopping Features**
- Browse food items with search and filtering
- Add items to cart with quantity management
- Real-time cart updates and calculations
- Complete checkout process

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interface
- Fast loading times

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CraveNow
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Start the development servers**
   ```bash
   npm run dev:full
   ```

This will start both the frontend (React) and backend (Node.js) servers simultaneously.

## 📁 Project Structure

```
CraveNow/
├── client/                 # React Frontend
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Images and data
│   │   └── ...
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
├── server/                # Node.js Backend
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── index.js          # Server entry point
│   └── package.json      # Backend dependencies
└── package.json          # Root package.json
```

## 🛠️ Available Scripts

### Root Level
- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run server` - Start backend server
- `npm run server:dev` - Start backend with nodemon
- `npm run dev:full` - Start both frontend and backend
- `npm run install:all` - Install dependencies for all packages

### Client (Frontend)
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server (Backend)
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🌐 API Endpoints

### Authentication
- `POST /api/signup` - User registration
- `POST /api/login` - User login
- `GET /api/profile` - Get user profile (protected)

### Request/Response Format
```javascript
// Signup Request
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

// Login Request
{
  "email": "john@example.com",
  "password": "password123"
}

// Response
{
  "message": "Success message",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## 🎨 Design Features

### Color Scheme
- Primary: `#ff4c4c` to `#ff6b6b` (Gradient)
- Secondary: `#333` (Dark text)
- Accent: `#666` (Light text)
- Background: `#f8f9fa` (Light gray)

### Typography
- Font Family: Outfit (Google Fonts)
- Headings: Bold weights (700-800)
- Body: Regular weight (400-500)

### Components
- **Navbar**: Sticky with glassmorphism effect
- **Header**: Hero section with background image
- **Cards**: Hover effects with shadows
- **Buttons**: Gradient backgrounds with animations
- **Forms**: Clean inputs with focus states

## 📱 Mobile Responsiveness

The app is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🔧 Customization

### Adding New Food Items
Edit `client/src/assets/assets.js` to add new food items:

```javascript
export const food_list = [
  {
    id: 9,
    name: "New Food Item",
    image: food_9,
    price: 15.99,
    description: "Description here",
    category: "category_name",
    rating: 4.5
  }
];
```

### Styling
- All styles are in CSS files
- Use CSS custom properties for consistent theming
- Follow the existing design patterns

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `client/dist` folder

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy the `server` folder
3. Update frontend API URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the console for errors
2. Ensure all dependencies are installed
3. Verify the server is running
4. Check network connectivity

## 🎯 Future Enhancements

- [ ] MongoDB integration
- [ ] Payment processing
- [ ] Real-time order tracking
- [ ] Push notifications
- [ ] Admin dashboard
- [ ] Restaurant management
- [ ] Reviews and ratings
- [ ] Multiple payment methods

---

**Built with ❤️ using React.js and Node.js**
