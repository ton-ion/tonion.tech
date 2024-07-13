---
sidebar_position: 1
---

# Quick start

Here we are going to implement a simple Jetton using the Tonion toolkit to get you familiar with the Tonion quickly, in next chapters we will dive deep into details and make more complex contract and projects.

## Download the Jetton trait

In this quick guide we are going to use contract library of Tonion toolkit.

First of all, you have to go to [Jetton](https://github.com/ton-ion/tonion-contracts/tree/main/contracts/traits/tokens/jetton) trait directory and download source code of both `JettonWallet.tact` and `JettonMaster.tact`, Alternatively you can get them using [Tonion CLI](https://github.com/ton-ion/tonion-cli).

## Adding library to imports

Once you had the source code of traits, you need to initialize your project using blueprint. Once you had your project ready, you can add it to `contracts/imports` directory (if you use Tonion CLI it will do it for you).

## Writing our own token

We are going to call our token Testetton as example, so we create these files: `contracts/TestettonMater.tact` and  `contracts/TestettonWallet.tact`. then we continue them by adding the following code:

contracts/TestettonMater.tact:

```ts
import "@stdlib/deploy";
import "../imports/JettonMaster.tact";
import "../imports/JettonWallet.tact";

contract TestettonMaster with JettonMaster, Deployable {
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
        return initOf TestettonWallet(owner_address, myAddress());
    }

}
```

contracts/TestettonWallet.tact:

```ts
import "@stdlib/deploy";
import "../imports/JettonMaster.tact";
import "../imports/JettonWallet.tact";

contract TestettonWallet with JettonWallet, Deployable {
    balance: Int as coins = 0;
    owner: Address;
    jetton_master: Address;

    init(owner: Address, jetton_master: Address) {
        self.owner = owner;
        self.jetton_master = jetton_master;
    }

    override inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit {
        return initOf TestettonWallet(owner_address, self.jetton_master);
    }
}
```

Now, lets explain each part and how you can customize them:

## Deploy our token
## Compare with full implementation from scratch
