# OwnableTransferable2Step Trait

The `OwnableTransferable2Step` trait extends the `Ownable` contract by adding a two-step mechanism for transferring ownership. This process ensures that the new owner explicitly accepts the ownership transfer, reducing the risk of accidental ownership transfers.

## Messages

- **ChangeOwner2Step**
  - **pendingOwner**: `Address`
  - Used to initiate the ownership transfer process by setting the pending owner.

- **ChangeOwner2StepOk**
  - **pendingOwner**: `Address`
  - Emitted as a response when the ownership transfer process is initiated.

- **AcceptOwnership2StepOk**
  - **newOwner**: `Address`
  - Emitted as a response when the new owner accepts the ownership transfer.

- **AcceptOwnership2Step**
  - Used by the pending owner to accept the ownership transfer.

## Properties

- **owner**: `Address`
  - The current owner of the contract.
  
- **_pendingOwner**: `Address?`
  - The address of the pending owner who is set to accept ownership.

## Methods

- **receive(msg: ChangeOwner2Step)**
  - Initiates the transfer of ownership to a new account.
  - **Parameters**: 
    - `msg`: The `ChangeOwner2Step` message containing the `pendingOwner` address.
  - **Logic**: 
    - Verifies that the sender is the current owner.
    - Sets the `_pendingOwner` to the new address.
    - Emits the `ChangeOwner2StepOk` event.

- **receive(msg: AcceptOwnership2Step)**
  - The new owner accepts the ownership transfer.
  - **Parameters**: 
    - `msg`: The `AcceptOwnership2Step` message.
  - **Logic**: 
    - Verifies that the sender is the `_pendingOwner`.
    - Transfers ownership to the sender.
    - Emits the `AcceptOwnership2StepOk` event.

- **_requirePendingOwner()**
  - Checks if the sender is the `_pendingOwner`.
  - **Logic**: 
    - Throws an error if the sender is not the `_pendingOwner`.

- **_transferOwnership(newOwner: Address)**
  - Transfers ownership of the contract to a new account.
  - **Parameters**: 
    - `newOwner`: The address of the new owner.
  - **Logic**: 
    - Sets the `owner` to the new address.
    - Clears the `_pendingOwner`.

- **pendingOwner() -> Address?**
  - Returns the address of the pending owner.
  - **Returns**: `Address?` representing the pending owner.

## Usage Example

To use the `OwnableTransferable2Step` trait in your smart contract, follow these steps:

1. **Import the OwnableTransferable2Step Trait**:
   Ensure that the `OwnableTransferable2Step` trait is imported into your contract file.

   ```ts showLineNumbers
   import "../imports/tonion/access/OwnableTransferable2Step.tact";
   ```

2. **Create Your Contract**:
   Extend your contract with the `OwnableTransferable2Step` trait and implement the required methods.

   ```ts showLineNumbers
   import "../imports/tonion/access/OwnableTransferable2Step.tact";
   contract MyTransferableContract with OwnableTransferable2Step {
       init(owner: Address) {
           self.owner = owner;
       }
   }
   ```

In this example:

- The `MyTransferableContract` contract uses the `OwnableTransferable2Step` trait to manage ownership transfer.
- The `init` method sets the initial owner.

By following these steps, you can integrate and use the `OwnableTransferable2Step` trait in your smart contracts to manage ownership transfers effectively.