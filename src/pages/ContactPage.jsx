import React from "react";
import ContactCard from "../components/ContactCard";

const people = [
  "Johnny Ahmad",
  "Samantha William",
  "Nadila Adja",
  "Tony Soap",
  "Karen Hope",
  "Jack Gallen",
  "Jordan Nico",
  "John Doe",
  "Vega D.",
  "Col J. Lays",
  "Vergo Vergana",
  "Angelina Crispy",
];

const ContactPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6 text-text dark:text-white">
        Contact
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {people.map((person) => (
          <ContactCard key={person} name={person} />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
