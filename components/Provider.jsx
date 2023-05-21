"use client";

import { SessionProvider } from "next-auth/react";

// HOC
const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
