import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NavItemDto} from "../../../../types";
import {HtmlTransformPipe} from "../../../core/pipes/html-transform.pipe";
@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink, HtmlTransformPipe],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() props!: NavItemDto;

}
