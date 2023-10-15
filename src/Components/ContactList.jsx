import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../Slice/Slices";

function ContactList() {

  const lists = useSelector((state) => state.list);
  const dispatch = useDispatch()
  return (
    <div>
      ContactList
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email Addess</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
        {lists.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.label}</td>
              <td onClick={()=>dispatch(deleteContact(item.id))}>delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
