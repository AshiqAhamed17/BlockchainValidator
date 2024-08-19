import React from 'react';
import Block from './Block';

function BlockchainView({ blockchain, handleCreateBlock }) {
    return (
        <div id="blockchain">
            <button onClick={handleCreateBlock}>Create New Block</button>
            {blockchain.map((block, index) => (
                <Block key={index} block={block} />
            ))}
        </div>
    );
}

export default BlockchainView;