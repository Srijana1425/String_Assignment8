# String_Assignment8
 **Question 1**<br>
Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.<br>
**Example 1:**<br>
**Input:** s1 = "sea", s2 = "eat"<br>
**Output:** 231<br>
**Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.<br><br><br>

*Answer*<br>
**code** [Link]()<br>
**********************************************************************************************************************
**Question 2**<br>
Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.
The following rules define a **valid** string:<br>
- Any left parenthesis '(' must have a corresponding right parenthesis ')'.<br>
- Any right parenthesis ')' must have a corresponding left parenthesis '('.<br>
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.<br>
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".<br>
**Example 1:**<br>
**Input:** s = "()"<br>
**Output:** true<br><br>

*Answer*<br>
**code** [Link]()<br>
**********************************************************************************************************************
**Question 3**<br>
Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.
In one **step**, you can delete exactly one character in either string.<br>
**Example 1:**<br>
**Input:** word1 = "sea", word2 = "eat"<br>
**Output:** 2<br>
**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".<br><br>

*Answer*<br>
**code** [Link]()<br>
**********************************************************************************************************************
**Question 4**<br>
You need to construct a binary tree from a string consisting of parenthesis and integers.<br>
The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.<br><br>
![Q4]()<br>
**Input:** s = "4(2(3)(1))(6(5))"<br>
**Output:** [4,2,6,3,1,5]<br><br>

*Answer*<br>
**code** [Link]()<br>
**********************************************************************************************************************
**Question 5**<br>
Given an array of characters chars, compress it using the following algorithm:<br>
Begin with an empty string s. For each group of **consecutive repeating characters** in chars:<br>
- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.<br>
The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
After you are done **modifying the input array,** return *the new length of the array*.
You must write an algorithm that uses only constant extra space.<br>
**Example 1:**<br>
**Input:** chars = ["a","a","b","b","c","c","c"]<br>
**Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]<br>
**Explanation:** The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".<br><br>
 
*Answer*<br>
**code** [Link]()<br>
**********************************************************************************************************************
 **Question 6**<br>
Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.
An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.<br>
**Example 1:**<br>
**Input:** s = "cbaebabacd", p = "abc"<br><br>
**Output:** [0,6]<br>
**Explanation:**<br>
The substring with start index = 0 is "cba", which is an anagram of "abc".<br>
The substring with start index = 6 is "bac", which is an anagram of "abc".<br><br>


*Answer*<br>
**code** [Link]()<br>
**********************************************************************************************************************
**Question 7**<br><br><br>
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.<br>
You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.<br><br>
**Example 1:**<br>
**Input:** s = "3[a]2[bc]"<br>
**Output:** "aaabcbc"<br><br>

*Answer*<br>
**code** [Link]()<br>
**********************************************************************************************************************
**Question 8**<br>
Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*
Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].<br>
- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".<br>
**Example 1:**<br>
**Input:** s = "ab", goal = "ba"<br><br>
**Output:** true<br>
**Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.<br><br>


*Answer*<br>
**code** [Link]()<br>
