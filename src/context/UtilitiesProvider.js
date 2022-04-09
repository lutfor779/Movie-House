import React, { createContext } from "react";
import useUtilites from "../hooks/useUtilites";

export const UtilitiesContext = createContext(null);

const UtilitiesProvider = ({ children }) => {
	const allContext = useUtilites();
	return (
		<UtilitiesContext.Provider value={allContext}>
			{children}
		</UtilitiesContext.Provider>
	);
};

export default UtilitiesProvider;
