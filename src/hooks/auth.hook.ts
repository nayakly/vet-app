import React from "react";

function useLogin() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoggedIn(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loggedIn;
}
