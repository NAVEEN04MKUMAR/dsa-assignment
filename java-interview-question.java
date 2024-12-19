

//1.why java so popular:
//  Platform Independence
// "Write Once, Run Anywhere" (WORA):
// Java programs are compiled into bytecode, which runs on any system with a Java Virtual Machine (JVM), regardless of the underlying hardware or operating system

// Reliability and Stability
// Java has been around since 1995, with consistent updates and backward compatibility.

// Versatility
// Applications Across Domains:
// Java is used in diverse fields such as:
// Web Development: Frameworks like Spring and Struts.
// Mobile Development: Android apps are primarily built using Java.
// Enterprise Software: Banking and financial systems use Java extensively.
// Big Data: Tools like Hadoop and Apache Spark are Java-based.
// Embedded Systems: Java is used in IoT devices.

// Object-Oriented Programming (OOP)
// Java's design follows OOP principles, making it easier to organize, scale, and maintain code.

// //2.what is platform independance:
// Platform independence in Java refers to its ability to write and run programs on any operating system or hardware platform without needing modification. This concept is central to Java’s design and is encapsulated in the slogan "Write Once, Run Anywhere" (WORA).

// Here’s how Java achieves platform independence:

// 1. Bytecode Compilation
// When you write Java code, it is compiled by the Java Compiler (javac) into an intermediate, platform-neutral format called bytecode.
// Bytecode is not machine code (which is hardware-specific). Instead, it is a low-level code that can be understood and executed by the Java Virtual Machine (JVM).
// 2. Role of Java Virtual Machine (JVM)
// The JVM acts as an interpreter and executor of the bytecode.
// Each platform (Windows, Linux, macOS, etc.) has its own implementation of the JVM that knows how to translate bytecode into native machine code for that specific platform.
// Since the JVM abstracts the underlying operating system and hardware, the same Java bytecode can run on any platform with a compatible JVM.
// 3. No Recompilation Required
// Unlike traditional languages like C or C++, which require platform-specific compilers to generate machine code for each target platform, Java bytecode remains unchanged and can run on any JVM without recompilation.
// Key Steps in Java Platform Independence
// Write the Code: Developers write Java programs using .java source files.
// Compile: The Java compiler converts the source code into platform-independent bytecode (.class files).
// Execute: The JVM on the target machine translates the bytecode into machine-specific instructions


//3.What is bytecode?

// Bytecode is an intermediate, platform-independent code generated by the Java compiler (javac) after compiling Java source code. 
// Bytecode is stored in .class files and can be executed on any system that has a Java Virtual Machine (JVM).

//How Bytecode Works
The programmer writes source code in a .java file.

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
Compilation to Bytecode:

//The Java compiler (javac) compiles the source code into a .class file containing bytecode:
javac HelloWorld.java

//This produces HelloWorld.class.
//Execution by JVM:

//The JVM reads the bytecode and translates it into native machine code for the specific platform, executing the program.
java HelloWorld

//4.difference between the jre,jdk,jvm:

//Summary
JDK: For developing Java applications (write and compile code).
JRE: For running Java applications (provides the environment).
JVM: The engine inside the JRE that executes bytecode and enables platform independence
  
//5.What are the important differences between C++ and Java?
  //Focus	Platform independence and simplicity.c++:Performance, flexibility, and system-level programming.  
  //Speed	Slightly slower due to JVM overhead and garbage collection.	c++:Faster because it's directly compiled to machine code.
  //Garbage Collection	Automatic garbage collection via the JVM.	Manual memory management using new, delete, and smart pointers.

//6.Class holder:
  //class Holder in Java (Simplified Explanation)
//A class holder is often just a class used to store data or organize related pieces of information.

1. Simple Data Holder (POJO)
A class that holds some data, like a user's name and age.

//Example:
public class User {
    String name;
    int age;

    // Constructor
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
//Usage:
public class Main {
    public static void main(String[] args) {
        User user = new User("Alice", 25);
        System.out.println("Name: " + user.name);
        System.out.println("Age: " + user.age);
    }
}
//9.method to create the wrapper class:

//Using the valueOf Method:
The valueOf method is a static factory method that is efficient because it uses caching for frequently used values (e.g., integers between -128 and 127);

Integer intValue = Integer.valueOf(10);
Double doubleValue = Double.valueOf(20.5);
Boolean booleanValue = Boolean.valueOf(true);
//Benefits:
Memory-efficient due to caching.
Faster and modern approach.


//Using parseXXX for String Conversion
//If you have a String representation of a number, you can use methods like parseInt or parseDouble to convert it to a primitive, and then auto-boxing will handle the conversion to a Wrapper class.
Example:
String number = "100";
Integer intValue = Integer.parseInt(number);  // intValue becomes an Integer

//Using Auto-boxing 
Auto-boxing is the automatic conversion of a primitive type to its corresponding Wrapper class.
Example:
Integer intValue = 10;  // int is automatically converted to Integer
Double doubleValue = 20.5;  // double is automatically converted to Double
Boolean booleanValue = true;  // boolean is automatically converted to Boolean
// Benefits:
// Concise and easy to read.

//10.create the wrapper class by the different one:

//Using Constructors
Description: You explicitly call the constructor of the wrapper class to create a new instance.
//Syntax:
Integer obj = new Integer(10); // Deprecated in Java 9+
// Key Characteristics:
// Always creates a new object in memory.
// Explicit and straightforward.
// Deprecated since Java 9: This method is discouraged in favor of valueOf() for better performance.

//Using valueOf() Factory Methods
Description: You call the valueOf() method to create an instance of the wrapper class.
//Syntax:
Integer obj = Integer.valueOf(10);
// Key Characteristics:
// Efficient due to caching of frequently used values.
// Reuses existing objects from a pool for certain values (e.g., Integer values between -128 and 127).
// Preferred way of creating wrapper objects since Java 5.
// Promotes immutability and reduces memory overhead.

//11.what is auto boxing:

// Autoboxing automates the conversion of primitives to wrapper objects.
// It simplifies working with collections and APIs that expect objects.
// Always be cautious of null values during unboxing to avoid runtime exceptions.


//12.What is Casting in Java?
// Casting in Java is the process of converting one data type into another.
// This is often required when you need to work with different types of data or when performing certain operations that require a specific type.

There are two main types of casting in Java:
//13. Primitive Casting
Primitive casting is used to convert one primitive data type into another.

// Types of Primitive Casting:
// a. Widening Casting (Implicit Casting):
// Automatically performed by the Java compiler.
// Converts a smaller data type to a larger data type (e.g., int to long or float to double).
// No data loss occurs.
// Example:
// int num = 100;
// double doubleNum = num; // Implicit casting (int to double)
// System.out.println(doubleNum); // Output: 100.0

// b. Narrowing Casting (Explicit Casting):
// Manually performed by the programmer.
// Converts a larger data type to a smaller data type (e.g., double to int).
// May result in data loss or truncation.
// Example:
// double num = 99.99;
// int intNum = (int) num; // Explicit casting (double to int)
// System.out.println(intNum); // Output: 99 (fractional part is truncated)

// 14. Object Casting
// Object casting is used when converting one object type to another within an inheritance hierarchy.

// Types of Object Casting:
// a. Upcasting (Implicit Casting):

// Casting a child object to a parent class type.
// Always safe and doesn't require explicit casting.
// Example:
// class Animal {}
// class Dog extends Animal {}

// Animal animal = new Dog(); // Implicit upcasting
   //Downcasting: 
// If you want to access methods or properties from a grandchild class (a subclass of a subclass), you would need to downcast to the appropriate type in order to access those methods, assuming the object is actually an instance of that subclass.
// Example of Downcasting to Access a Child of Child:

class Animal {
    void eat() {
        System.out.println("Animal is eating.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking.");
    }
}

class Puppy extends Dog {
    void play() {
        System.out.println("Puppy is playing.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating a Puppy object and assigning it to an Animal reference (Upcasting)
        Animal animal = new Puppy();

        // Downcasting from Animal to Dog, because the object is actually a Dog or subclass
        Dog dog = (Dog) animal;
        
        // Now you can access Dog-specific methods
        dog.bark();  // Output: Dog is barking.

        // Downcasting from Dog to Puppy (to access Puppy-specific methods)
        Puppy puppy = (Puppy) dog;
        
        // Now you can access Puppy-specific methods
        puppy.play();  // Output: Puppy is playing.
    }
}
    
// Key Points:
// Upcasting: When you assign a Puppy object to an Animal reference (Animal animal = new Puppy();), Java will automatically treat the Puppy object as an Animal,
    //since Puppy is a subclass of Dog, and Dog is a subclass of Animal.

// Downcasting:

// To call methods specific to Dog (like bark()), you downcast the animal object to Dog (Dog dog = (Dog) animal;).
// To access methods specific to Puppy (like play()), you need to downcast further from Dog to Puppy (Puppy puppy = (Puppy) dog;).

//12/12/24
//23.class
//In Java, a class is a blueprint for creating objects.
//It defines the properties (fields) and behaviors (methods) that the objects created from the class will have.
///Classes encapsulate data and code, making it easier to organize and manage complex programs.

//Key Characteristics of a Class:
Blueprint for Objects: A class serves as a template from which objects (instances) are created. Each object is an independent entity with its own state and behavior.
Encapsulation: A class encapsulates data (fields) and methods, restricting direct access to some components and maintaining control over how the data is modified.
Inheritance: A class can inherit fields and methods from another class, promoting code reuse.
Polymorphism: A class can override methods from its parent class or interface, providing different implementations.
Syntax:

public class Car {
    // Fields
    String brand;
    int year;

    // Constructor
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    // Method
    public void displayDetails() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }

    // Main method to create objects
    public static void main(String[] args) {
        // Creating objects
        Car car1 = new Car("Toyota", 2021);
        Car car2 = new Car("Honda", 2020);

        // Calling methods
        car1.displayDetails();
        car2.displayDetails();
    }
}
//Explanation:
// The Car class defines two fields: brand and year.
// A constructor initializes the fields when an object of the Car class is created.
// The displayDetails method prints the object's details.
// In the main method, two objects (car1 and car2) are created and their methods are called.

//Output:
Brand: Toyota, Year: 2021
Brand: Honda, Year: 2020
This demonstrates how classes and objects work together in Java to model real-world entities.

//24.object?
    //In Java, an object is an instance of a class. 
    //It represents a specific entity that has a state and behavior defined by the class it is created from.
    //Objects are the building blocks of object-oriented programming and allow you to interact with the data and methods encapsulated within a class.

//Key Characteristics of an Object:
Instance of a Class: Objects are created using the class as a blueprint.
State: The state of an object is represented by its fields (attributes).
Behavior: The behavior of an object is defined by its methods (functions).
Identity: Each object has a unique identity that distinguishes it from other objects, even if they have the same state.
Creating an Object:
Objects are created using the new keyword in Java, which calls the class constructor.

//Syntax:
ClassName objectName = new ClassName(parameters);
//Example:
class Car {
    // Fields
    String brand;
    int year;

    // Constructor
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    // Method
    public void displayDetails() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating an object of the Car class
        Car car1 = new Car("Toyota", 2021);

        // Accessing object's method
        car1.displayDetails();
    }
}
//How Objects Work:
Instance Creation: When you write Car car1 = new Car("Toyota", 2021);, the Car class constructor is called, and memory is allocated for the car1 object.
//State and Behavior:
The object's state is represented by the brand and year fields.
The object's behavior is defined by the displayDetails() method.
Object Lifecycle:
Declaration: Car car1; (declares an object reference variable but does not create an object).
Instantiation: car1 = new Car("Toyota", 2021); (creates the object and allocates memory).
Initialization: The constructor sets initial values for the object’s fields.

//     Output of the Above Example:
// Brand: Toyota, Year: 2021

//25.state in the object:
// The state of an object refers to the data or attributes (fields) that describe the object at a specific moment in time.
// It represents the characteristics or properties of the object.

Characteristics of Object State:
Defined by Fields: The values stored in an object's fields (variables) determine its state.
Dynamic: The state of an object can change over time as its fields are updated.
Encapsulated: State is typically encapsulated within the object, with controlled access through methods (getters and setters).

Example:
class Car {
    // Fields (State)
    String brand;
    int speed;

    // Constructor
    public Car(String brand, int speed) {
        this.brand = brand;
        this.speed = speed;
    }

    // Method to update speed
    public void accelerate(int increment) {
        this.speed += increment;
    }

    // Method to display the state
    public void displayState() {
        System.out.println("Brand: " + brand + ", Speed: " + speed);
    }
}

public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Toyota", 50); // Initial state
        car1.displayState();

        car1.accelerate(20); // Update state
        car1.displayState();
    }
}
Output:
Brand: Toyota, Speed: 50
Brand: Toyota, Speed: 70
Initial State: brand = "Toyota", speed = 50
//Updated State: After calling accelerate(20), the state changes to speed = 70.

    
//26. What is the Behavior of an Object?
The behavior of an object refers to the actions or operations the object can perform.
These are defined by the methods in the object's class. Behavior typically involves modifying the object's state or interacting with other objects.

Characteristics of Object Behavior:
Defined by Methods: The class's methods dictate the actions an object can perform.
Interacts with State: Methods often read or modify the object's fields.
Encapsulation of Logic: Behavior hides implementation details and provides functionality.
Example:
//Using the same Car class:
public void accelerate(int increment) {
    this.speed += increment; // Behavior: Increase speed
}

public void brake(int decrement) {
    this.speed -= decrement; // Behavior: Decrease speed
}
Behavior Demonstrated:
//accelerate() increases the speed field (changing the state).
//brake() decreases the speed field (changing the state).
Example with Behavior in Action:
public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Honda", 30); // Initial state
        car1.displayState();

        car1.accelerate(10); // Behavior: Accelerate
        car1.displayState();

        car1.brake(5); // Behavior: Brake
        car1.displayState();
    }
}
//Output:
Brand: Honda, Speed: 30
Brand: Honda, Speed: 40
Brand: Honda, Speed: 35

Summary:
//Behavior: The actions an object can perform, represented by its methods (e.g., accelerate(), brake()).

//28.equals methods:


//29.about the verification of the equals method:

1. Follow the Contract of equals
The equals method has a well-defined contract as per the Java documentation. Your implementation must satisfy these properties:

a. Reflexivity
For any non-null reference x, x.equals(x) should return true.

b. Symmetry
For any non-null references x and y, x.equals(y) should return true if and only if y.equals(x) is true.

c. Transitivity
For any non-null references x, y, and z, if x.equals(y) is true and y.equals(z) is true, then x.equals(z) must also return true.

d. Consistency
For any non-null references x and y, repeated calls to x.equals(y) should consistently return the same result, provided neither object is modified.

e. Null-Handling
For any non-null reference x, x.equals(null) must return false.
    
import java.util.Objects;

class Person{
    private String name;
    
    public Person(String name){
        this.name=name;
    }
    @Override
    public boolean equals(Object obj){
        if(this==obj) return true;//Refeerance equality
        if(obj==null||getClass()!=obj.getClass());//check null and class
        Person person=(Person) obj;//downcast
        return Objects.equals(name, person.name);
    }
    @Override
    public int hashCode(){
return Objects.hash(name);        
    }
    
     public String getName() {
        return name;
    }
}

class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        Person person1=new Person("naveen");
                Person person2=new Person("naveen");
        Person person3=new Person("naveenkumar");
        
                System.out.println("p"+person1.equals(person2));
                                System.out.println("p"+person1.equals(person3));
                System.out.println("p"+(person1==person2));
                
                                System.out.println("p"+(person1.hashCode()==person2.hashCode()));//for the same content produce the same referance value
                                     System.out.println("p"+(person1.hashCode()==person3.hashCode()));
                                     //for the diff content produce the diff referance value
    }
}



//30.about the hash number:

//the hashCode method in Java is used to generate a numerical representation (an integer) of an object,
//which is typically used in hash-based collections like HashMap, HashSet, and Hashtable. 
//It serves as a way to identify objects efficiently in these collections by providing a hash code that represents the object's data.

Key Points About hashCode
Purpose in Collections:
It allows objects to be stored and retrieved quickly in hash-based data structures by converting the object into a numeric code (a "bucket index")
    where it is stored.
    
// Contract with equals:
// If two objects are equal according to the equals method, they must have the same hash code.
// However, two objects with the same hash code may not necessarily be equal (this is known as a hash collision).
//Example: Using hashCode in a HashSet
import java.util.HashSet;
import java.util.Objects;

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Person person = (Person) obj;
        return age == person.age && Objects.equals(name, person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age); // Combine fields into a hash
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

public class Main {
    public static void main(String[] args) {
        HashSet<Person> people = new HashSet<>();

        Person person1 = new Person("Alice", 25);
        Person person2 = new Person("Alice", 25);
        Person person3 = new Person("Bob", 30);

        people.add(person1);
        people.add(person2); // Won't be added because person1.equals(person2) is true
        people.add(person3);

        System.out.println("HashSet contains: " + people); // Prints only person1 and person3
    }
}
//Output:
//HashSet contains: [Person{name='Alice', age=25}, Person{name='Bob', age=30}]

//31.inheritance in java:

//Inheritance in Java is a key object-oriented programming concept that allows a class (called the subclass or child class) to acquire the properties (fields) and behaviors (methods) of another class (called the superclass or parent class).
//It helps promote code reuse and establishes a hierarchical relationship between classes.


class Parent {
    int a;

    void display() {
        System.out.println("This is the parent class.");
    }
}

class Child extends Parent {
    void show() {
        System.out.println("This is the child class.");
    }
}

public class Main {
    public static void main(String[] args) {
        Child child = new Child();
        child.display(); // Method from Parent
        child.show();    // Method from Child
    }
}

Types of Inheritance in Java
Single Inheritance: One class inherits from another class:
class A {}
class B extends A {}
Multilevel Inheritance: A class inherits from a class, and another class inherits from it.
class A {}
class B extends A {}
class C extends B {}
Hierarchical Inheritance: Multiple classes inherit from a single class.
class A {}
class B extends A {}
class C extends A {}
Example:
class Animal {
    void eat() {
        System.out.println("This animal can eat.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog can bark.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();  // Inherited from Animal
        myDog.bark(); // Defined in Dog
    }
}
Here are examples of all types of inheritance in Java:

1. Single Inheritance
A subclass inherits directly from a superclass.
class Parent {
    void displayParent() {
        System.out.println("This is the parent class.");
    }
}

class Child extends Parent {
    void displayChild() {
        System.out.println("This is the child class.");
    }
}

public class Main {
    public static void main(String[] args) {
        Child child = new Child();
        child.displayParent(); // Inherited from Parent
        child.displayChild();  // Defined in Child
    }
}
2. Multilevel Inheritance
A class inherits from a class, and another class inherits from it.
class Grandparent {
    void displayGrandparent() {
        System.out.println("This is the grandparent class.");
    }
}

class Parent extends Grandparent {
    void displayParent() {
        System.out.println("This is the parent class.");
    }
}

class Child extends Parent {
    void displayChild() {
        System.out.println("This is the child class.");
    }
}

public class Main {
    public static void main(String[] args) {
        Child child = new Child();
        child.displayGrandparent(); // Inherited from Grandparent
        child.displayParent();      // Inherited from Parent
        child.displayChild();       // Defined in Child
    }
}
3. Hierarchical Inheritance
Multiple subclasses inherit from a single superclass.
class Animal {
    void eat() {
        System.out.println("This animal can eat.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog can bark.");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("The cat can meow.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();  // Inherited from Animal
        dog.bark(); // Defined in Dog

        Cat cat = new Cat();
        cat.eat();  // Inherited from Animal
        cat.meow(); // Defined in Cat
    }
}
4. Multiple Inheritance via Interfaces
Java does not support multiple inheritance with classes but allows it through interfaces.


interface Printable {
    void print();
}

interface Readable {
    void read();
}

class Document implements Printable, Readable {
    public void print() {
        System.out.println("Printing the document.");
    }

    public void read() {
        System.out.println("Reading the document.");
    }
}

public class Main {
    public static void main(String[] args) {
        Document doc = new Document();
        doc.print(); // From Printable
        doc.read();  // From Readable
    }
}
5. Hybrid Inheritance (Not Directly Supported in Java)
Hybrid inheritance is a combination of hierarchical and multiple inheritance. Since Java doesn't support multiple inheritance with classes, we can use interfaces.

interface Vehicle {
    void vehicleType();
}

class Car implements Vehicle {
    public void vehicleType() {
        System.out.println("This is a car.");
    }
}

class Truck implements Vehicle {
    public void vehicleType() {
        System.out.println("This is a truck.");
    }
}

class HybridVehicle extends Car implements Vehicle {
    void hybridFeature() {
        System.out.println("This is a hybrid vehicle with advanced features.");
    }
}

public class Main {
    public static void main(String[] args) {
        HybridVehicle hybrid = new HybridVehicle();
        hybrid.vehicleType();    // From Car
        hybrid.hybridFeature();  // Defined in HybridVehicle
    }
}


//Method Overloading is a feature in Java that allows a class to define multiple methods with the same name but different parameters.
//It improves code readability and flexibility by enabling methods to perform similar functions with varying input types or numbers of arguments.

//Key Rules of Method Overloading
Same Method Name: All overloaded methods must share the same name.
Different Parameters:
Different number of parameters.
Different types of parameters.
Different order of parameters (if types are different).
Return Type Does Not Matter: Method overloading is not determined by the return type of methods.
Examples of Method Overloading
    
1. Varying Number of Parameters
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(2, 3));       // Calls the first add method
        System.out.println(calc.add(2, 3, 4));   // Calls the second add method
    }
}
Output:
5
9
2. Varying Types of Parameters
class Printer {
    void print(int value) {
        System.out.println("Printing an integer: " + value);
    }

    void print(String value) {
        System.out.println("Printing a string: " + value);
    }
}

public class Main {
    public static void main(String[] args) {
        Printer printer = new Printer();
        printer.print(42);       // Calls the print method with an integer
        printer.print("Hello");  // Calls the print method with a string
    }
}
Output:
Printing an integer: 42
Printing a string: Hello
3. Varying Order of Parameters

class Display {
    void show(int a, String b) {
        System.out.println("Integer: " + a + ", String: " + b);
    }

    void show(String b, int a) {
        System.out.println("String: " + b + ", Integer: " + a);
    }
}

public class Main {
    public static void main(String[] args) {
        Display display = new Display();
        display.show(10, "Hello");   // Calls the first show method
        display.show("World", 20);  // Calls the second show method
    }
}
Output:
Integer: 10, String: Hello
String: World, Integer: 20

//34.what is method overriding:

// Method Overriding is a concept in Object-Oriented Programming (OOP) where a child class provides a specific implementation of a method that is already defined in its parent class.

//In method overriding:

//The method in the child class has the same name, return type, and parameters as the method in the parent class.
//The implementation in the child class overrides (replaces) the one in the parent class.
//This allows the child class to provide its own specific behavior while still maintaining a common method structure.
    
// Parent Class: PaymentGateway
class PaymentGateway {
    void processPayment(double amount) {
        System.out.println("Processing payment of $" + amount + " using generic gateway...");
    }
}

// Child Class 1: Credit Card Payment
class CreditCardPayment extends PaymentGateway {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing $" + amount + " using Credit Card gateway...");
    }
}

// Child Class 2: PayPal Payment
class PayPalPayment extends PaymentGateway {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing $" + amount + " using PayPal gateway...");
    }
}

// Child Class 3: Google Pay Payment
class GooglePayPayment extends PaymentGateway {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing $" + amount + " using Google Pay gateway...");
    }
}

// Main Class to Test
public class PaymentSystem {
    public static void main(String[] args) {
        PaymentGateway payment;

        // Credit Card Payment
        payment = new CreditCardPayment();
        payment.processPayment(100.00);  
        // Output: Processing $100.0 using Credit Card gateway...

        // PayPal Payment
        payment = new PayPalPayment();
        payment.processPayment(200.00);  
        // Output: Processing $200.0 using PayPal gateway...

        // Google Pay Payment
        payment = new GooglePayPayment();
        payment.processPayment(300.00);  
        // Output: Processing $300.0 using Google Pay gateway...
    }
}



//35.can super class can hold the object of the subclass:
//Yes, in Java, a superclass reference variable can hold an object of a subclass. 
//This is a key concept in polymorphism.

Explanation:
A reference variable of a parent class (superclass) can point to an object of its child class (subclass).
This is because a subclass object "is-a" type of its superclass.

    
// Parent Class: PaymentGateway
class PaymentGateway {
    void processPayment(double amount) {
        System.out.println("Processing payment of $" + amount + " using generic gateway...");
    }
}

// Child Class 1: Credit Card Payment
class CreditCardPayment extends PaymentGateway {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing $" + amount + " using Credit Card gateway...");
    }
}

// Child Class 2: PayPal Payment
class PayPalPayment extends PaymentGateway {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing $" + amount + " using PayPal gateway...");
    }
}

// Child Class 3: Google Pay Payment
class GooglePayPayment extends PaymentGateway {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing $" + amount + " using Google Pay gateway...");
    }
}

// Main Class to Test
public class PaymentSystem {
    public static void main(String[] args) {
        PaymentGateway payment;//// Superclass reference variable

        //  Superclass reference holds a CreditCardPayment object
        // Credit Card Payment
        payment = new CreditCardPayment();
        payment.processPayment(100.00);  
        // Output: Processing $100.0 using Credit Card gateway...

         // Superclass reference holds a CreditCardPayment object
        // PayPal Payment
        payment = new PayPalPayment();
        payment.processPayment(200.00);  
        // Output: Processing $200.0 using PayPal gateway...

         // Superclass reference holds a GooglePayPayment object
        // Google Pay Payment
        payment = new GooglePayPayment();
        payment.processPayment(300.00);  
        // Output: Processing $300.0 using Google Pay gateway...
    }
}


//What is Multiple Inheritance?
//When a child class tries to inherit (extend) properties from two or more parent classes, it is called multiple inheritance.

//In Java, this is not allowed with classes to avoid confusion.

class Parent1 {
    void work() {
        System.out.println("Work from Parent1");
    }
}

class Parent2 {
    void work() {
        System.out.println("Work from Parent2");
    }
}

// This is not allowed in Java!
class Child extends Parent1, Parent2 {
    // Confusion: Which work() method should Child use?
}
Here, if Child tries to inherit from both Parent1 and Parent2, Java would not know which work() method to use. To avoid this confusion, Java does not allow multiple inheritance with classes.

//How Does Java Solve This?
//Java allows multiple inheritance through interfaces because interfaces only declare methods (no implementation). The child class writes its own method.

//Example with Interfaces (Allowed):
interface Parent1 {
    void work();
}

interface Parent2 {
    void work();
}

class Child implements Parent1, Parent2 {
    public void work() {
        System.out.println("Child is working");
    }
}

public class Main {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.work();  // Output: Child is working
    }
}
//Simple Explanation
Java doesn't allow multiple inheritance with classes to avoid confusion.
Java allows multiple inheritance with interfaces because the child class gives its own implementation.



//92.which design pattarn used in exception handling:
//If an exception is not handled in a method, it automatically propagates up the call stack.

//     If none of the methods handle the exception, and it reaches the top of the stack (main), but there’s still no handler, the program will terminate, and the Java runtime will print the exception stack trace.
// This "bubbling up" mechanism ensures that the exception has multiple chances to be caught and handled.
// The top-most method (main) must handle it; otherwise, the program terminates with an error.
public class Main {
    public static void main(String[] args) throws Exception{
        System.out.println("Try programiz.pro");
        try{
            method1();
            }catch(Exception e){
        System.out.println("handle exceeption  "+ e.getMessage());
            }
    }
    
       static void method1() throws Exception{
        method2();
    }
    
      static void method2() throws Exception{
        method3();
    }
    
      static void method3() throws Exception{
        throw new Exception("something went wrong");
    }
}

//o/p:
//handle exceeption  something went wrong



public class Main {
    public static void main(String[] args) throws Exception{
        System.out.println("Try programiz.pro");
        method1();
    }
    
      static void method1() throws Exception{
        method2();
    }
    
      static void method2() throws Exception{
        method3();
    }
    
      static void method3() throws Exception{
        throw new Exception("something went wrong");
    }
}


//o/p:
// Exception in thread "main" java.lang.Exception: something went wrong
// 	at Main.method3(Main.java:20)
// 	at Main.method2(Main.java:16)
// 	at Main.method1(Main.java:12)
// 	at Main.main(Main.java:8)



    
