import React from "react";
import { useTranslation } from "react-i18next";
import ContactCard from "../components/ContactCard";

const peopleKeys = [
  "contact.people.johnny",
  "contact.people.samantha",
  "contact.people.nadila",
  "contact.people.tony",
  "contact.people.karen",
  "contact.people.jack",
  "contact.people.jordan",
  "contact.people.johndoe",
  "contact.people.vega",
  "contact.people.colj",
  "contact.people.vergo",
  "contact.people.angelina",
];

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6 text-text dark:text-white">
        {t("contactPage.title")}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {peopleKeys.map((key) => (
          <ContactCard
            key={key}
            name={t(key)}
            positionKey="contact.position_default"
          />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
