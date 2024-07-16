---
sidebar_position: 1
---

# Jetton

## Use

### Download the Jetton trait

First of all, you have to go to [contracts/traits/tokens/Jetton](https://github.com/ton-ion/tonion-contracts/tree/main/contracts/traits/tokens/jetton) trait directory and clone source code of both `JettonWallet.tact` and `JettonMaster.tact`, Alternatively you can get them using [Tonion CLI](../../../4-CLI/index.md).

### Adding library to imports

Once you had the source code of traits, you need to initialize your project using [blueprint](https://github.com/ton-org/blueprint). Once you had your project ready, you can add it to `contracts/imports/tonion` directory (if you use Tonion CLI it will do it for you).

then we continue them by adding the following code:


### JettonMaster

```ts title="contracts/TonionJettonMater.tact" showLineNumbers
import "@stdlib/deploy";
import "../imports/tonion/JettonMaster.tact";
import "../imports/tonion/JettonWallet.tact";

contract TonionJettonMaster with JettonMaster, Deployable {
    total_supply: Int as coins;
    owner: Address;
    jetton_content: Cell;
    mintable: Bool;
    
    init(owner: Address, content: Cell){
        self.total_supply = 1000000;
        self.owner = owner;
        self.mintable = true;
        self.jetton_content = content;
    }

    override inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit {
        return initOf TonionJettonWallet(owner_address, myAddress());
    }
}
```
### JettonWallet

```ts title="contracts/TonionJettonWallet.tact" showLineNumbers
import "@stdlib/deploy";
import "../imports/tonion/JettonMaster.tact";
import "../imports/tonion/JettonWallet.tact";

contract TonionJettonWallet with JettonWallet, Deployable {
    balance: Int as coins = 0;
    owner: Address;
    jetton_master: Address;

    init(owner: Address, jetton_master: Address) {
        self.owner = owner;
        self.jetton_master = jetton_master;
    }

    override inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit {
        return initOf TonionJettonWallet(owner_address, self.jetton_master);
    }
}
```
:::tip
if you need customize **message receiver** you can define it in your Jetton contract
:::


#### Implementation
[**basic Jetton Implementation by JettonMaster and JettonWallet traits**](https://github.com/ton-ion/tonion-contracts/blob/main/contracts/mocks/tokens/jetton/JettonImp.tact)


## Master

The Jetton Master contract is responsible for managing the overall supply of Jettons, minting new Jettons, and handling burn notifications.

### Data Structures

- **JettonData**: This structure holds essential information about the Jetton, including:
  - `total_supply`: The total number of Jettons in circulation.
  - `mintable`: A boolean indicating if new Jettons can be minted.
  - `admin_address`: The address of the Jetton's administrator.
  - `jetton_content`: A cell containing the Jetton's metadata.
  - `jetton_wallet_code`: The code for initializing Jetton wallets.

### Messages

- **JettonMint**: This message is used to mint new Jettons.
  - `origin`: The address initiating the minting.
  - `receiver`: The address receiving the minted Jettons.
  - `amount`: The number of Jettons to be minted.
  - `custom_payload`: An optional cell for custom data.
  - `forward_ton_amount`: The amount of TON to forward.
  - `forward_payload`: The remaining slice of the forward payload.

### Methods

- **receive(msg: JettonMint)**: Handles the minting of new Jettons.
  - Validates the minting request using `_mint_validate`.
  - Mints the Jettons using `_mint`.

- **receive(msg: JettonBurnNotification)**: Handles burn notifications.
  - Validates the burn notification using `_burn_notification_validate`.
  - Processes the burn notification using `_burn_notification`.

- **calculate_jetton_wallet_init(owner_address: Address) -> StateInit**: Abstract method to calculate the initial state for a Jetton wallet.

- **_mint_validate(ctx: Context, msg: JettonMint)**: Validates minting conditions.
  - Ensures the sender is the Jetton owner.
  - Checks if minting is allowed.

- **_burn_notification_validate(ctx: Context, msg: JettonBurnNotification)**: Validates burn notifications.
  - Ensures the sender is a Jetton wallet.

- **_mint(ctx: Context, msg: JettonMint)**: Executes the minting process.
  - Updates the total supply.
  - Sends the Jettons to the receiver's wallet.

- **_burn_notification(ctx: Context, msg: JettonBurnNotification)**: Processes the burn notification.
  - Updates the total supply.
  - Sends any remaining TON to the response destination.

- **get_jetton_data() -> JettonData**: Returns the current Jetton data.

- **get_wallet_address(owner_address: Address) -> Address**: Calculates and returns the Jetton wallet address for a given owner.

## Jetton Wallet

The Jetton Wallet contract manages individual Jetton balances and handles transfers and burns of Jettons.

### Data Structures

- **WalletData**: This structure holds the wallet-specific data:
  - `balance`: The number of Jettons in the wallet.
  - `owner`: The address of the wallet owner.
  - `jetton`: The address of the Jetton master contract.
  - `jetton_wallet_code`: The code for initializing this wallet.

#### Messages

- **JettonTransfer**: This message is used to transfer Jettons.
  - `query_id`: An arbitrary request number.
  - `amount`: The number of Jettons to transfer.
  - `destination`: The address of the new Jetton owner.
  - `response_destination`: The address for sending transfer confirmation.
  - `custom_payload`: An optional custom payload.
  - `forward_ton_amount`: The amount of TON to forward.
  - `forward_payload`: The remaining slice of the forward payload.

- **JettonTransferNotification**: This message notifies about a Jetton transfer.
  - `query_id`: An arbitrary request number.
  - `amount`: The number of Jettons transferred.
  - `sender`: The address of the sender.
  - `forward_payload`: An optional custom payload.

- **JettonBurn**: This message is used to burn Jettons.
  - `query_id`: An arbitrary request number.
  - `amount`: The number of Jettons to burn.
  - `response_destination`: The address for sending burn confirmation.
  - `custom_payload`: An optional custom payload.

- **JettonBurnNotification**: This message notifies about a Jetton burn.
  - `query_id`: An arbitrary request number.
  - `amount`: The number of Jettons burned.
  - `sender`: The address of the sender.
  - `response_destination`: The address for sending burn confirmation.

### Methods

- **receive(msg: JettonTransfer)**: Handles the transfer of Jettons.
  - Validates the transfer using `_transfer_validate`.
  - Estimates the remaining value using `_transfer_estimate_remain_value`.
  - Executes the transfer using `_transfer_jetton`.

- **receive(msg: JettonBurn)**: Handles the burning of Jettons.
  - Validates the burn using `_burn_validate`.
  - Executes the burn using `_burn_tokens`.

- **receive(msg: JettonInternalTransfer)**: Handles internal Jetton transfers.
  - Validates the transfer using `_internal_transfer_validate`.
  - Updates the balance.
  - Sends a notification if required.
  - Handles any excess TON using `_internal_transfer_excesses`.

- **bounced(src: bounced < JettonInternalTransfer >)**: Handles bounced Jetton internal transfers.
  - Updates the balance.

- **bounced(src: bounced< JettonBurnNotification >)**: Handles bounced Jetton burn notifications.
  - Updates the balance.

- **calculate_jetton_wallet_init(owner_address: Address) -> StateInit**: Abstract method to calculate the initial state for a Jetton wallet.

- **_transfer_validate(ctx: Context, msg: JettonTransfer)**: Validates the transfer conditions.
  - Ensures the sender is the wallet owner.

- **_burn_validate(ctx: Context, msg: JettonBurn)**: Validates the burn conditions.
  - Ensures the sender is the wallet owner.

- **_transfer_estimate_remain_value(ctx: Context, msg: JettonTransfer)**: Estimates the remaining value after the transfer.
  - Ensures sufficient funds for the transfer.

- **_transfer_jetton(ctx: Context, msg: JettonTransfer)**: Executes the Jetton transfer.
  - Sends the Jettons to the destination address.

- **_burn_tokens(ctx: Context, msg: JettonBurn)**: Executes the Jetton burn.
  - Sends a burn notification to the Jetton master.

- **_internal_transfer_validate(ctx: Context, msg: JettonInternalTransfer)**: Validates internal transfers.
  - Ensures the sender is the Jetton master or another Jetton wallet.

- **_internal_transfer_estimate_remain_value(ctx: Context, msg: JettonInternalTransfer) -> Int**: Estimates the remaining value after the internal transfer.

- **_internal_transfer_notification(ctx: Context, msg: JettonInternalTransfer)**: Sends a notification if required by the internal transfer.

- **_internal_transfer_excesses(ctx: Context, msg: JettonInternalTransfer, remain: Int)**: Handles any excess TON after the internal transfer.
  - Sends the remaining TON to the response address if specified.

- **get_wallet_data() -> WalletData**: Returns the current wallet data.