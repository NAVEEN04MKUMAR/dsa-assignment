
// Reverse Words in a String
// Problem Statement: Given a string s, reverse the words of the string.
// Examples:

// Example 1:
// Input: s=”this is an amazing program”
// Output: “program amazing an is this”

// Example 2:
// Input: s=”This is decent”
// Output: “decent is This”

import java.util.*;

class Main {
    public static void main(String[] args) {
        String st="how are you";
        System.out.println("before the reverse the string");
        System.out.println(st);
        
        // s=s+"";
        Stack<String> sta=new Stack<String>();
        String str="";
        for(int i=0;i<st.length();i++){
            if(st.charAt(i)==' '){
                sta.push(str);
                str="";
            }else{
                str+=st.charAt(i);
            }
        }
           // Push the last word onto the stack
        if (!str.isEmpty()) {
            sta.push(str);
        }
        String ans="";
        while(sta.size()!=1){
            ans+=sta.peek()+" ";
            sta.pop();
        }
        ans+=sta.peek();
        
        System.out.println("after the reverse the string");
        System.out.println(ans);
    }
}

//time complexity:O(n);
//space complexity:O(n);




import java.io.*;
class Main {
    static private String result(String s){
        int left=0;
        int right=s.length()-1;
        
        String temp="";
        String ans="";
        
        while(left<=right){
            char c=s.charAt(left);
            //form a word
            if(c!=' '){
                temp=temp+c;
            }
            //add a word to ans
            else if(c==' '){
                if(!ans.equals("")){
                    ans=temp+" "+ans;
                }else{
            ans=temp;        
                }
                temp="";
            }
        left++;    
            
        }
        //last word to add specially
         if(!temp.equals("")){
                if(!ans.equals("")){
                    ans=temp+" "+ans;
                }else{
            ans=temp;        
                }
                temp="";
         }
         return ans;
    }
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        String st="naveen at a uniq";
        System.out.println("before the reverse the string");
        System.out.println(st);
        
         System.out.println("after the reverse the string");
        System.out.println(result(st));
    }
 }

//time complexity:O(n);
//space complexity:O(1);
