import { createContext } from "react";
export const FirebaseContext = createContext(null);
// Complete our context 

export const FirebaseProvider = (props) => {
    <FirebaseContext.Provider>
        {props.children}
    </FirebaseContext.Provider>
};
