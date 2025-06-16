import EmailSidebar from "../components/EmailSidebar";
import EmailList from "../components/EmailList";

const Email = () => {
  return (
    <div className="flex min-h-screen bg-bg text-text">
      <EmailSidebar />
      <EmailList />
    </div>
  );
};

export default Email;
