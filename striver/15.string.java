
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



//to find the longest length of the palindrome diven string:




class Main {
    public static void main(String[] args) {
        String input="abcdefghhgfedcba";
        System.out.println(longestpalindrome(input));
    }    
    public static String longestpalindrome(String s){
        int start=0,end=0;
        for(int i=0;i<s.length();i++){
            int len1=expandfromcenter(s,i,i);//verify the odd lengt palindrome
            int len2=expandfromcenter(s,i,i+1);//verify the even length palindrome
            int len=Math.max(len1,len2);
            
            if(len>(end-start)){
                start=i-((len-1)/2);
                end=i+(len/2);
            }
        }
        return s.substring(start,end+1);//substring exclude the end so we add the +1 at end
    }
    //using the center location we decrease the pointer at left and incrase the pointer at the right
       public static int expandfromcenter(String s,int left,int right){
       while(left>=0&&right<s.length()&&s.charAt(left)==s.charAt(right)){
           left--;
           right++;
       }
        return right-left-1;
    }
}



//686. Repeated String Match
// Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.
// Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc".

// Example 1:
// Input: a = "abcd", b = "cdabcdab"
// Output: 3
// Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.


// class Solution {
//     public int repeatedStringMatch(String a, String b) {
        
//         StringBuilder repeated=new StringBuilder();
//         int count=0;

//         while(repeated.length()<=a.length()+b.length()){
//             if(repeated.toString().contains(b)){
//                 return count;
//             }

//            repeated.append(a);
//             count++;
//         }
// return -1;
//     }
//     public static void main(String[] args){
//         Solution solution=new Solution();

//          System.out.println(solution.repeatedStringMatch("abcd", "cdabcdab")); 
//         System.out.println(solution.repeatedStringMatch("efgh", "iefghe")); 


//     }
// }




class Solution {
  public int repeatedStringMatch(String a, String b) {
  int repeated=(int) Math.ceil((double) b.length()/a.length());
System.out.println(repeated); 
  StringBuilder repeat=new StringBuilder();
System.out.println(repeat); 

  // Append `a` `repeated` times to the StringBuilder
    for (int i = 0; i < repeated; i++) {
      repeat.append(a);
    }

            if(repeat.toString().contains(b)){
                return repeated;
            }

           repeat.append(a);

             if(repeat.toString().contains(b)){
                return repeated+1;
            }
return -1;
    }
    public static void main(String[] args){
        Solution solution=new Solution();

         System.out.println(solution.repeatedStringMatch("abcd", "cdabcdab")); 
        System.out.println(solution.repeatedStringMatch("efgh", "iefghe")); 
    }
}


