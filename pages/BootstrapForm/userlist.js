import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import User from "./user";

function UserList(props) {
  const { users, setUsers } = props;
  
  console.log("====users===", users);
  const handleDeleteUser = (index) => {
    const newUsers = users.filter((user, uIndex) => {
      return uIndex !== index;
    });

    setUsers(newUsers);
  };
  return (
    <div>
      <Row>
        <Col>
          <h4>Name</h4>
        </Col>
        <Col>
          <h4>Password</h4>
        </Col>
        <Col> <h4> E-mail </h4></Col>
        <Col> <h4>*</h4></Col>
      </Row>
    
      {users.map((user, index) => {
        return (
          <User
            index={index}
            key={`user-${index}`}
            name={user.name}
            password={user.password}
            eMail = {user.eMail}
            handleDeleteUser={handleDeleteUser}
          />
        );
      })}
    </div>
  );
}

export default UserList;
