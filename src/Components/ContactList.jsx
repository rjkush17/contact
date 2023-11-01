import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../Slice/Slices";

function ContactList() {

  const lists = useSelector((state) => state.list);
  const dispatch = useDispatch()
  return (
    <div className="py-10 text-center w-10/12 mx-auto">
      <p className="text-3xl font-bold text-heading"> Contact List</p>
      <table className="w-full ">
        <thead className="border-y-4 border-heading ">
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email Addess</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody className="">
        {lists.map((item, index) => (
            <tr key={index} className="p-4">
              <td className="mt-4">{index+1}</td>
              <td>{item.name}</td>
              <td>{item.number}</td>
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
