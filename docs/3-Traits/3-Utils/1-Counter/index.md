---
sidebar_position: 1
---

# Counter Trait

The `Counter` trait provides a simple counter mechanism that can only be incremented or decremented by one. This can be useful for tracking the number of elements in a mapping, issuing NFT IDs, counting request IDs, and more.

#### Properties

- **Counter**: `Int`
  - Represents the current count. This variable should not be accessed directly by users of the library; interactions should be restricted to the library's functions.
  - **Default Value**: `0`

#### Methods

- **current() -> Int**
  - A getter function that returns the current value of the counter.
  - **Returns**: `Int`
  - **Example**:
    ```ts
    let currentValue = self.current();
    ```

- **increment()**
  - Increments the counter value by one.
  - **Example**:
    ```ts
    self.increment();
    ```

- **decrement()**
  - Decrements the counter value by one.
  - **Example**:
    ```ts
    self.decrement();
    ```

### Usage Example

To use the `Counter` trait in your smart contract, follow these steps:

1. **Import the Counter Trait**:
   Ensure that the `Counter` trait is imported into your contract file.

   ```tact
   import "../imports/tonion/utils/Counter.tact";
   ```

2. **Create Your Contract**:
   Extend your contract with the `Counter` trait. Implement the required methods and initialize the variables as needed.

   ```ts showLineNumbers
   import "../imports/tonion/utils/Counter.tact";
   contract MyCounterContract with Counter {
       // Initialize the Counter
       init() {
           self.Counter = 0;
       }

       // Use the increment method
       receive("IncrementCounter") {
           self.increment();
       }

       // Use the decrement method
       receive("DecrementCounter") {
           self.decrement();
       }

       // Get the current counter value
       receive("GetCounter") {
           let currentValue: Int = self.current();
           // Send the current value back to the caller
       }
   }
   ```

In this example:

- The `MyCounterContract` contract uses the `Counter` trait to manage a counter.
- The `init` method initializes the counter to `0`.
- The `receive` methods allow for incrementing, decrementing, and getting the current counter value through specific messages.
- The `increment` and `decrement` methods are used to modify the counter value.
- The `current` method is used to retrieve the current value of the counter.

By following these steps, you can integrate and use the `Counter` trait in your smart contracts to efficiently manage and track a simple counter.