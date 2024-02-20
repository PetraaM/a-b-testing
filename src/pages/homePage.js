import React, { useState, useEffect } from "react";
import VersionAContent from "./VersionAContent";
import VersionBContent from "./VersionBContent";

function HomePage() {
  const [showVersion, setShowVersion] = useState(null);

  useEffect(() => {
    const randomNum = Math.random();
    // Render version A if randomNum < 0.5, otherwise render version B
    if (randomNum < 0.5) {
      setShowVersion("A");
    } else {
      setShowVersion("B");
    }
  }, []);

  return (
    <div>
      {showVersion === "A" && <VersionAContent />}
      {showVersion === "B" && <VersionBContent />}
    </div>
  );
}

export default HomePage;
