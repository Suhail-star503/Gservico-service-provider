import { createContext, useState, useEffect } from "react";
export const AppData = createContext();

const ContextData = ({ children }) => {
    const [signin, setsignin] = useState(false);
    const [user, setUser] = useState(null);
    // Check auth status on mount
    

    return (
        <AppData.Provider value={{ signin, setsignin,user, setUser }}>
            {children}
        </AppData.Provider>
    );
};

export default ContextData;