import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Menu from "../components/Menu";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [age, setAge] = useState(0);
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=52`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
      });
  }, []);

  return (
    <div className="container">
      <div className="left">
        <Menu fullName={fullName} setFullName={setFullName} />
      </div>
      <div className="right">
        {users.map((user) => (
          <Card key={user.login.uuid} user={user} />
        ))}
      </div>
    </div>
  );
}
