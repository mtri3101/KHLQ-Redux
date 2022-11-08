import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaiTapXucXac from "./baitapredux/BaiTapXucXac/BaiTapXucXac";
import Header4All from "./Templates/Header4All";
import { Provider } from "react-redux";
import {store} from "./Redux/configStore";
import BaiTapOTT from "./baitapredux/BaiTapOTT/BaiTapOTT";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Header4All />}>
          <Route path="/gamexucxac" element={<BaiTapXucXac />} />
          <Route path="/gameott" element={<BaiTapOTT />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
