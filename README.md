# A Simple Example of Authentication with AngularJS using  Firebase Authentication
This is a simple example of how to authenticate with AngularJS using Firebase Authentication. This example uses the email and password authentication method.

## Authentication Methods

- Email and Password: This is the method used in this example. the user provides an email and password to sign in.

- Google: The user signs in with a Google account.
- GitHub: The user signs in with a GitHub account.
- Register: The user creates an account with an email and password.

## How to Run the Application

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the application.
4. Open the browser and navigate to `http://localhost:3000`.

## Technologies Used

- AngularJS
- Firebase Authentication
- Tailwind CSS

## Screenshots

### Sign In Page
![img_1.png](src/assets/img_1.png)

### Register Page

![img_2.png](src/assets/img_2.png)

### Dashboard Page

![img_3.png](src/assets/img_3.png)

### Storage Page

![img_4.png](src/assets/img_4.png)

### Profile Page

- google account
![img_5.png](src/assets/img_5.png)

- github account

![img_6.png](src/assets/img_6.png)

- email and password account

![img_7.png](src/assets/img_7.png)


```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO1JxbCSZE4YZA2YphF4HjJzhJX-X-N0Q",
  authDomain: "clase-1-angular-auth.firebaseapp.com",
  projectId: "clase-1-angular-auth",
  storageBucket: "clase-1-angular-auth.appspot.com",
  messagingSenderId: "270409596632",
  appId: "1:270409596632:web:a9d42e8b95dc7e940b21ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```


- fake password
  z2g@348xF5Bi$s
  $V#uo^!YEa!wv2
  @T4obBRdD*SU3t

