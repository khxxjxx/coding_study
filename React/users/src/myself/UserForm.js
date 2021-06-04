// import React, { useState } from 'react';
// import './UserForm.css';

// const UserForm = props => {
//   const [userName, setUserName] = useState('');
//   const [userAge, setUserAge] = useState('');

//   const changeName = e => {
//     setUserName(e.target.value);
//   };

//   const changeAge = e => {
//     setUserAge(e.target.value);
//   };

//   const addUserHandler = e => {
//     e.preventDefault();

//     const user = {
//       name: userName,
//       age: +userAge,
//     };

//     props.onAddUser(user);

//     setUserName('');
//     setUserAge('');
//   };

//   return (
//     <form onSubmit={addUserHandler}>
//       <div className="user-form">
//         <label>Username</label>
//         <input type="text" onChange={changeName} value={userName} />
//         <label>Age (Years)</label>
//         <input
//           type="number"
//           min="1"
//           step="1"
//           onChange={changeAge}
//           value={userAge}
//         />
//         <button type="submit">Add User</button>
//       </div>
//     </form>
//   );
// };

// export default UserForm;
