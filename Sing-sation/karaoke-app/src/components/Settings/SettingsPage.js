import React, { useState } from "react";
import { updateSettings } from "../utils/settings";

const SettingsPage = () => {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const handleSaveSettings = () => {
    updateSettings({ audioEnabled, videoEnabled });
    alert("Settings saved!");
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <label>
        Audio:
        <input
          type="checkbox"
          checked={audioEnabled}
          onChange={() => setAudioEnabled(!audioEnabled)}
        />
      </label>
      <label>
        Video:
        <input
          type="checkbox"
          checked={videoEnabled}
          onChange={() => setVideoEnabled(!videoEnabled)}
        />
      </label>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
