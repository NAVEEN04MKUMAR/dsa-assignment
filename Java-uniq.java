


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






import java.util.*;

class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        
        String key="abba";
        String value="ant bat bat ant";
        String [] word=value.split(" ");
        
        Map<Character,String> map=new HashMap<>();
        
        boolean consistant=true;
        
        for(int i=0;i<key.length();i++){
            char keym=key.charAt(i);
    
        if(map.keySet().equals(keym)){
            System.out.println("true");
        }
        
           String valuem=word[i];
    //verify current key compare already existing key
           if(map.containsKey(keym)){
               //compare the value not same
               if(!map.get(keym).equals(valuem)){
                   consistant=false;
                   break;
               }
               
           }else{
            map.put(keym,valuem);

           }
    
        }
        if(consistant){
            System.out.println("mapping is consistant"+map);
        }else{
            System.out.println("mapping is inconsistant");
        }
        

        StringBuilder op=new StringBuilder();
        
        for(Map.Entry<Character,String> entry:map.entrySet()){
            op.append(entry.getKey()).append(" ").append(entry.getValue()).append(", ");
        }
        
                System.out.print(op.toString());
    }
}






//27/10/24
// class Main {
//     public static void main(String[] args) {
//         int a[] ={6,6,1,1,2,3,5};
//         Arrays.sort(a);
//         for(int i=0;i<a.length;i++){
//          if(a[i]==a[i+1]||a[i]+1==a[i+1]){
//              System.out.println("ans"+(a[i+1]));
//              continue;
//          }  else{
//              System.out.println("ans1  "+(a[i]+1));
//              break;
//          }
//         }
//     }
// }
class Main {
    public static void main(String[] args) {
        int a[] ={1,2,3,5,4,7,10};
        int h;
        int r;
        for(int i=0;i<a.length;i++){
         if(a[i]%2!=0){
             System.out.println("ans"+(a[i]));
         }  else{
             System.out.println("ans1  "+(a[i]));
             h=a[i];
            //  r=reverse(h);
            //  System.out.println("reverse "+h);
         }
        }
    }
}



//30/12/2024
// Online Java Compiler
// Use this editor to write, compile and run your Java code online


//serialisation and deserialisation
import java.io.*;
import java.util.ArrayList;

class Data implements Serializable{
    private static final long serialVersionUID=12345678L;
    int id;
    String name;
    Data(String name,int id){
        this.name=name;
        this.id=id;
        
    }
    
    public String toString(){
        return name+" "+id;
    }
}

public class Main {
    public static void main(String[] args) throws Exception{

        Data d1=new Data("java",102);
        String fl=new String("data.ser");//it throws the file not found exception 
        // String fl=System.getProperty("user.home") + File.separator + "data.ser";
        
        FileOutputStream fos=new FileOutputStream(fl);//read the raw data
        ObjectOutputStream op=new  ObjectOutputStream(fos);//byte to object
        // op.writeObject(al);
        op.writeObject(d1);
        op.close();
                System.out.println("created");
                System.out.println("-------");
                
   FileInputStream f1=new FileInputStream(fl);//read the raw data
        ObjectInputStream op1=new  ObjectInputStream(f1);//byte to object
      Data obj=(Data)op1.readObject();
                op1.close();
            System.out.println(obj);
        
    }
}
class Task extends Thread{
    private String taskname;
    public Task(String taskname){
        this.taskname=taskname;
    }
    
    public void run(){
        for(int i=1;i<=3;i++){
         System.out.println(taskname + " - Step " + i);

            try{
                Thread.sleep(1000);
            }catch(InterruptedException e){
                e.printStackTrace();
            }
        }
    }
}


public class Main{
    public static void main(String[] args){
        Task task1=new Task("download file");
        Task task2=new Task("play music");
        task1.start();
        task2.start();
    }
}
//The tasks overlap instead of waiting for one to finish before the next starts.
//play music - Step 1
// download file - Step 1
// download file - Step 2
// play music - Step 2
// download file - Step 3
// play music - Step 3


//14/02/2025:
//187.How do you create a thread by extending thread class?
//which already available at 186

//188.How do you create a thread by implementing runnable interface?
//which already available at 186

//189.How do you run a thread in Java?
//which already available at 186


//190.priority in thread:
//it is the which thread execute first when the multiple thread executed that time
class Main extends Thread{
    public void run(){
        System.out.println(Thread.currentThread().getName()+"Priority:"+Thread.currentThread().getPriority());
    }
    public static void main(String[] args){
        Main t1=new Main();
        Main t2=new Main();
        Main t3=new Main();
        
        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.NORM_PRIORITY);
        t3.setPriority(Thread.MAX_PRIORITY);
        
        t1.start();
        t2.start();
        t3.start();
        
    }
}
//Thread-2Priority:10
// Thread-0Priority:1
// Thread-1Priority:5


//application
class Main extends Thread{
    private String transactiontype;
    public Main(String transactiontype){
        this.transactiontype=transactiontype;
    } 
    public void run(){
        System.out.println(transactiontype+"Priority:"+getPriority());
    }
    public static void main(String[] args){
        Main salarydepo=new Main("salary deposit");
        Main fundtransfer=new Main("fund transfer");
        Main balancecheck=new Main("balance check");
        
        salarydepo.setPriority(Thread.MAX_PRIORITY);
        fundtransfer.setPriority(Thread.NORM_PRIORITY);
        balancecheck.setPriority(Thread.MIN_PRIORITY);
        
      salarydepo.start();
      fundtransfer.start();
      balancecheck.start();
        
    }
}
// fund transferPriority:5
// balance checkPriority:1
// salary depositPriority:10
//for the above oe thread schdular not always gurantee execute based on the priority but i is also depans on the jvm and os schudular
//higher thread will execute the better chances o the get the thread first


//executer service:
//high level concurreny framework that provides a way to manage and control thread execution
//part of the java.util.concurrent used to execute the task asynchronously in a thread pool instead of the managing threads

//fixed thread pool
//executors.new FixedThreadPool(n)-which is the fixed number of threads,good for the application with a known for the concurrent tasks
//when we know thw fixed number of pool
import java.util.concurrent.*;
public class Main{
    public static void main(String[] args){
        ExecutorService executor=Executors.newFixedThreadPool(3);
        Runnable task=()->{
            System.out.println("task executed by"+Thread.currentThread().getName());
        };
        for(int i=0;i<12;i++){
            executor.execute(task);
        }
            executor.shutdown();
    }
}
//o/p:
// task executed bypool-1-thread-2
// task executed bypool-1-thread-2
// task executed bypool-1-thread-2
// task executed bypool-1-thread-2
// task executed bypool-1-thread-2
// task executed bypool-1-thread-2
// task executed bypool-1-thread-2
// task executed bypool-1-thread-3
// task executed bypool-1-thread-3
// task executed bypool-1-thread-3
// task executed bypool-1-thread-1
// task executed bypool-1-thread-2

//executors.newCachedThreadPool(n)-which is the reuse idel threads
//suitabe for the handling many short lived tasks
//it will tthe thread grow dynamically as needed

import java.util.concurrent.*;
public class Main{
    public static void main(String[] args){
        ExecutorService executor=Executors.newCachedThreadPool();
        // Runnable task=()->{
        //     System.out.println("task executed by"+Thread.currentThread().getName());
        // };
        for(int i=0;i<12;i++){
            final int taskNumber=i;
            executor.execute(()->{
                System.out.println("Executing Task " + taskNumber + " by " + Thread.currentThread().getName());
            });
        }
            executor.shutdown();
    }
}

//Single Thread Executor
//Executors.newSingleThreadExecutor()
//uses a single thread to execute tasks sequentially
//ensures thread safety for the sequential execution

import java.util.concurrent.*;
public class Main{
    public static void main(String[] args){
        ExecutorService executor=Executors.newSingleThreadExecutor();
        // Runnable task=()->{
        //     System.out.println("task executed by"+Thread.currentThread().getName());
        // };
        for(int i=0;i<4;i++){
            final int taskNumber=i;
            executor.execute(()->{
                System.out.println("Executing Task " + taskNumber + " by " + Thread.currentThread().getName());
            });
        }
            executor.shutdown();
    }
}
//this code execute in the order
//Executing Task 0 by pool-1-thread-1
// Executing Task 1 by pool-1-thread-1
// Executing Task 2 by pool-1-thread-1
// Executing Task 3 by pool-1-thread-1

//Single Thread Executor
import java.util.concurrent.*;
public class Main{
    public static void main(String[] args){
        ScheduledExecutorService schedular=Executors.newScheduledThreadPool(2);
        Runnable task=()->{
            System.out.println("executing task at"+ System.currentTimeMillis());
        };
        schedular.schedule(task, 100, TimeUnit.SECONDS); // Runs after 3 seconds
            schedular.shutdown();
    }
}

//Executors.newScheduledThreadPool(n)
//allows schduling task to run ata fixed delay or periodically
//useful for shduled jobs suchas timers
















