# Open Hack XCM

## Challenges

### Challenge 1: Teleport PASEO Tokens from Relay Chain to a Parachain

#### 📝 Description
In this challenge, you will **teleport** PASEO tokens from the Polkadot Relay Chain to a specified parachain using the Polkadot API library. Teleportation is a trustless asset transfer where the Relay Chain burns the tokens, and the parachain mints an equivalent amount.

#### ✅ Task
- Use the **Polkadot API** to construct an XCM transaction that teleports PASEO from the **Relay Chain** to a given **Parachain**.
- Execute the transaction using a Polkadot wallet or a frontend UI that supports XCM.
- Verify that the PASEO tokens arrive at the parachain account.

---

### Challenge 2: Reserve Transfer PASEO Tokens from Asset Hub to the People Chain

#### 📝 Description
This challenge requires you to perform a **reserve-based transfer** of PASEO tokens. Unlike teleportation, a reserve transfer does not burn tokens but instead moves them under the control of the destination chain.

#### ✅ Task
- Construct an XCM transaction using **Polkadot API** to **transfer** PASEO from **Asset Hub** to the **People Chain**.
- Ensure the correct XCM instructions are used (`WithdrawAsset`, `BuyExecution`, `DepositReserveAsset`).
- Submit the transaction and verify the token balance on the People Chain.

---

## 🎯 Tips & Tricks

### 🔍 Convert Multi-Locations to Human-Readable Format

#### **Why is this useful?**
XCM messages use **multi-locations** to define assets and destinations. Understanding these formats helps in debugging and structuring correct transactions.

#### **Tool**
Visit [Paraspell XCM Playground](https://playground.paraspell.xyz/xcm-analyser) to convert multi-locations into human-readable formats.

#### **Example**
Given this **multi-location JSON**:
```json
{
    "parents": 1,
    "interior": {
        "X1": {
            "Parachain": 1000
        }
    }
}
