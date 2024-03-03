import Checkout from "@/app/components/Checkout";
import React from "react";

// path: /User/Checkout

const page = () => {
    const sessionId = 'your-session-id';
  return (
    
      <  Checkout sessionId={sessionId}/>
    
  );
};

export default page;
