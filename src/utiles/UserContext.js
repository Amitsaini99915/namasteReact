import { createContext } from "react";

const UserContext = createContext({
    loginDate : "default Name",
    searchData : "",
})
export default UserContext;