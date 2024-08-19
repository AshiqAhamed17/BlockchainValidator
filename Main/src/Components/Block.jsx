import React from 'react';

function Block({ block }) {
    return (
        <div className="block">
            <h2>Block #{block.index}</h2>
            <p><strong>Previous Hash:</strong> {block.prevHash}</p>
            <p><strong>Timestamp:</strong> {new Date(block.timestamp).toLocaleString()}</p>
            <p><strong>Data:</strong> {block.data}</p>
            <p><strong>Hash:</strong> {block.hash}</p>
        </div>
    );
}

export default Block;