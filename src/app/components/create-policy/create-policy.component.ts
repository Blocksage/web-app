import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.scss']
})
export class CreatePolicyComponent implements OnInit {
  public Editor = ClassicEditor
  constructor() { }
  policy: any = {
    description: ''
  }

  ngOnInit(): void {
  }

  generateSlug() {
    console.log('change')
    if (this.policy.title) {
      this.policy.slug = this.policy.title.toLowerCase().replaceAll(' ', '-')
    }
  }

  savePolicy() {

  }
}
