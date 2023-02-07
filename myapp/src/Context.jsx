import React from "react";
import { useContext, useReducer } from "react";
import image from "./assets/hero.jpg";
import image2 from "./assets/hero2.jpg";
import { reducer } from "./Reducer"; //export default nh kya thats`y {} mai lkha hai

// context api => data ko provide krna , share krna so for state management will use usereducer hook
// 1 create a context (its like a warehouse )
// 2 provider
// 3 consumer


const AppContext = React.createContext();

const initialState = {
    name: "",
    image: "",
};


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Farya Jamal",
                image: image,
            }
        })
    }

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "Farya ",
                image: image2,
            }
        })
    }

    return <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>{children}</AppContext.Provider>
};

// Global custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };