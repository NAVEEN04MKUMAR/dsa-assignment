


//11/12/2024
public class MyClass {
  public static void main(String args[]) {
   
//   List <String> fruits=new ArrayList<>();
    LinkedList <String> fruits=new LinkedList<>();

  fruits.add("10");
  fruits.add("20");
  fruits.add("30");
  Iterator <String> iterator=fruits.iterator();
  while(iterator.hasNext()){
          String fruit = iterator.next();
          System.out.println("iteration " +fruit);    
  }
  }
}


//iteration in java
import java.util.*;
import java.util.Scanner;


class Employee{
    int id;
    String name;
    double salary;
    int leave;
    
    public Employee( int id,String name,double salary,int leave){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.leave=leave;
    }
    
      public void display() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary + ",Leave"+leave);
    }
    
    public boolean matchusername(String username){
        return name.equalsIgnoreCase(username);        
    }
}

public class MyClass {
  public static void main(String args[]) {
   
  List <Employee> fruits=new ArrayList<>();
    // LinkedList <String> fruits=new LinkedList<>();

   fruits.add(new Employee(101,"naveen",100000,1));
    fruits.add(new Employee(102,"kumar",100000,2));
   fruits.add(new Employee(103,"vignesh",100000,3));
   fruits.add(new Employee(104,"vishnu",100000,0));
   
              Scanner scanner=new Scanner(System.in);
           System.out.println("Enter the username");
           String username=scanner.nextLine();
   
   boolean found=false;
for(Employee fruit:fruits){
    if(fruit.matchusername(username)){
        fruit.display();
        found=true;
        break;
        
    }
  
}
if(!found){
      System.out.println("username   "+   username    +"    notfound   ");
}
scanner.close();
  }
}


//12/12/2024


public class Main {
  public static String (String input) {
     Stack <Character> stack=new Stack<>();  
      
           for(char ch:input.toCharArray()){
               stack.push(ch)
           }
             
             System.out.println("stack " +stack);
             
             StringBuilder reversed=new StringBuilder();
             while(!stack.isEmpty()){
                 reversed.apped(stack.pop());
             }
             
             return reversed.toString();
  }
}







// import java.util.*; 

// public class Main {
//   public static void main(String args[]) {
//       List <String> al=new ArrayList<>();
//  al.add("a");
//  al.add("b");
//  al.add("c");
//  al.add("d");
// System.out.println("al " +al);  
             
//  List <String> al1=new ArrayList<>();
//  al1.add("e");
//  al1.add("b");
//  al1.add("c");
//  al1.add("f");
//              System.out.println("al1 " +al1);   
             
//             // List <String> common=new ArrayList<>();
            
//             //find the common element both the arraylist
//              for(String element:al){
//                  if(al1.contains(element)){
//                     //  common.add(element);
//                  System.out.println("common " +element);   

//                  }
//              }
//             //  System.out.println("common " +common);   
//   }
// }



// Online Java Compiler
// Use this editor to write, compile and run your Java code online



import java.util.ArrayList;
import java.util.ListIterator;



class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        ArrayList <String> s=new ArrayList<>();
        s.add("naveen");
        s.add("kumar");
        s.add("vishnu");
                s.add("vis04h-n-u");

                // System.out.println("s",s);
                ListIterator<String> l=s.listIterator();
                
                 System.out.println("forword traversal");
                 while(l.hasNext()){
                 
                     System.out.println("index"+l.nextIndex()+"value" + l.next());
                 }
                 
                   
                   System.out.println("backword traversal");
                 while(l.hasPrevious()){
                 
                     System.out.println("index"+l.previousIndex()+"value" + l.previous());
                 }
                 
                    System.out.println("change value");
                    l=s.listIterator();
                 while(l.hasNext()){
                  String element=l.next();
                     if(element.equals("naveen")){
                         l.set("kali");
                     }
                 }
                 
                   System.out.println("filterchar");
                    l=s.listIterator();
                // s.clear();
                 while(l.hasNext()){
                  String element=l.next();
                   StringBuilder f=new StringBuilder();
                 
                   //filter the char alone
                   for(char ch:element.toCharArray()){
                       if(Character.isLetter(ch)){
                           f.append(ch);
                       }else{
                           if(f.length()>0){
                               l.add(f.toString());
                            //   f.setLength(0);
                   }
                       }
                   }
                   //insert last element
                   if(f.length()>0){
                        l.add(f.toString());
                   }
        System.out.println("list"+f);
                 }
         System.out.println("list"+s);

        
    }
}


//14/12

import java.util.HashSet;

class Main {
    public static void main(String[] args) {
        // String input="abcd efgh abcd efgh";
        String input="collection is the framework of java then oops is the major concept of java";
        String[] elements=input.split(" ");

        HashSet <String> temp=new HashSet<>();

for(String element:elements){
           boolean uniq=temp.add(element);
            if(!uniq){
            System.out.println("already present "+element);
                    }
                  
        }
    }
}

