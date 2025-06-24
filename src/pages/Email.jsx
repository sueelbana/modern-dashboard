import EmailSidebar from "../components/EmailSidebar";
import EmailList from "../components/EmailList";
import PreviewPanel from "../components/PreviewPanel";

const Email = () => {
  return (
    <div className="flex min-h-screen bg-bg text-text">
      <EmailSidebar />
      <EmailList />
      {/* Right-side Preview Panel */}
      <div className="ml-1">
        <PreviewPanel />
      </div>
    </div>
  );
};

export default Email;
