# 🛒 E-Commerce React Application

A modern, fully responsive e-commerce platform built with React.js. Features include product browsing, a complete shopping cart with a checkout system, user authentication (Login/Register), user profiles, a blog section, and a contact form.

🔗 **Live Demo:** [https://e-commeerccy.netlify.app/](https://e-commeerccy.netlify.app/)

## ✨ Features

- **User Authentication:** Complete login, register, and profile management flow.
- **Shopping Cart & Checkout:** Add/remove items, adjust quantities, view subtotal, and a premium checkout modal with payment method selection (Credit Card, PayPal, Cash).
- **Product Catalog:** Fetching and displaying products dynamically using the FakeStoreAPI.
- **Responsive Design:** Fully responsive layout that provides a seamless experience across mobile, tablet, and desktop devices.
- **Premium UI/UX:** Glassmorphism effects, smooth slide-up animations, and a cohesive, modern color palette.
- **Blog Section:** A dedicated blog page to stay updated with the latest news, articles, and fashion trends.
- **Contact Form:** Interactive contact/suggestion form to get in touch.

## 🛠️ Technologies Used

- **Frontend Framework:** React.js
- **Routing:** React Router DOM
- **Styling:** CSS Modules (Vanilla CSS for maximum control)
- **Icons:** React Icons (`react-icons/fi`, `react-icons/fa`)
- **HTTP Client:** Axios
- **API:** [FakeStoreAPI](https://fakestoreapi.com/) for mock product data

## 🚀 Getting Started

Follow these step-by-step instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You will also need `npm` (which comes with Node.js).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fayzm1102004-creator/E_Commercy.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd E_Commercy/store-online-main
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

### Running the Project Locally

To start the development server, run the following command:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload automatically if you make edits.

## 📦 Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## 🌐 Deployment (Netlify)

This project is configured and ready for easy deployment on **Netlify**. It includes a `public/_redirects` file to perfectly handle React Router client-side routing.

To deploy your own version on Netlify:
1. Connect your GitHub repository to your Netlify account.
2. Under **Build settings**, set the **Base directory** to `store-online-main`.
3. Set the **Build command** to `npm run build`.
4. Set the **Publish directory** to `store-online-main/build`.
5. Click **Deploy site**.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.
