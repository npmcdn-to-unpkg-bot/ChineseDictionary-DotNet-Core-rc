﻿import {Component, OnInit} from "angular2/core";

@Component({
    selector: "static",
    templateUrl: "app/components/static.html"
})
export class StaticComponent {
    public message = "The 'static.html' was used as the Angular2 'templateUrl'. There is a 'message' property bound to the <blockqoute> element."
}