import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex items-center justify-between relative">
      {children}
    </div>
  );
};

export default AuthLayout;
