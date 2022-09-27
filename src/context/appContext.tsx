import React,{ createContext } from "react";
import useGetCurrentDayData from "../hooks/useGetCurrentDayData";

const currentDayData = useGetCurrentDayData;


const AppContext = createContext(currentDayData);

// function AppProvider(props) {
//     return (
//         <AppContext.Provider value={currentDayData}>
//             {props}
//         </AppContext.Provider>
//     )
// }

export default AppContext;