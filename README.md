# Svelte Blog App

Welcome to the Svelte Blog App! This is a simple Svelte application that fetches and displays blog posts from an external API. You can also filter the posts by their titles.

## Technology Stack

- Svelte: A modern JavaScript framework for building user interfaces.
- HTML/CSS: Used for structuring and styling the application.
- TypeScript: Adds static typing to JavaScript for enhanced code quality.
- Vite: A fast build tool that powers this Svelte project.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/svelte-blog-app.git

Navigate to the project folder:

cd SVELTE-APP-API

Install the project dependencies:

Running the Application
To run the Svelte Blog App locally, follow these steps:

Start the development server:

yarn install

Usage
Use the input field at the top to filter blog posts by their titles. As you type, the list of displayed posts will update dynamically.

Click on a blog post title to expand or collapse the post's content.

Use the "Previous" and "Next" buttons at the bottom to navigate between pages of blog posts.

Project Structure
The main application code is located in the src directory.

src/routes/+page.svelte contains the main component for displaying blog posts and handling user interactions and fetches data from an external API and displays it in a paginated list.

The filter functionality allows you to search for specific blog posts by title.

The project uses TypeScript for type checking and enhanced code quality

Deployed on netlify

https://blogpostsapi.netlify.app/
