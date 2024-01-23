## Instructions for Running Locally

- Install dependencies: pnpm install

## Run the Application

- Start the development server: pnpm run dev
- Open your web browser and visit http://localhost:3000

## Application Architecture and State Management

### Architecture

- The application is built using the Next.js framework with React and TypeScript. The components are organized within the src/components directory, following a component-based architecture pattern. This structure promotes maintainability and scalability as the project grows.

### Testing

- Vitest is used in combination with React Testing Library for unit testing.
- To test the components: pnpm run test

### Styling

- Styles are managed using Tailwind and SASS

### State Management

- The application uses the Context API for state management for implementing dark mode. The Context API is a lightweight and straightforward solution for managing state within a React application.
- It eliminates the need for prop drilling, allowing components to access state directly without passing it down through multiple layers
- The Context API provides a simpler and more straightforward solution for state management without the need for additional libraries or boilerplate code.

### Vercel

- Deployed the application to Vercel: https://housemates-blog.vercel.app/

## Acknowledgments

- A great tutorial on using the Context API for state management: https://dev.to/clickpesa/react-manage-state-using-context-api-with-usestate-or-usereducer-hooks-d5l
- Dark Mode Colour Scheme https://m2.material.io/design/color/dark-theme.html#properties

## Improvements / Added Notes

- Optimize the client-side API
- Implement pagination
- Add a user tooltip on the post
