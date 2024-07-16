---
sidebar_position: 1
---

# Quick start

Here we are going to implement a simple Jetton using the Tonion toolkit to get you familiar with the Tonion quickly, in next chapters we will dive deep into details and make more complex contract and projects.

## Download the Jetton trait

In this quick guide we are going to use contract library of Tonion toolkit.

First of all, you have to go to [contracts/traits/tokens/Jetton](https://github.com/ton-ion/tonion-contracts/tree/main/contracts/traits/tokens/jetton) trait directory and clone source code of both `JettonWallet.tact` and `JettonMaster.tact`, Alternatively you can get them using [Tonion CLI](../4-CLI/index.md).

## Adding library to imports

Once you had the source code of traits, you need to initialize your project using [blueprint](https://github.com/ton-org/blueprint). Once you had your project ready, you can add it to `contracts/imports/tonion` directory (if you use Tonion CLI it will do it for you).

## Writing our own token

We are going to call our token `TonionJetton` as example.
so we create these files:
1. `contracts/TonionJettonMater.tact`
2. `contracts/TonionJettonWallet.tact`

:::warning
Don't forget to change the Jetton name(TonionJetton) to your jetton name!
:::

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
import "../imports/JettonMaster.tact";
import "../imports/JettonWallet.tact";

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

## Jetton implementation without Tonion

Let's implement a Jetton master and wallet **without Tonion** 🙂 :

**[Tact by example basic jetton implementation](https://tact-by-example.org/07-jetton-standard)**
