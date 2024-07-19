import { useEffect, useState } from "react";
import ContactRow from "./ContactRow";

const ContactList= ()=> {
  const [contactInfo, setContactInfo]= useState([]);
  useEffect(()=> {
    const getContacts= async()=> {
      const response= await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`);
      const responseJson= await response.json();
      setContactInfo(responseJson);
    }
    getContacts();
  },[]);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contactInfo.map((contact)=> {
          return <ContactRow key={contact.id} contact={contact} />;
        })
        }
      </tbody>
    </table>
    
  )
}
export default ContactList
