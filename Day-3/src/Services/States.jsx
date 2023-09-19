import { createContext, useContext, useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Context = createContext();
export const States = ({ children }) => {

var navigate = useNavigate();
const[user,setUser]=useState(null);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const googleLogin = async () => 
  {
    try {
      await auth.signInWithPopup(provider);
      setUser(await auth.currentUser);
    } catch (err) {
      console.log(err);
    }
    console.log(user);
    // navigate("/home")
  };

    return(
        <Context.Provider value={{
          googleLogin,
          navigate,
          setEmail,
          setPassword
        }}
        >{children}
        </Context.Provider>
    );
};
export const useStates = () => useContext(Context);