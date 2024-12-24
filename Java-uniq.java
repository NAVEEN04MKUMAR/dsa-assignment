


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

//17/12/2024


//example of the queue
import java.util.LinkedList;
import java.util.Queue;

class Main {
    public static void main(String[] args) {
        Queue <Integer> q=new LinkedList<>();
        q.add(10);
        q.add(20);
        q.add(30);
        q.offer(40);
        q.offer(5);
        
        System.out.println("Try programiz.pro"+q);
        System.out.println("head"+q.peek());//view thw head
        System.out.println("head"+q.poll());//remove thw head
        System.out.println("head"+q);//view the queue
        System.out.println("head "+q.size());//view the queue

    }
}




//example of the priority queue
import java.util.LinkedList;
import java.util.PriorityQueue;

class Main {
    public static void main(String[] args) {
       PriorityQueue <Integer> q=new PriorityQueue<>();
        q.add(10);
        q.add(20);
        q.add(30);
        q.offer(40);
        // q.offer(5);
        //  q.add(6);
        q.add(7);
        q.offer(8);
        
        System.out.println("Try programiz.pro"+q);
        System.out.println("head"+q.peek());//view the head
        System.out.println("head"+q.poll());//remove thw head such as the 5
        System.out.println("head"+q);//view the queue such as the 10
        System.out.println("head "+q.size());//view the queue

    }
}

//18/12/24
//set the salary detatils from the employee id:
import java.util.ArrayList;
class Employee{
    //define datatype
    private String name;
    private Integer exp;
    private double salary;
    private Integer id;
    private String role;
    
    //constructor
    public Employee(String name ,Integer exp ,double salary, Integer id,String role){
        this.name=name;
        this.exp=exp;
        this.salary=salary;
        this.id=id;
        this.role=role;
    }
    
    //getter and setter
    public String getrole(){
        return role;
    }
    
    public void setrole(String role){
this.role=role;        
    }
    
      public double getsalary(){
        return salary;
    }
    public void setsalary(double salary){
this.salary=salary;        
    }
    
      public int getexp(){
        return exp;
    }
    public void setexp(int exp){
this.exp=exp;        
    }
      public String getname(){
        return name;
    }
    public void setname(String name){
this.name=name;        
    }
    
    @Override
      public String toString(){
        return "{" +"name:"+name+  ",exp:"+ exp+",salary:"+salary+",id:"+id+",role:"+role +'}';
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");

            ArrayList <Employee> sss=new ArrayList<>();
          sss.add(new Employee("naveen  ",0,10000.00,1,"developer"));
          sss.add(new Employee("kumar  ",1,20000.00,2,"tester"));
          sss.add(new Employee("vishnu  ",2,30000.00,3,"developer"));
          sss.add(new Employee("vignesh  ",3,40000.00,4,"tester"));
          sss.add(new Employee("ganabathy  ",4,50000.00,5,"developer"));
          sss.add(new Employee("ashok  ",5,60000.00,6,"tester"));
          System.out.println("s"+sss);
              
              for(Employee s:sss){
                  if(s.getexp()>1&&s.getrole().equals("developer")){
                                    System.out.println("s"+s.getname()+s.getsalary());
                                    s.setsalary(s.getsalary()+5000);
                                    System.out.println("s"+s.getname()+s.getsalary()+s.getrole());
                  }
                  
                    if(s.getexp()>1&&s.getrole().equals("tester")){
                                    System.out.println("s"+s.getname()+s.getsalary());
                                    s.setsalary(s.getsalary()+2000);
                                    System.out.println("s"+s.getname()+s.getsalary()+s.getrole());

                  }
                  
              }             
    }
}

//19/12

//  not completed
import java.util.*;
package collection;

class Student{
    int age;
    String name;
    
    Student (){
        
    }
    @Overide
    public String toString(){
        return "Student[""name"+name+"age"+age+ "]";
    }
    public Student(int age,
    String name){
        this.name=name;
        this.age=age;
    }
    
    public int getage(){
        return age;
    }
     public String getname(){
        return name;
    }
    
    //  class Agecomparator implements Comparator<Student>{
    //     @Override
    //     public int compare(Student s1,Student s2){
    //         return Integer.compare(s1.getage(),s2.getage());
    //     }
    // }
    
    // class Namecomparator implements Comparator<Student>{
    //     @Override
    //     public int compare(Student s1,Student s2){
    //         return s1.getname().compareTo(s2.getname());
            
    //     }
    }
    
}

public class Comparato implements Comparator<Student>{
    public static void main(String[] args){
        Comparato cm=new Comparato();
        ArrayList <Student> f=new ArrayList<>();
        f.add(new Student(22,"naveen"));
        f.add(new Student(23,"kumar"));
        f.add(new Student(24,"ganaps"));
        f.add(new Student(25,"vignesh"));
         System.out.println("f"+f);
         
         Colection.sort(f,cm);
         for(Emp e:f){
             System.out.println(e);
         }
//                   System.out.println("before sorting by age");
//                   f.forEach(s-> System.out.println(s.getname()+"-"+s.getage()));
                  
                  
//                   f.sort(new Agecomparator());
// System.out.println("/nafter sorting by age");
//                   f.forEach(s-> System.out.println(s.getname()+"-"+s.getage()));
                  
                          
                  
//                   f.sort(new Namecomparator());
// System.out.println("/nafter sorting by name");
//                   f.forEach(s-> System.out.println(s.getname()+"-"+s.getage()));
                  @Override
                  public int compare(Student s1.Student s2){
                      if(s1.agee>s2.age){
                          return -1;
                          
                      }else if (o1.age<o2.age){
                          return 1;
                      }
                      else{
                          return 0;
                      }
                      
                  }

    }
}



//bending not get the compare with row wit col

class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        
        int [][] matrix={
            {1,2,1},
            {2,5,2},
            {1,8,1}
        };
    // int  row=matrix.length;
    // int  col=matrix[0].length;

        for(int row=0;row<matrix.length;row++){
      System.out.println("row"+row);  
            
            for(int col=0;col<matrix.length;col++){
                      System.out.println("col"+col);

    System.out.println(matrix[row][col]);      
    boolean match=false;
    int count=0;
    for(int k=0;k<matrix.length;k++){
                         System.out.println("k"+k); 
                         System.out.println("a"+matrix[row][k]); 

        // if(matrix[row][k]==matrix[k][col]){
        //         // System.out.println("not match row"+row+"col"+col); 
        //         match=true;
        //         break;
        // }
        // if()
        
    }
     if(match){
        // System.out.println("match row"+row+"col"+col); 
        count++;
        }
                 System.out.println("count"+count); 

       
            }
                        System.out.println();            
        }
        
    }
}



//20.12/2024

//Compare
//  Comparable used within the class then it mean we are sorting singl one ata a time not the multiple time like this one 
import java.util.*;
//  package collection;

 class Student implements Comparable<Student>{
    int age;
    String name;
    
   
    @Override
    public String toString(){
        return "Student[name"+name+"age"+age+ "]";
    }
    public Student(int age,
    String name){
        this.name=name;
        this.age=age;
    }
    
    public int getage(){
        return age;
    }
     public String getname(){
        return name;
    }

}

 public class Main {
    public static void main(String[] args){
        // Comparato cm=new Comparato();
        ArrayList <Student> f=new ArrayList<Student>();
        f.add(new Student(27,"prakash"));
        f.add(new Student(22,"naveen"));
        f.add(new Student(23,"kumar"));
        f.add(new Student(24,"ganaps"));
        f.add(new Student(25,"vignesh"));
         System.out.println("f"+f);
         
       
         System.out.println("Sorted by Age:");
         Collections.sort(f);
         for(Student e:f){
             System.out.println(e);
         }
         
        //   System.out.println("Sorted by name");
        //  Collections.sort(f);
        //  for(Student e:f){
        //      System.out.println(e);
        //  }


    }
    public int compareTo(Student p){
        return this.age-p.age;
    }
    
}


//Comparator
import java.util.*;
//  package collection;

class Student{
    int age;
    String name;
    
    // Student (){
        
    // }
    @Override
    public String toString(){
        return "Student[name"+name+"age"+age+ "]";
    }
    public Student(int age,
    String name){
        this.name=name;
        this.age=age;
    }
    
    public int getage(){
        return age;
    }
     public String getname(){
        return name;
    }

}

public class Main {
    public static void main(String[] args){
        // Comparato cm=new Comparato();
        ArrayList <Student> f=new ArrayList<Student>();
        f.add(new Student(27,"prakash"));
        f.add(new Student(22,"naveen"));
        f.add(new Student(23,"kumar"));
        f.add(new Student(24,"ganaps"));
        f.add(new Student(25,"vignesh"));
         System.out.println("f"+f);
         
         Comparator<Student> c1=new Comparator<Student>(){
             public int compare(Student s1,Student s2){
                 return s1.age-s2.age;
             }
         };
         
          Comparator<Student> c2=new Comparator<Student>(){
             public int compare(Student s1,Student s2){
                 return s1.name.compareTo(s2.name);
             }
         };
         System.out.println("Sorted by Age:");
         Collections.sort(f,c1);
         for(Student e:f){
             System.out.println(e);
         }
         
          System.out.println("Sorted by name");
         Collections.sort(f,c2);
         for(Student e:f){
             System.out.println(e);
         }


    }
}

//24/12/24

import java.util.*;
class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        
        HashMap<Integer,String> hm=new HashMap<Integer,String>();
        hm.put(1,"java");
        hm.put(2,"javascript");
        hm.put(3,"phython");
        hm.put(4,"mysql");
        hm.put(5,"c++");
        hm.put(6,"c");
        System.out.println("hm"+hm);
        System.out.println("hm.get"+hm.get(1));//if we give only key then return the value alone
        System.out.println("hm.get"+hm.get(7));
        System.out.println("hm.get contain value"+hm.containsValue("java"));//true
        System.out.println("hm.get contain value"+hm.containsValue("rupy"));//false
        System.out.println("hm.put if absent"+hm.putIfAbsent(1,"algo"));//doubt
        System.out.println("hm remove"+hm.remove(1));//
        System.out.println("hm remove the key and value"+hm.remove(6,"c"));//we can remove using key ar both the key and value
        System.out.println("hm remove the key and value"+hm.remove(7,"coa"));//we can remove using key ar both the key and value

        System.out.println("hm replace"+hm.replace(2,"rupy"));//
        System.out.println("hm replace"+hm.replace(2,"rupy","java"));//
        System.out.println("hm size"+hm.size());//
        Set s=hm.entrySet();
        System.out.println("entrySet"+s);//
        Iterator i=s.iterator();
        while(i.hasNext()){
        System.out.println("hm next"+i.next());//
            
        }
        Collection c=hm.values();
        System.out.println("hmm"+hm);
        
        // Set ss=hm.keySet();
        System.out.println("ss"+hm.keySet());//
        Iterator ii=s.iterator();
        while(ii.hasNext()){
        System.out.println("hm next"+ii.next());//
        Map.Entry s1=(Map.Entry)ii.next();
        if(s1.getKey().equals(4));
        System.out.println("hm setvalue"+s1.setValue("compiler"));//
        }
    System.out.println("hm setvalue"+hm);//

    }
}

//o/p:
// hm{1=java, 2=javascript, 3=phython, 4=mysql, 5=c++, 6=c}
// hm.getjava
// hm.getnull
// hm.get contain valuetrue
// hm.get contain valuefalse
// hm.put if absentjava
// hm removejava
// hm remove the key and valuetrue
// hm remove the key and valuefalse
// hm replacejavascript
// hm replacetrue
// hm size4
// entrySet[2=java, 3=phython, 4=mysql, 5=c++]
// hm next2=java
// hm next3=phython
// hm next4=mysql
// hm next5=c++
// hmm{2=java, 3=phython, 4=mysql, 5=c++}
// ss[2, 3, 4, 5]
// hm next2=java
// hm setvaluephython
// hm next4=mysql
// hm setvaluec++
// hm setvalue{2=java, 3=compiler, 4=mysql, 5=compiler}
