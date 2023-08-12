![image](https://github.com/Vigneshkatz/KatzBookingApp/assets/107601806/5c90113e-1f87-44de-89cb-d35007324bf2)# KatzBookingApp
# Version 01
### Frontend (Angular):
- Create an Angular component to display a list of movies.
- Use HttpClient to make a GET request to a Spring Boot API endpoint.
- Display the list of movies on the webpage.

### Backend (Spring Boot):
- Create a Spring Boot controller for GET requests to retrieve movie data.
- Use an in-memory data structure (e.g., List) to store movie information.
- Return mock movie data from the controller.
![Version - 1](https://raw.githubusercontent.com/Vigneshkatz/KatzBookingApp/main/05-ProjectImages/Version-1.png)

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
