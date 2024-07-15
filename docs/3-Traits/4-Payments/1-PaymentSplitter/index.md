# PaymentSplitter Trait

The `PaymentSplitter` trait provides a mechanism to split payments among a group of accounts based on their shares. Each account is assigned a number of shares, and payments are distributed proportionally to these shares.

## Properties

- **_totalShares**: `Int`
  - The total number of shares assigned to all payees.
  
- **_totalReleased**: `Int`
  - The total amount of funds that have been released to all payees.
  
- **_shares**: `map<Address, Int>`
  - A mapping of account addresses to their assigned shares.
  
- **_released**: `map<Address, Int>`
  - A mapping of account addresses to the amount of funds they have received.

## Methods

- **_addPayee(account: Address, shares_: Int)**
  - Adds a new payee to the contract.
  - **Parameters**: 
    - `account`: The address of the payee.
    - `shares_`: The number of shares assigned to the payee.
  - **Logic**: 
    - Ensures the number of shares is greater than 0.
    - Ensures the account does not already have shares.
    - Adds the shares to the `_shares` mapping.
    - Updates the `_totalShares`.

- **_release(account: Address)**
  - Releases the payment for a specific account based on their shares.
  - **Parameters**: 
    - `account`: The address of the payee.
  - **Logic**: 
    - Ensures the account has shares.
    - Calculates the payment due to the account.
    - Sends the payment to the account.
    - Updates the `_released` mapping and `_totalReleased`.

- **released(account: Address) -> Int?**
  - Returns the amount of funds released to a specific account.
  - **Parameters**: 
    - `account`: The address of the payee.
  - **Returns**: The amount of funds released to the account.

- **shares(account: Address) -> Int?**
  - Returns the number of shares assigned to a specific account.
  - **Parameters**: 
    - `account`: The address of the payee.
  - **Returns**: The number of shares assigned to the account.

- **totalReleased() -> Int**
  - Returns the total amount of funds released to all payees.
  - **Returns**: The total amount of funds released.

- **totalShares() -> Int**
  - Returns the total number of shares assigned to all payees.
  - **Returns**: The total number of shares.

## Usage Example

To use the `PaymentSplitter` trait in your smart contract, follow these steps:

1. **Import the PaymentSplitter Trait**:
   Ensure that the `PaymentSplitter` trait is imported into your contract file.

   ```ts showLineNumbers
   import "../imports/tonion/payment/paymentSplitter.tact";
   ```

2. **Create Your Contract**:
   Extend your contract with the `PaymentSplitter` trait and implement the required methods.

   ```ts showLineNumbers
   contract MyPaymentSplitter with PaymentSplitter, Ownable {
    owner: Address;
    _totalShares: Int;
    _totalReleased: Int as coins;
    _shares: map<Address, Int>;
    _released: map<Address, Int>;

    init(owner: Address){
        self.owner = owner;
        self._totalReleased = 0;
        self._totalShares = 0;
    }

    receive(msg: AddPayee){
        self.requireOwner();
        self._addPayee(msg.payee, msg.shares);
        self.reply("refund".asComment());
    }

    receive("release"){
        let ctx: Context = context();
        self._release(ctx.sender);
        self.reply("refund".asComment());
    }
   }
   ```

In this example:

- The `MyPaymentSplitter` contract uses the `PaymentSplitter` trait to manage payments.
- The `init` method initializes the payment splitter.

By following these steps, you can integrate and use the `PaymentSplitter` trait in your smart contracts to manage and distribute payments effectively.