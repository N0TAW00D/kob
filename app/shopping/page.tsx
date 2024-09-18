import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";
import Header from "../props/page";
import UserProfile from "../multi-props/page";

export default function Page(){
    return (
        <>
        <div>Header and Props</div>
        <Header title="Up" />

        <div>My Products from server</div>
        <ServerComponent />

        <div>Products from Client</div>
        <ClientComponent />

        <div>User Profile</div>
        <UserProfile name="Up" age={39} email="natthwat.prim@gmail.com"/>
        
        </>
    )
}









