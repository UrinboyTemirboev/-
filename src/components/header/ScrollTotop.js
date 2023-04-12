import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from 'react'

export default function ScrollTotop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(1, 1);
    }, [pathname]);
  
    return null;
  
}
