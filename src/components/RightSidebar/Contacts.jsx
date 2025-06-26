import React from "react";
import { useTranslation } from "react-i18next";

const contacts = [
  { name: "Tony", img: "/avatars/tony.jpg" },
  { name: "Karen", img: "/avatars/karen.jpg" },
  { name: "Jordan", img: "/avatars/jordan.jpg" },
  { name: "Jack", img: "/avatars/jack.jpg" },
  { name: "Nadia", img: "/avatars/nadia.jpg" },
  { name: "Johnny", img: "/avatars/johnny.jpg" },
  { name: "Martha", img: "/avatars/martha.jpg" },
  { name: "John", img: "/avatars/john.jpg" },
];

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-text">{t("contacts.title")}</h3>
        <a href="#" className="text-xs text-blue-500">
          {t("contacts.view_all")}
        </a>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={contact.img}
              alt={contact.name}
              className="w-8 h-8 rounded"
            />
            <span className="text-[11px] mt-1">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
