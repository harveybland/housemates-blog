### Task Overview

Your challenge is to develop a small blog application leveraging React, TypeScript, and Next.js. The application will be built on top of [fake rest api](https://jsonplaceholder.typicode.com/).

#### 1. Application Setup

- Use **Next.js** for the initial project setup.
- Ensure the application is fully typed using **TypeScript**.

#### 2. Application Features

- The landing page will have a list of posts
- user should be able to click on the post and taken to the post detail page.
- Each post page should list comments and show author info.
- **State Management:** Demonstrate the use of state management within the application. This can be through React's Context API, Redux, or any other state management library compatible with React.

### 3. User Interface

- The UI should be clean and user-friendly.
- You are free to use any UI library or design your components from scratch.

### 4. Documentation

- Provide a **README.md** file with:
  - Instructions on how to run the application locally.
  - A brief explanation of the application architecture and your choice of state management.
  - Any other notes or assumptions you made during development.

### 5. Bonus (Optional)

- Implementing unit tests.
- Adding features like pagination, filtering, or sorting (if applicable).
- Deploying the application to a cloud service (e.g., Vercel, Netlify).

## Submission

- Fork this repository.
- Create a new branch for your work.
- Push your code to your branch.
- Once complete, submit a pull request to the original repository for review.

######

## Instructions for Running Locally

- Install dependencies: pnpm install

## Run the Application

- Start the development server: pnpm run dev
- Open your web browser and visit http://localhost:3000

## Application Architecture and State Management

### Architecture

- The application follows a [insert architecture pattern] architecture pattern.
- Components are organized in the src/components directory.
- Vitest with React Testing Library for unit testing.
- Styles are managed using Tailwind and SASS
- React icons to

## State Management

- Comtext API to implement dark mode

## Acknowledgments

- How to use Context API to create dark mode https://dev.to/clickpesa/react-manage-state-using-context-api-with-usestate-or-usereducer-hooks-d5l
- Dark Mode Colour Scheme https://m2.material.io/design/color/dark-theme.html#properties

## Improvements

- Optimize the client side API
- Add pagination
- Add a user tooltip on the post
