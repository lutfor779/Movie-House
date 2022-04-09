import { useContext } from "react";
import { UtilitiesContext } from "../context/UtilitiesProvider";

const useData = () => {
	const data = useContext(UtilitiesContext);
	return data;
};

export default useData;
