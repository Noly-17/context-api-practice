import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import SettingProvider from "./components/Context";
function App() {
    return (
    <SettingProvider>
       <Dashboard />
    </SettingProvider>
  );
}

export default App;
