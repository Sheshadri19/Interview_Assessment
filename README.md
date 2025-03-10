# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)









## Structure of Components

The system has easy deployment and maintenance because it has a highly complex architecture. App points are as follows;

- *App.js:* Root component that controls the routing, applying layout, and wrapping up the application on sections such as authentication and error handling.

- *Navbar.js:* Displays new navbar and Animation of other graphs such as pie chart and transiting table.

- *Home.js:* Shows the application landing page and options and tasks to be executed.


- *RichTextEditor.js:* This enables us to add more text fields, style the text according to need and store it on local drives.



- *Count.js:* It shows a simple counter feature with options to increment, decrement or reset the count and apply some modifications.


- *UserForm.js:* Receives information from the users in a formatted way and stores data in permanent local storage.


- *Dashboard.js:* Displays a user information dashboard, a table, and a chart to parse activity data retrieved from firebase.


- *Auth.js:* User authentication through firebase.

- *PrivateRoute.js:* Limits users from modifying the playlist without login, and redirects unauthenticated users to login page.


- *AuthProvider.js:* An auth provider context used to control access to user data wherever required in the application.


## State government

The project employs a mix of state government methods:

* **Component State (`useState`):** To store local state within individual components (e.g. Shared, Home).


* **Context API (`AuthProvider`):** Controls the overall authentication scheme and provides user 
information to all components.

* **Local Storage:** Stores usage data for RichTextEditor and UserForm across sessions.

* **Firebase:** Controls authentication and storage of data from the Auth and Dashboard components.

## Libraries and Tools

The project is founded on the following libraries:

* **Material UI:** for styling and designing user interface components.

* **Reactive Router DOM:** for routing and navigation.

* **Reaction Spring:** for efficient and quick animations.

* **React Quill:** for the correct text editor functionality.

* **Chart.js and React Chartjs 2:** to develop interactive charts and charts.

* **Firebase:** for data storage and authentication.

* **React Toast:** to show push notifications.



## Highlights

* **Component-based architecture:** encourages code reuse and maintainability.
* **Effective Governance:** Multiple methods are employed to address the various needs of the state.
* **Utilize popular libraries:** Utilize popular libraries to enhance functionality.
* **Smooth animations:** enhance the user experience.
* **Data Persistence:** Store data persistently between sessions.





<!-- Complete Explanation Documents  -->

# Project Name: Feature-Rich React App

This is a comprehensive React-based application integrating Firebase Authentication, a Rich Text Editor, Dynamic Counter, User Form, and Analytics Dashboard. The app utilizes modern libraries and tools for smooth animations, dynamic content, and user interaction insights.

## Key Features:
- **Firebase Authentication**: Secure user sign-up, login, and logout.
- **Rich Text Editor**: Real-time text editing with formatting options (using React Quill).
- **Dynamic Counter**: A counter that changes text color on increment and fades the background color on decrement.
- **User Form**: Collects and stores user information in local storage.
- **Analytics Dashboard**: Displays a user activity dashboard with charts and tables.
- **Private Routes**: Limits access to certain features for authenticated users only.

## Technologies Used:
- **Frontend**:
  - React.js
  - Material UI (for UI components)
  - React Router (for routing and navigation)
  - React Spring (for animations)
  - React Quill (for text editor functionality)
  - Chart.js / React Chartjs 2 (for interactive charts)
  - React Toast (for notifications)

- **Backend**:
  - Firebase (Authentication, Firestore for data storage)

- **Development Tools**:
  - Visual Studio Code
  - Node.js
  - npm

- **Deployment**:
  - Vercel (for hosting)

## Installation Instructions:

Follow the detailed steps below to set up and run the project on your local machine.

### Prerequisites:

Before getting started, make sure that you have the following installed on your local system:
- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **Firebase account** (for setting up Firebase Authentication and Firestore for data storage)

### Step-by-Step Setup:

#### 1. Clone the Repository:
   First, you need to clone this repository to your local machine. This means you will copy all the project files to your computer.
   
   Open your terminal (Command Prompt, PowerShell, or terminal on Mac) and run the following command:

   ```bash
   git clone https://github.com/[your-username]/[repository-name].git
