import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";

interface FileUpload {
  file: any;
}

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css'
})
export default class StorageComponent {

  protected formControl;

  previewUrls: string[] = [];


  files: FileList[] = []
  constructor() {
    this.formControl = new FormGroup<FileUpload>({
      file: new FormControl(null, [
        Validators.required
      ])
    })
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input || !input.files) return;

    const files = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      this.previewUrls.push(url);
    }
  }

}
