
# AMAZON

Amazon is a dynamic and feature-rich e-commerce website designed to provide a seamless online shopping experience. Built with a robust backend, the platform ensures high performance, security, and scalability, allowing users to browse, search, and purchase a wide range of products efficiently. 

## Features
 User Authentication & Security -
   -  A secure login and registration system to protect user data, with role-based access for customers and admins.

 Product Management -
   -  A well-structured product catalog with categories, filtering, and search functionality for easy browsing.

 Shopping Cart & Checkout -
   -  A user-friendly cart system enabling customers to add products, modify quantities, and proceed to checkout smoothly.

 Order Management - 
   -  Real-time order processing, order tracking, and order history management for both customers and admins.

 Payment Integration -
   -  Secure and seamless payment processing using multiple payment gateways.

 Admin Dashboard - 
   -  A powerful admin panel to manage users, products, orders, and transactions efficiently.

 Scalability & Performance - 
   -  Built with a strong backend to handle high traffic and transactions without compromising speed.

## Tech Stack
 - Node.js
 - Express.js
 - dotenv 
 - mongoose
 - nodemon
 - Multer
 - Cloudinary

## API EndPoints  
Users
- /api/v1/user/create
- /api/v1/user/getall
- /api/v1/user/get/:id
- /api/v1/user/delete/:id
- /api/v1/user/update/:id 

Product
- /api/v1/product/create
-	/api/v1/product/getall	
-	/api/v1/product/get/:id
- /api/v1/product/update/:id
- /api/v1/product/delete/:id
Cart 
- /api/v1/cart/add	
-	/api/v1/cart/get	
- /api/v1/cart/remove/:id

Order
- /api/v1/order/create	
-	/api/v1/order/getall	
- /api/v1/order/user	
-	/api/v1/order/:id

Payment
- /api/v1/payment/checkout





## Security consideration 
