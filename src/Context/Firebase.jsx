import { createContext, useContext } from "react";
export const FirebaseContext = createContext(null);
// Complete our context 

export const useFirebase = useContext(FirebaseContext);
// This is a custom hook to use the context

export const FirebaseProvider = (props) => {
    <FirebaseContext.Provider>
        {props.children}
    </FirebaseContext.Provider>
};
// Complete the  provider
