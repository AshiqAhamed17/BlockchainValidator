import { useState } from 'react';
import { createGenesisBlock, createNewBlock, validateBlockchain } from '../utils/blockchainUtils';

export function useBlockchain() {
    const [blockchain, setBlockchain] = useState([createGenesisBlock()]);
    const [isValid, setIsValid] = useState(true);

    const addBlock = (data) => {
        if (data) {
            const newBlock = createNewBlock(blockchain, data);
            const updatedBlockchain = [...blockchain, newBlock];
            setBlockchain(updatedBlockchain);
            setIsValid(validateBlockchain(updatedBlockchain));
        }
    };

    return { blockchain, isValid, addBlock };
}