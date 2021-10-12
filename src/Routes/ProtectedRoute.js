const ProtectedRoute =({ component: Component, ...restOfProps }) =>{
    const user = localStorage.getItem("user");
   
  
    return (
      <Route
        {...restOfProps}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
  
  export default ProtectedRoute;