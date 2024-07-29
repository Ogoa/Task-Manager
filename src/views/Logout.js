import React from 'react';

const Logout = () => {
    const handleLogout = () => {
        console.log('Logging out...');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;