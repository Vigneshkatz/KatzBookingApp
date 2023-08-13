# KatzBookingApp
## Version 01
### Frontend (Angular):
- Create an Angular component to display a list of movies.
- Use HttpClient to make a GET request to a Spring Boot API endpoint.
- Display the list of movies on the webpage.

### Backend (Spring Boot):
- Create a Spring Boot controller for GET requests to retrieve movie data.
- Use an in-memory data structure (e.g., List) to store movie information.
- Return mock movie data from the controller.
![Version - 1](https://raw.githubusercontent.com/Vigneshkatz/KatzBookingApp/main/05-ProjectImages/Version-1.png)

## Version 02 Movie Details and Showtimes

### Frontend:
- Create a movie details component to display more information about a selected movie.
- Enhance the movie listing component to allow users to click on a movie.
- Integrate showtimes information into the movie details.

### Backend:
- Enhance the movie data model to include showtimes.
- Modify the API endpoint to send movie details and showtimes data.
### Updation
- Pagination support in using PagingAndSortingRepository

## TypeScript Note
TypeScript
- Feature
- Strong  typing
- OOS
- Compile time errors
- Transpiles to js

### Datatype
- Enums
- Number
- Boolean
- Any
- String
- number[]
- any[]
Const ColorRed = 0;
Const ColorBlue = 1;
Const ColorGreen = 2;
Enum Color{Red = 0,Blue = 1,Green = 2}; // automatically set to the index value
Let backgroundColor = Color.Red;

### Type Assertion
- Does not change restructuring at runtime
- Just to access intelligence
Let message =“abc” // string
Let message;// type = any
Message = “abc”
Let s = <String> Message.endsWith(‘c’);
Let s = (Message as string).endsWith(‘c’);

Arrow function

### Custom types
- Encapsulation
- Inline annotation
- 
Interface Point{
X:number,
Y:number
}
### Others
- Cohesion
- Modules
- Modularity


## Design Reference
-  https://www.behance.net/gallery/55063489/Movie-Ticket-Booking-App-Prototype
-  https://medium.com/@mukulchawla/ui-ux-design-process-for-a-fictitious-movie-booking-app-for-flickbay-363778486515

## Changes
#### Using Dummy Database [Todo]
#### SOAP UI
#### hibrante config
