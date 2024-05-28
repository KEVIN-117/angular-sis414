import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() data!: {
    title: string;
    path: any;
  };
}
