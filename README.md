# SBA 6: E-Commerce Product Management System

## Reflection

Working on this project was a great chance to dive deep into TypeScript and solidify my grasp on object-oriented programming. I kicked things off by building a `Product` class to neatly bundle all product-related info and behavior. This approach made it easier to think of each product as its own little world, with clear properties and handy methods. Using TypeScript’s typing system gave me peace of mind — catching potential mistakes before they even ran and making the data flow super transparent.

One of the trickier parts was figuring out how to keep the code organized. At first, everything was lumped into one big file, which quickly turned chaotic. Breaking the project down into focused modules—like separating product models, pricing logic, API calls, and error handling—helped the code feel much more manageable and way easier to tweak or debug later.

Handling async stuff was another important learning curve. I leaned on `async/await` when fetching product data from the DummyJSON API, which made the asynchronous flow feel more straightforward. To keep things robust, I crafted a custom error class, `AppSystemError`, that lets the app respond differently to expected issues versus unexpected ones. Wrapping my fetch calls inside try/catch blocks meant the app wouldn’t just crash if something went wrong with the API.

All in all, this project was a solid step forward in writing modular, scalable TypeScript code. It reinforced how to blend asynchronous programming with OOP concepts, and how small, purpose-driven modules can come together into a clean, working system. I’m excited to build on this foundation in future projects.