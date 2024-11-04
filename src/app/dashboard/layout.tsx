import React from "react";
import Header from "./components/Header";
import { Toaster, toast } from 'sonner'

export default function DashboardLayout({children}: 
    {children: React.ReactNode}){

        return(
            <>
            <Header/>
            <Toaster
            position="top-right"
            />
            {children}
            </>
        )

}