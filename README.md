
# data_structures_and_algorithms_javascript

This repo is where i implement and document data structures and algorithms.

# Introduction

Data Structures and Algorithms focuses on problem solving.

# What are Data Structures?

Coding is just manipulating data in a way so that you can accomplish a task.

There are values and relationships between them.

We can move, insert, and manipulate data.

Data structures have different kinds of relationships and different ways of storing data.

Data structures are a particular way of organising data in a computer so that it can be accessed and modified efficiently.

Data structures are categorized into two main types: primitive and non-primitive. Primitive data structures include basic types like integers, floats, and characters, while non-primitive structures, which are complex, include arrays, lists, trees, and graphs.

# Complexity Analysis 

The process of determining how efficient an algorithm is. It is a measure of how much time and space an algorithm needs to run.

These are called time complexity and space complexity.

# Memory 

Memory can be visualised as a canvas. memory canvas is bounded. We have a finite amount of memory. Your program will store your variables in memory slots or a row of memory slots for related data e.g arrays.

In a computer, memory is organised as a large number of bytes. Each byte is used to store value and has a unique address. The computer can perform read or write operations to these addresses.

A memory block is a section of computer memory where each byte is right next to its neighbor, without any gaps or interruptions, this arrangement makes it easier for the computer to read and write multiple pieces of related data.

You often use memory blocks for storing groups of data that belong together, such as the elements in an array or the characters in a string. By keeping them arranged like that, the computer can access the data more efficiently.

Different computer architecture have different memory block sizes. For example, a 32-bit computer has a memory block of 32 bits, or 4 bytes. A 64-bit computer has a memory block size of 64 bits, or 8 bytes. This means that e.g numbers on a 32-bit computer are stored in 4 bytes, while numbers on a 64-bit computer are stored in 8 bytes. So the computer needs to find 4 bytes of free memory to store a number on a 32-bit computer, but 8 bytes of free memory to store a number on a 64-bit computer.

ASCII is a character encoding standard that assigns each character a number betweeen 0 and 127. For example, the ASCII number for the character A is 65, and the ASCII number for the character B is 66. The ASCII number for 0 is 48, and the ASCII number for the character 9 is 57.

## Pointers

Pointers are variables that store the memory address of another variable. They are used to store the addresses of other variables. So in memory, a pointer would be stored in a memory slot, and it would point to another memory slot.

## Computer accessing memory

Computer is able to access memory given a memory address very fast.

# Big O Notation

Big O notation is a way of describing how fast the runtime grows relative to the input as the input gets arbitrarily large.

Different algorithms can have different runtimes for the same input. And they would grow at different rates as the input gets arbitrarily large.

Different O notations:

- O(1) - **Constant Time:** The runtime is the same regardless of the input size e.g accessing an array by index.
- O(log n) - **Logarithmic Time:** The runtime grows logarithmically in proportion to the input size. This means that as the input gets arbitrarily large, the runtime grows very slowly e.g. if problem is divided in half each time.
- O(n log n) -**Linearithmic Time:** The runtime grows in proportion to N log N of the input size. This means that as the input gets arbitraly large, the runtime grows faster than linear time but slower than quadratic time e.g sorting algorithms.
- O(n) -**Linear Time:** The runtime grows directly in proportion to the input size. This means that as the input gets arbitraly large, the runtime grows very fast e.g iterating through an array.
- O(N^2) -**Quadratic Time:** The runtime grows quadratically in proportion to the input size. This means that as the input gets arbitraliy large, the runtime grows very fast e.g nested loops.
- O(2^n) -**Exponential Time:** The runtime grows exponentially in proportion to the input size. This means that as the input gets arbitrarily large, the runtime grows even faster than quadratic time e.g recursive algorithms that solve a problem of size N by recursively solving two smaller problems of size N-1.

## Mathematical term

Asymptotic analysis is a method of describing limiting behaviour. It is used in many branches of mathematics, but especially in mathematical analysis of algorithms. It looks like this: 

```
f(n) = O(g(n))
```

As N grows towards infinity, how does the runtime of the algorithm grow?

## What is N?

Abstract concept of input size. It is the number of elements in the input.

## Accessing in memory 

Accessing memory is O(1) constant time. If we had to access a number in a 32 bit number, we would need to access 4 bytes of memory. If we had to access a number in a 64 bit computer, we would need to access 8 bytes of memory. It is constant time because it doesnt matter how big the number is, we still access it via the address.

## Simplify Big O

We focus on how the runtime grows towards infinty. We drop the constants and coefficients. In Big O notation, you only keep the term that grows the fastest as the input size increases. This term is known as the dominant term.

When we have more complex big O expressions, we drop the less significant terms. Because as N grows towards infinity, the less significant terms become insignificant.

if you've different inputs, you can use different variables to represent them. For example, if you have two arrays of different sizes, you can use N and M to represent their sizes. But do not drop any of the variables.

**Drop Lower Order Terms:** In O(n^2 + n), the n term is much smaller than n^2 for large n, so it's dropped, simplifying to O(n^2).

**Ignore Coefficients:** Big O ignores constants because it's about growth rates. For example, O(2n) simplifies to O(n), and O(5n^2) simplifies to O(n^2).

# Logarithm

A logarithm is essentially another way of expressing exponentation, which is where the process of multiplying a number by itself a certain number of times. For instance, \(2^3 = 2 \times 2 \times 2 = 8\). The logarithm asks the question: 'To what power do we raise a base number (like 2 in this example) to get another number?'

So, in our example, the logarithm of 8 with base 2 is 3 (written as \( \log_2 8 = 3 \)) because 2 raised to the power of 3 is 8.

Parts of a logarithm:

1. **Base:** This is the number that is being raised to a power. In \( \log_2 8 \), 2 is the base.
2. **Argument:** This is the number you want to find the logarithm of. In \( \log_2 8 \), 8 is the argument.
3. **Exponent:** This is the answer to the algorithm, the power to which the base must be raised to get the argument. In \( \log_2 8 = 3 \), 3 is the exponent.

## Explanation

Log of 2 to N = Y if (only if) 2^Y = N

Example: log of 2 to 8 = 3 because 2^3 = 8

2^4 = 16

If we double right side of the equation, we add 1 to the left side of the equation.

This means: 2^5 = 32

## Input in O Notation

Log of N, this means when N doubles, the runtime only increases by 1. this is good. This is better than linear time because linear time would increase by 2.

2^20 = 1.048,576
2^30 = 1,073,741,824

It's so powerful because as N grows, the runtime grows very slowly.

## Logarithm in Big O

Usually algorithms that involve dividing problems in half have logarithmic time complexity.

# Array

Let's say we have [1, 2, 3]. The program has to store this in memory. Imagine we have a 64 bit computer. Each number is 8 bytes of memory to store this array. The computer needs to find 24 bytes of free memory to store this array.

For recap: A byte consists of 8 bits. A bit is the smallest unit of memory. A byte is the smallest addressable unit of memory.

We have two types of arrays: static and dynamic.

## Static Arrays

Static arrays have fixed size. You have to specify the size of the array when you declare it. You can't add or remove elements from a static array. You can only update existing elements.

### Big O Notation 

### Get

Getting an element by index is O(1) constant time. This is because the computer can access the memory address of the element directly. It knows where the first element is stored. From there, it can calculate the memory address of the targeted element.

### Set 

Setting an element by index is O(1) constant time. It is simply swapping binary values.

### Initialize 

Initializing an array is O(n) linear time. This is because the computer has to intiliase each element in an array.

### Traverse 

Travessing an array is O(n) linear time. This is because the computer has to traverse each element in an array.

### Copy 

Copying an array is O(n) linear time. The computer first has to traverse each element in the array.  Then it has to copy each element to the new array. In memory, the computer has to find a new block of memory to store the new array.

People will do this mistake during coding interviews by thinking that copying an array is O(1) constant time. this is because they think that the computer can just copy the memory address of the array. But this is not true. The computer has to copy each element to the new array. In memory, the computer has to find a new block of memory to store the new array. You just don't copy.

### Insert 

Let's say we want to insert a place X. For the rest of the bytes in memory, we have to shift them to the right. However, the problem is that there may not be any space to the right. We would have the same problem if we want to insert at the beginning or end of the array.

When you insert to the array, no matter what position, the computer has to copy the entire array and find a new block of memory to store the new array.

Inserting an element is O(n) linear time.

### Pop

Pop means removing the last element of the array. This is O(1) constant time. This is because the computer can just remove the last element. It doesnt have to copy the entire array.

## Dynamic Arrays 

Dynamic array is an array that can grow and shrink in size. It is implemented by using a static array under the hood. When the array is full, we create a new array with double the size. Then we copy the elements from then old array. Then we delete the old array.

### Big O Notation 

### Insert

Inserting an element is typically O(1) constant time for Dynamic arrays. Because dynamic arrays allocate extra space. So when we insert an element we dont have to create extra a new array and copy the elements over. We can just insert the element into extra space.

However, we have to check if the array is full. If it is full, we have to create a new array with double its size. Then we copy the elements from the old array into the new array. Then we delete the old array. This is O(n) linear time. But we don't have to do this everytime we insert. We only do this when an array is full.

Because the worst case is O(n) linear time, we say that inserting an element is O(n) linear time.

## Interview

When doing interviews and using JS, you can use the built in array e.g treating it as a queue.  Explain to the interviewer you understand the big O of the built in array appears sufficient in one way but in reality it is different.

But you dont want to go through the trouble of importing a data structure. So you can use the built in array as a queue.

# Amortised Analysis

Amortised analysis averages the time required to perform a sequence of data structure operations over all the operations performed. Unlike average-case analysis, which considers probabilities of different inputs, amortised analysis guarantees the average performance of each operation in the worst case.

It provides a more realistic expectation of the algorithm's performance, especially when the algorithm has occassional costly operation
