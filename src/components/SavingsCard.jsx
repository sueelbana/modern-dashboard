import { FiMoreHorizontal } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const savings = [
  {
    titleKey: "savings.house",
    amountSaved: 16500,
    goal: 10000,
    color: "purple",
  },
  {
    titleKey: "savings.gaming",
    amountSaved: 16500,
    goal: 10000,
    color: "yellow",
  },
];

const SavingsCard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-bg p-6 rounded-xl w-full max-w-md">
      <h3 className="text-lg font-bold text-text mb-4">{t("savings.title")}</h3>

      <div className="space-y-4">
        {savings.map((item, idx) => {
          const progress = Math.min((item.amountSaved / item.goal) * 100, 100);
          const color =
            item.color === "purple"
              ? "bg-purple-700"
              : item.color === "yellow"
              ? "bg-yellow-400"
              : "bg-gray-300";
          const dotColor =
            item.color === "purple"
              ? "text-purple-700"
              : item.color === "yellow"
              ? "text-yellow-500"
              : "text-gray-500";

          return (
            <div
              key={idx}
              className="bg-bg rounded-xl p-4 shadow-sm border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-4 h-4 rounded-full border-2 ${dotColor} flex items-center justify-center`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-bg"></span>
                  </span>
                  <span className="text-sm font-medium text-text">
                    {t(item.titleKey)}
                  </span>
                </div>
                <button>
                  <FiMoreHorizontal className="text-gray-400" />
                </button>
              </div>

              <div className="w-full h-2 bg-purple-100 rounded-full overflow-hidden mb-2">
                <div
                  className={`${color} h-full rounded-full`}
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="text-right text-sm font-medium">
                <span
                  className={
                    item.color === "purple"
                      ? "text-purple-700"
                      : "text-yellow-500"
                  }
                >
                  ${item.amountSaved.toLocaleString()}
                </span>{" "}
                <span className="text-text">
                  / ${item.goal.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavingsCard;
