# SBA 6: E-Commerce Product Management System

## Reflection

In this project, I focused on implementing TypeScript features alongside core object-oriented programming principles to build a product management system. I started by creating a class called `Product` that encapsulated all relevant product data. This class helped me organize each product as an object with its own properties and methods. I also used TypeScript’s type safety to define clear types and interfaces, which made it easier to avoid runtime errors and better understand how data flowed through the application.

One of the biggest challenges was structuring the project into smaller modules. Initially, everything was in one file, and it quickly became difficult to manage. I refactored the code to separate concerns: one module for the product model, another for pricing utilities, one for API interactions, and another for error handling. This made the codebase cleaner and easier to debug or update.

Handling asynchronous operations was another major part of the project. I used `async/await` when working with the DummyJSON Products API. To manage errors more effectively, I created a custom error class called `AppSystemError`, which allowed me to handle known issues differently from unexpected ones. Wrapping the fetch logic in a `try/catch` block made sure that the program wouldn’t crash if the API failed or returned unexpected data.

Overall, this project helped me improve my ability to design modular, scalable code in TypeScript. It also gave me confidence in managing asynchronous logic and applying object-oriented principles in a real-world scenario. Every module served a specific purpose, and all parts worked together through well-defined interfaces and imports.