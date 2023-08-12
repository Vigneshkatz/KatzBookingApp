# KatzBookingApp
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
