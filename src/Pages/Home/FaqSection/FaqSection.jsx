import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const FaqSection = () => {
  return (
    <div className="max-w-3xl mx-auto my-16 px-4">
       <SectionTitle 
        title="Frequently Asked Questions" 
        subtitle="Here are some common questions about HobbyNest"
      />

      <div className="space-y-4">
        <details className="border border-border rounded-md   p-4">
          <summary className="font-semibold cursor-pointer ">
            How can I join a hobby group on HobbyNest?
          </summary>
          <p className="text-sm text-text-secondary mt-2">
            You can join any ongoing group by clicking the "Join Group" button
            on its detail page. Make sure you're logged in before joining.
          </p>
        </details>

        <details className="border border-border rounded-md   p-4">
          <summary className="font-semibold cursor-pointer  ">
            Can I create my own hobby group?
          </summary>
          <p className="text-sm text-text-secondary mt-2">
            Yes! Once you're logged in, go to the "Create Group" section in your
            dashboard to set up a new hobby group with a title, description, and
            image.
          </p>
        </details>

        <details className="border border-border rounded-md   p-4">
          <summary className="font-semibold cursor-pointer  ">
            Are there any fees for joining or creating groups?
          </summary>
          <p className="text-sm text-text-secondary mt-2">
            No, HobbyNest is completely free to use. You can join, create, or
            manage groups without any charges.
          </p>
        </details>

        <details className="border border-border rounded-md   p-4">
          <summary className="font-semibold cursor-pointer  ">
            What happens after I join a group?
          </summary>
          <p className="text-sm text-text-secondary mt-2">
            After joining, you can participate in group discussions, events, and
            activities. Group admins may share schedules or announcements with
            members.
          </p>
        </details>

        <details className="border border-border rounded-md   p-4">
          <summary className="font-semibold cursor-pointer  ">
            How do I edit or delete a group I created?
          </summary>
          <p className="text-sm text-text-secondary mt-2">
            Go to your dashboard and view "My Groups." From there, you’ll find
            options to update group info or delete the group if needed.
          </p>
        </details>

        <details className="border border-border rounded-md   p-4">
          <summary className="font-semibold cursor-pointer  ">
            I forgot my password. How can I recover my account?
          </summary>
          <p className="text-sm text-text-secondary mt-2">
            Click the "Forgot Password" link on the login page. We’ll send a
            reset link to your registered email address.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FaqSection;
