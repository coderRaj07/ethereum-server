# 🌐 Ethereum Server

This project sets up a Node.js server integrated with the Ethereum blockchain using Web3.js to interact with smart contracts.

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js (v14 or later)
- NPM
- Infura account for connecting to the Amoy testnet

### 🛠 Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/coderRaj07/ethereum-server
   cd ethereum-server
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create and configure the `.env` file:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   INFURA_PROJECT_ID=your_infura_project_id
   ADMIN_PRIVATE_KEY=your_admin_private_key
   CONTRACT_ADDRESS=your_deployed_contract_address
   ADMIN_ADDRESS=your_admin_address
   ```

   - `INFURA_PROJECT_ID`: Your Infura Project ID for the Amoy testnet.
   - `ADMIN_PRIVATE_KEY`: The private key of the admin account.
   - `CONTRACT_ADDRESS`: The address of the deployed smart contract.
   - `ADMIN_ADDRESS`: The public address of the admin account.

### 📦 Smart Contract Deployment

To deploy the smart contract, follow the instructions provided in the repository. After deployment, update the `.env` file with the `CONTRACT_ADDRESS`.

### 🏃‍♂️ Running the Server

To run the server locally:

```sh
npm start
```

or

```sh
node index.js
```

### 🌐 API Endpoints

Use Thunder Client or any API testing tool to interact with the API endpoints.

- **GET** `/api/message`: Retrieve the message.
  
  Example Response:

  ```json
  {
    "message": "3rd message"
  }
  ```

- **POST** `/api/message`: Set a message in the blockchain. The request body should contain `message` and `adminAddress`.

  Example Request Body:

  ```json
  {
    "message": "your_message",
    "adminAddress": "your_admin_address"
  }
  ```

  Example Response:

  ```json
  {
    "message": "Message set successfully",
    "transactionHash": "0x18aad679b5228cfecd6a94daeaddd47863eab072d046ffb204af20cda66f58b5"
  }
  ```

  **Note:** The message can only be set by the admin wallet address specified in the `adminAddress` field.

### 📊 Smart Contract Interaction

For detailed smart contract interaction, refer to the [Amoy testnet smart contract events](https://www.oklink.com/amoy/address/0xa891bfa07c174c447963e14fd8b8fc5c3a899f56/event).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
