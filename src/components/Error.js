import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err)
    console.log(err)
    return <h1>Error page  {err.status} {err.statusText}</h1>
}
export default Error;