


# **React Redux JWT Authentication Example**

This project demonstrates how to use **React**, **Redux**, and **JWT (JSON Web Tokens)** to create a simple authentication system. The application includes user login, state management with Redux, route protection, and a simulated backend response using a fake JWT.

---

## **Features**
- **User Login:**
  - Validates user credentials and generates a fake JWT token.
  - Decodes the token to retrieve user details.
  - Updates authentication state in Redux.

- **Protected Routes:**
  - Ensures that only logged-in users can access the dashboard.
  - Redirects unauthenticated users to the login page.

- **Dashboard:**
  - Displays user details extracted from the decoded JWT token.
  - Allows users to log out, resetting the authentication state.

---

## **Technologies Used**
- **React**: Frontend framework for building the UI.
- **Redux**: State management library for handling global authentication state.
- **React Router**: For navigation and route management.
- **jwt-decode**: To decode JWT tokens and extract user information.

---

## **Setup Instructions**

### **1. Clone the Repository**
```
git clone https://github.com/HardikKumariscoding/COMP3123-Ex10
cd COMP3123-Ex10
```

### **2. Install Dependencies**
Run the following command in the project directory to install all required packages:
```bash
npm install
```

### **3. Run the Application**
Start the development server:
```bash
npm start
```

### **4. Access the Application**
Open your browser and navigate to:
```
http://localhost:3000
```

---

## **Usage**

### **Login**
- Enter the following credentials on the login page:
  - **Username**: `user`
  - **Password**: `password`
- Upon successful login, you will be redirected to the dashboard.

### **Dashboard**
- The dashboard displays user details (name and email) decoded from the JWT token.
- Click the **Logout** button to log out and return to the login page.



---

## **Core Concepts**

### **Redux**
- **State**: Stores user authentication details (`isAuthenticated`, `token`, `user`).
- **Actions**: 
  - `login`: Updates the state when a user logs in.
  - `logout`: Resets the state when a user logs out.
- **Reducer**: Handles authentication-related state changes.
- **Store**: Configures Redux to manage the app's global state.

### **JWT (JSON Web Token)**
- A fake JWT token is generated upon login.
- Decoded using `jwt-decode` to extract user details (name, email).

### **Protected Routes**
- `ProtectedRoute` ensures that only authenticated users can access the dashboard. If not authenticated, users are redirected to the login page.



## **Screenshots**


### **Login Page**
![Login Page](./assets/Login-demo.png)  
*The login page where users can enter their credentials.*

### **Dashboard**
![Dashboard](./assets/Dashboard-demo.png)  
*The dashboard displays user details after successful login.*


