import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Menu from "../components/Menu";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [age, setAge] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [sortBy, setSortBy] = useState(["age", 0]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=52`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
      });
  }, []);

  let filteredUsers = users;
  if (fullName !== "") {
    filteredUsers = filteredUsers.filter((user) => {
      const fullNameLowerCase = fullName.toLowerCase();
      return (
        user.name.first.toLowerCase().includes(fullNameLowerCase) ||
        user.name.last.toLowerCase().includes(fullNameLowerCase)
      );
    });
  }

  if (age !== "") {
    filteredUsers = filteredUsers.filter((user) => user.dob.age === Number(age));
  }

  return (
    <div className="container">
      <div className="left">
        <Menu
          fullName={fullName}
          setFullName={setFullName}
          age={age}
          setAge={setAge}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
      <div className="right">
        {filteredUsers.map((user) => (
          <Card key={user.login.uuid} user={user} />
        ))}
      </div>
    </div>
  );
}