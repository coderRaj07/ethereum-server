const Web3 = require('web3');
const { web3, contractABI } = require('../config/web3Config');
const dotenv = require('dotenv');

dotenv.config();

const contractAddress = process.env.CONTRACT_ADDRESS;
const adminPrivateKey = process.env.ADMIN_PRIVATE_KEY;
const adminAddress = process.env.ADMIN_ADDRESS;

// Initialize contract with web3.js
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Set message on the blockchain
exports.setMessage = async (req, res) => {
    const { message, adminAddress } = req.body;

    // Check if request is from admin address
    // if (req.headers.authorization !== adminAddress) {
    //     return res.status(401).json({ error: 'Unauthorized' });
    // }

    try {
        const nonce = await web3.eth.getTransactionCount(adminAddress, 'latest'); // get latest nonce
        const data = contract.methods.setMessage(message).encodeABI(); // encode ABI of the method

        // Estimate gas for the transaction
        const gasEstimate = await web3.eth.estimateGas({
            from: adminAddress,
            to: contractAddress,
            data
        });

        const signedTx = await web3.eth.accounts.signTransaction({
            to: contractAddress,
            data,
            gas: gasEstimate,
            gasPrice: web3.utils.toWei('10', 'gwei'), // Example gas price in gwei
            nonce,
        }, adminPrivateKey);

        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        res.json({ message: 'Message set successfully', transactionHash: receipt.transactionHash });
    } catch (error) {
        console.error('Error setting message:', error);
        res.status(500).json({ error: 'Failed to set message' });
    }
};

// Get message from the blockchain
exports.getMessage = async (req, res) => {
    try {
        const message = await contract.methods.getMessage().call();
        res.status(200).send({message})
    } catch (error) {
        console.error('Error getting message:', error);
        res.status(500).json({ error: 'Failed to get message' });
    }
};
