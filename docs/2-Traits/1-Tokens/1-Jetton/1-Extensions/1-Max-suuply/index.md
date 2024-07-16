---
sidebar_position: 1
---

# Max Supply Jetton


The `MaxSupply` trait provides functionality to manage and enforce a maximum supply limit for tokens. This trait can be used in smart contracts to ensure that the total supply of tokens does not exceed a predefined maximum value.

## Properties

- **max_supply**: `Int`
  - Represents the maximum number of tokens that can be minted.

- **total_supply**: `Int`
  - Represents the current total number of tokens that have been minted.

## Methods

- **requireMaxSupply(mintAmount: Int)**
  - Ensures that minting a specified amount of tokens does not exceed the maximum supply.
  - Throws an error with code `7878` if the minting amount would exceed the maximum supply.
  - **Parameters**:
    - `mintAmount`: The number of tokens to be minted.
  - **Example**:
    ```ts
    self.requireMaxSupply(100);
    ```

- **checkMaxSupply(mintAmount: Int) -> Bool**
  - Checks if minting a specified amount of tokens would exceed the maximum supply.
  - Returns `true` if the minting amount does not exceed the maximum supply, otherwise returns `false`.
  - **Parameters**:
    - `mintAmount`: The number of tokens to be minted.
  - **Returns**: `Bool`
  - **Example**:
    ```ts
    let canMint = self.checkMaxSupply(100);
    ```

- **isMaxSupplyReached -> Bool**
  - A getter function that checks if the total supply has reached the maximum supply.
  - Returns `true` if the total supply is equal to the maximum supply, otherwise returns `false`.
  - **Returns**: `Bool`
  - **Example**:
    ```ts
    let maxReached = self.isMaxSupplyReached;
    ```

- **maxSupply -> Int**
  - A getter function that returns the maximum supply value.
  - **Returns**: `Int`
  - **Example**:
    ```ts
    let maxSupply = self.maxSupply;
    ```

## Importing and Using the MaxSupply Trait

To use the `MaxSupply` trait in your smart contract, follow these steps:

1. **Import the Required Modules**:
   Ensure that the required traits and deployable modules are imported in your contract file.

   ```ts
    import "@stdlib/deploy";
    import "../imports/tonion/tokens/jetton/JettonMaster.tact";
    import "../imports/tonion/tokens/jetton/JettonWallet.tact";
    import "../imports/tonion/tokens/jetton/extensions/MaxSupply.tact";
   ```

2. **Create Your Contract**:
   Extend your contract with the `JettonMaster`, `MaxSupply`, and `Deployable` traits. Implement the required methods and initialize the variables as needed.

   ```ts title="contracts/TonionMaxSupplyJetton.tact" showLineNumbers
    import "@stdlib/deploy";
    import "../imports/tonion/tokens/jetton/JettonMaster.tact";
    import "../imports/tonion/tokens/jetton/JettonWallet.tact";
    import "../imports/tonion/tokens/jetton/extensions/MaxSupply.tact";

   contract MyMaxSupplyJetton with JettonMaster, MaxSupply, Deployable {
       total_supply: Int as coins;
       max_supply: Int as coins;
       owner: Address;
       jetton_content: Cell;
       mintable: Bool;

       init(owner: Address, content: Cell){
           self.total_supply = 0;
           self.max_supply = ton("1000");
           self.owner = owner;
           self.mintable = true;
           self.jetton_content = content;
       }

       override inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit {
           return initOf JettonWalletImp(owner_address, myAddress());
       }

       override inline fun _mint_validate(ctx: Context, msg: JettonMint) {
           require(ctx.sender == self.owner, "JettonMaster: Sender is not a Jetton owner");
           require(self.mintable, "JettonMaster: Jetton is not mintable");
           self.requireMaxSupply(msg.amount);
       }

       receive("Mint:Close"){
           let ctx: Context = context();
           require(ctx.sender == self.owner, "JettonMaster: Sender is not a Jetton owner");
           self.mintable = false;
       }
   }
   ```

By following these steps, you can import and use the `MaxSupply` trait in your smart contract to manage and enforce a maximum supply limit for your tokens on the TON blockchain.