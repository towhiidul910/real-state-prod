"use client";

import StoreProvider from "@/state/redux";
import { Authenticator } from "@aws-amplify/ui-react";
import Auth from "./(auth)/authProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Authenticator.Provider>
        <Auth>{children}</Auth>
      </Authenticator.Provider>
    </StoreProvider>
  );
};

export default Providers;

// In Next.js 15 (with TypeScript and App Router), provider.tsx is needed to wrap the application with a global state management provider.

// Since you're using Redux, provider.tsx ensures that all components in your app can access the Redux store.
