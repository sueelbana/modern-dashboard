import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import EmailSearchBar from "./EmailSearchBar";
import EmailItem from "./EmailItem";
import EmailPagination from "./EmailPagination";

const rawEmailData = [
  {
    id: 1,
    titleKey: "emailList.titles.item1",
    previewKey: "emailList.previews.item1",
    hoursAgo: 5,
  },
  {
    id: 2,
    titleKey: "emailList.titles.item2",
    previewKey: "emailList.previews.item2",
    hoursAgo: 12,
  },
  {
    id: 3,
    titleKey: "emailList.titles.item3",
    previewKey: "emailList.previews.item3",
    hoursAgo: 24,
  },
  {
    id: 4,
    titleKey: "emailList.titles.item4",
    previewKey: "emailList.previews.item4",
    hoursAgo: 48,
  },
  {
    id: 5,
    titleKey: "emailList.titles.item5",
    previewKey: "emailList.previews.item5",
    hoursAgo: 72,
  },
  {
    id: 6,
    titleKey: "emailList.titles.item6",
    previewKey: "emailList.previews.item6",
    hoursAgo: 168,
  },
];

export default function EmailList() {
  const { t } = useTranslation();
  const [selectedPage, setSelectedPage] = useState(1);

  const emailData = rawEmailData.map((e) => ({
    id: e.id,
    title: t(e.titleKey),
    preview: t(e.previewKey),
    time: t("emailList.hoursAgo", { count: e.hoursAgo }),
  }));

  return (
    <div className="flex-1 px-4 py-6 text-text">
      <EmailSearchBar placeholder={t("emailList.search_placeholder")} />

      <div className="space-y-2">
        {emailData.map((email, idx) => (
          <EmailItem key={email.id} email={email} isSelected={idx === 0} />
        ))}
      </div>

      <EmailPagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        prevLabel={t("emailList.pagination.previous")}
        nextLabel={t("emailList.pagination.next")}
      />
    </div>
  );
}
