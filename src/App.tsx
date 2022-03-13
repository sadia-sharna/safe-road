import React from 'react';
import { AuthProvider } from './contexts';
import RouterConfig from './navigation/routerConfig';
import "./styles/style.css";

// Lazy load  Private layout, because it's not needed unless the user is logged in.
// This will make the public site more lightweight on JavaScript not loading dashboard
// contents (as they are not needed for the public view).

function App() {
  return (
    <>
      <AuthProvider>
        <RouterConfig />
      </AuthProvider>
    </>

  );
}

export default App;
