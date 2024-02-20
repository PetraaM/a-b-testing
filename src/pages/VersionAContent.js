import React, { useEffect } from "react";
import Image from "../images/terminal.jpg";
import Button from "../components/button.jsx";

function VersionAContent() {
  return (
    <div>
      <h1>Start a New React Project</h1>
      <p>
        If you want to build a new app or a new website fully with React, we
        recommend picking one of the React-powered frameworks popular in the
        community.
      </p>
      <p>
        You can use React without a framework, however we’ve found that most
        apps and sites eventually build solutions to common problems such as
        code-splitting, routing, data fetching, and generating HTML. These
        problems are common to all UI libraries, not just React.
      </p>
      <p>
        By starting with a framework, you can get started with React quickly,
        and avoid essentially building your own framework later.
      </p>
      <h2>Production-grade React frameworks</h2>
      <p>
        These frameworks support all the features you need to deploy and scale
        your app in production and are working towards supporting our full-stack
        architecture vision. All of the frameworks we recommend are open source
        with active communities for support, and can be deployed to your own
        server or a hosting provider. If you’re a framework author interested in
        being included on this list, please let us know.
      </p>
      <h3>Next.js</h3>
      <p>
        Next.js’ Pages Router is a full-stack React framework. It’s versatile
        and lets you create React apps of any size—from a mostly static blog to
        a complex dynamic application. To create a new Next.js project, run in
        your terminal.
      </p>
      <img
        src={Image}
        alt="Terminal command"
        style={{ width: "50%", display: "block", margin: "0 auto" }}
      />
      <Button />
    </div>
  );
}

export default VersionAContent;
