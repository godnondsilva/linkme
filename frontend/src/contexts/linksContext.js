import { createContext, useState } from "react";

export const LinksContext = createContext({
    links: {},
    setLinks: () => { }
})

export const LinksProvider = ({ children }) => {
    const [links, setLinks] = useState([]);
    const value = { links, setLinks }

    return <LinksContext.Provider value={value}>{children}</LinksContext.Provider>
}