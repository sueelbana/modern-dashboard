import EmailSidebar from "../components/EmailSidebar";
import EmailList from "../components/EmailList";
import PreviewPanel from "../components/PreviewPanel";

const Email = () => {
  return (
    <div className="flex min-h-screen bg-bg text-text">
      <EmailSidebar />
      <EmailList />
      <PreviewPanel />
    </div>
  );
};

export default Email;
