# Lonked Lists

Linked List is a data structure that consists of a sequence of nodes. Each node is composed of data and a reference/link to the next node in the sequence. The last node in the sequence points to null.

Usually, the first node in the sequence is called the head and the last node is called the tail.

Unlike arrays, linked lists dont have indexes. To access a node in a linked list, you have to start at the head and iterate through the nodes until you reach the desired node.

In memory, they are not stored in a contiguos block of memory, but rather scattered throughout memory. This is because each node has a reference to the next node in the sequence. So unlike arrays, you can not instantly access a node in a linked list.

#Detect Cycle

```js
// Flody's Tortoise and Hare Algorithm
// Time Complexity: O(n)
// It's designed to detect a cycle in a linked list
// It uses two pointers, one slow and one fast
// Fast one moves two nodes at a time, slow one moves one node at a time
// Analogy: two runners running on a track, one faster than the other
export function hasCycle(list) {
    let slow = list.head
    let fast = list.head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow.value === fast.value) {
            return true
        }
    }

    return false
}
```

This algorithm is pretty interesting. It's designed to detect a cycle in a linked list. It uses two pointers, one slow and one fast. The fast one moves two nodes at a time, while the slow one moves one node at a time. If there is a cycle, the fast one will eventually catch up to the slow one. If there is no cycle, the fast one will reach the end of the list.

It's cool because when i initially tried solving this, i overcomplicated it, but this is so simple and beautiful.

# Reversed Linked List

```js
export function reverseLinkedList(list) {
    let prevNode = null
    let currentNode = list.head

    while (currentNode) {
        const nextNode = currenNode.next
        currentNode.next = prevNode
    }

    list.head = prevNode
}
```