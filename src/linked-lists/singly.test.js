import { it, expect } from 'vitest'
import { SinglyLinkedList } from './singly'

import {it, expect } from 'vitest'
import { SinglyLinkedList } from './singly'

//Test for creating a new list
it('should create a new list', () => {
    const list = new SinglyLinkedList()
    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)
    expect(list.length).toBe(0)
})

// Test for appending an element
it('should append an element to the list', () => {
    const list = new SinglyLinkedList()
    list.append(1)
    expect(list.head.value).toBe(1)
    expect(list.tail.value).toBe(1)
    expect(list.length).toBe(1)
})