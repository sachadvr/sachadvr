import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Repo from "./pages/Git/[repo]";
import Git from "./pages/Git/Git";

function App(): JSX.Element {

  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<NotFound />} />
    <Route path="git" element={<Git />} />
    <Route path="git/:repoName" element={<Repo />} />
          
    </Route>
   
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
