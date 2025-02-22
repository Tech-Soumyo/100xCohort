// Memoizing Functions that Depend on Complex Objects

// When working with complex objects, such as deeply nested objects, the function may still be re-created due to changes in the reference of the object, even if its contents remain the same. Let’s consider a more complex example.
import React, { useState, useCallback } from "react";

function UpdateComponent({ onUpdate }) {
  console.log("UpdateComponent rendered");
  return <button onClick={onUpdate}>Update User</button>;
}

export const FnDepComplexObj = () => {
  const [user, setUser] = useState({ name: "", age: 30 });

  // Memoize the function that updates the user
  const updateUser = useCallback(() => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  }, [user]);

  console.log("Parent rendered");

  return (
    <div>
      <h2>
        {user.name}: {user.age} years old
      </h2>
      <UpdateComponent onUpdate={updateUser} />
    </div>
  );
};

// Breakdown:

// Without useCallback: The updateUser function would be re-created on every render, and the UpdateComponent would re-render unnecessarily.

// With useCallback: The function is only re-created when the user object changes, preventing unnecessary re-renders of the UpdateComponent.

// However, note that because the user object reference changes with each state update (due to React’s immutable nature), the function still re-creates more frequently than necessary. To avoid this, you could restructure the logic to avoid unnecessary dependency changes.
