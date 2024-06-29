const {Web3} = require('web3');
const dotenv = require('dotenv');

dotenv.config();

// Using web3js to connect to the network
const web3 = new Web3(`https://polygon-amoy.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "initialMessage",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "newMessage",
				"type": "string"
			}
		],
		"name": "MessageChanged",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newMessage",
				"type": "string"
			}
		],
		"name": "setMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMessage",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
console.log("web3",web3)
module.exports = { web3, contractABI };
