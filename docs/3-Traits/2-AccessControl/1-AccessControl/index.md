# AccessControl Trait

The `AccessControl` trait provides a flexible and extensible role-based access control mechanism. It allows you to manage different roles and their respective permissions within a smart contract. Roles can be granted, revoked, or renounced by accounts, and specific functions can be restricted to certain roles.

#### Properties

- **_roles**: `map<Int, RoleData>`
  - A mapping from role identifiers to their corresponding `RoleData`.
- **ADMIN_ROLE**: `Int`
  - A constant representing the administrator role. This is used as the default admin role for all roles.

#### Structs

- **RoleData**
  - **hasRole**: `map<Address, Bool>`
    - A mapping indicating which accounts have this role.
  - **adminRole**: `Int`
    - The role that has administrative privileges over this role.

#### Messages

- **GrantRoleMessage**
  - **role**: `Int`
  - **account**: `Address`

- **RevokeRoleMessage**
  - **role**: `Int`
  - **account**: `Address`

- **RenounceRoleMessage**
  - **role**: `Int`
  - **account**: `Address`

- **GrantRoleEvent**
  - **role**: `Int`
  - **account**: `Address`

- **RevokeRoleEvent**
  - **role**: `Int`
  - **account**: `Address`

- **RenounceRoleEvent**
  - **role**: `Int`
  - **account**: `Address`

#### Methods

- **_initRole(role: Int) -> Bool**
  - Initializes a role with an empty set of members and sets the admin role to `ADMIN_ROLE` if the role does not already exist.
  - **Parameters**: 
    - `role`: The identifier of the role to initialize.
  - **Returns**: `Bool` indicating if the role was initialized.

- **_setRoleAdmin(role: Int, adminRole: Int)**
  - Sets the admin role for a specific role.
  - **Parameters**: 
    - `role`: The identifier of the role.
    - `adminRole`: The identifier of the admin role.

- **_grantRole(role: Int, account: Address)**
  - Grants a role to an account if the account does not already have it.
  - **Parameters**: 
    - `role`: The identifier of the role to grant.
    - `account`: The account to which the role is granted.

- **_revokeRole(role: Int, account: Address)**
  - Revokes a role from an account if the account has the role.
  - **Parameters**: 
    - `role`: The identifier of the role to revoke.
    - `account`: The account from which the role is revoked.

- **_checkRole(role: Int, account: Address)**
  - Checks if an account has a specific role and throws an error if it does not.
  - **Parameters**: 
    - `role`: The identifier of the role.
    - `account`: The account to check.

- **_checkSenderRole(role: Int)**
  - Checks if the sender has a specific role and throws an error if they do not.
  - **Parameters**: 
    - `role`: The identifier of the role.

- **renounceRole(role: Int, account: Address)**
  - Allows an account to renounce a role it has.
  - **Parameters**: 
    - `role`: The identifier of the role to renounce.
    - `account`: The account renouncing the role.

- **revokeRole(role: Int, account: Address)**
  - Revokes a role from an account. Only callable by accounts with the admin role for the specified role.
  - **Parameters**: 
    - `role`: The identifier of the role to revoke.
    - `account`: The account from which the role is revoked.

- **grantRole(role: Int, account: Address)**
  - Grants a role to an account. Only callable by accounts with the admin role for the specified role.
  - **Parameters**: 
    - `role`: The identifier of the role to grant.
    - `account`: The account to which the role is granted.

- **hasRole(role: Int, account: Address) -> Bool**
  - Checks if an account has a specific role.
  - **Parameters**: 
    - `role`: The identifier of the role to check.
    - `account`: The account to check.
  - **Returns**: `Bool` indicating if the account has the role.

- **getRoleAdmin(role: Int) -> Int**
  - Retrieves the admin role for a specific role.
  - **Parameters**: 
    - `role`: The identifier of the role to check.
  - **Returns**: `Int` representing the admin role.

#### Receive Handlers

- **receive(msg: GrantRoleMessage)**
  - Handles messages to grant a role.
  - **Parameters**: 
    - `msg`: The `GrantRoleMessage` containing the role and account.

- **receive(msg: RevokeRoleMessage)**
  - Handles messages to revoke a role.
  - **Parameters**: 
    - `msg`: The `RevokeRoleMessage` containing the role and account.

- **receive(msg: RenounceRoleMessage)**
  - Handles messages to renounce a role.
  - **Parameters**: 
    - `msg`: The `RenounceRoleMessage` containing the role and account.

### Usage Example

To use the `AccessControl` trait in your smart contract, follow these steps:

1. **Import the AccessControl Trait**:
   Ensure that the `AccessControl` trait is imported into your contract file.

   ```ts showLineNumbers
   import "../imports/tonion/access/AccessControl.tact";
   ```

2. **Create Your Contract**:
   Extend your contract with the `AccessControl` trait. Implement the required methods and initialize the variables as needed.

   ```ts showLineNumbers
    import "../imports/tonion/access/AccessControl.tact";
   contract MyAccessControlContract with AccessControl {
       init() {
           // Initialize roles as needed
           self._initRole(self.ADMIN_ROLE);
           self._grantRole(self.ADMIN_ROLE, context().sender);
       }

       receive("GrantRoleMessage") {
           let msg: GrantRoleMessage = context().getMessage();
           self.grantRole(msg.role, msg.account);
       }

       receive("RevokeRoleMessage") {
           let msg: RevokeRoleMessage = context().getMessage();
           self.revokeRole(msg.role, msg.account);
       }

       receive("RenounceRoleMessage") {
           let msg: RenounceRoleMessage = context().getMessage();
           self.renounceRole(msg.role, msg.account);
       }
   }
   ```

In this example:

- The `MyAccessControlContract` contract uses the `AccessControl` trait to manage role-based access control.
- The `init` method initializes the `ADMIN_ROLE` and grants it to the contract deployer.
- The `receive` methods handle messages to grant, revoke, and renounce roles.

By following these steps, you can integrate and use the `AccessControl` trait in your smart contracts to manage roles and permissions effectively.