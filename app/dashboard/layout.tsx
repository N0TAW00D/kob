import { ReactNode } from "react";
import { NavLinks } from "../ui/nav-links";

export default function DashboardLayout({
    children,
}:{
    children: ReactNode;
}){
    return (
        <section>
            <NavLinks />
            
            <div>Title</div>
            {children}
        </section>
    )
}