import { Component } from "@angular/core";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "src/context/AppContext";
import { PaginationProvider } from "src/context/PaginationContext";

import AppWrapper from "src/components/AppWrapper";

@Component({
  selector: "app-root-content",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  SearchComp = () => {
    return (
      <BrowserRouter>
        <AppProvider>
          <PaginationProvider>
            <AppWrapper />
          </PaginationProvider>
        </AppProvider>
      </BrowserRouter>
    );
  };
}
