import { ethers } from 'ethers';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const PROVIDER_URL = 'https://rpc.ankr.com/bsc'; // Replace with your provider URL

// Set up the provider (using Infura as an example)
const provider = new ethers.JsonRpcProvider(PROVIDER_URL);

// Load wallet using private key from environment variables
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);

// Check balance of the wallet
const checkBalance = async (): Promise<void> => {
    try {
        const balance = await provider.getBalance(wallet.address);
        console.log('Wallet Address:', wallet.address);
        console.log('Balance:', ethers.formatEther(balance), 'BNB');
    } catch (error) {
        console.error('Error fetching balance:', error);
    }
};

// Call the function to check balance
checkBalance();
