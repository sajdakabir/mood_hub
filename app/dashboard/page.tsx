import Main from '@/components/Main'
import React from 'react'
import type { Metadata } from "next";
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';

export const metadata: Metadata = {
  title: "mood–Dashboard",
  description: "track your mood daily",
};


function DashboardPage() {
  const isAuthenticated= false;
  let children = (
     <Login />
  )

  if (isAuthenticated) {
    children =(
      <Dashboard/>
    )
  }

    return(
      <Main className=''> 
      {children}
      </Main>
    )
}


export default DashboardPage

