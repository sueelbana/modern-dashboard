import EmailSidebar from "../components/EmailSidebar";
import EmailList from "../components/EmailList";
import PreviewPanel from "../components/PreviewPanel";

const Email = () => {
  return (
    <div className="flex w-full h-full overflow-hidden bg-bg">
      <EmailSidebar />
      <EmailList />
      <div className="w-[330px] border-border preview-panel">
        <PreviewPanel />
      </div>
    </div>
  );
};

export default Email;
