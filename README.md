# E-Commerce Website Readme

This is  an e-commerce website built using React, React Redux, and Vite. The website consists of a home page and a cart page.

## Features

- Display a list of products on the home page
- Add products to the shopping cart
- View the shopping cart
- Remove items from the cart

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Redux: A state management library for React applications.
- Vite: A fast and minimalist build tool for modern web applications.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js: Download and install Node.js from the official website (https://nodejs.org).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mudit-Jxin7/E-commerce.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-website
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Development

To start the development server, run the following command:

```bash
npm run dev
```

The website should now be running at `http://127.0.0.1:5173/`. Any changes you make to the source code will automatically be reflected in the browser.

### Production Build

To build the production version of the website, run the following command:

```bash
npm run build
```

The optimized and minified files will be generated in the `dist` directory.

### Deployment

To deploy the website to a production server, copy the contents of the `dist` directory to your web server's public folder.

## Project Structure

Here is a brief overview of the project structure:

```
e-commerce-website/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── page/
│   │   ├── HomePage.jsx
│   │   ├── CartPage.jsx
│   │   └── ...
│   ├── store/
│   │   ├── CartSlice.jsx
│   │   └── store.jsx
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── ...
```

- The `public` directory contains the HTML template (`index.html`) and other static files.
- The `src` directory contains the source code of the website.
  - The `components` directory contains React components for the home page, cart page, and other reusable components.
  - The `store` directory contains Redux actions, reducers, and the Redux store configuration.
  - The `App.js` file is the entry point of the application.
  - The `index.js` file is responsible for rendering the root component.
- The `.gitignore` file specifies which files and directories should be ignored by Git.
- The `package.json` file lists the project dependencies and provides scripts for running the development server and building the project.

## Customization

Feel free to customize the website according to your needs. You can modify the existing components, add new components, or update the Redux store to support additional features.
