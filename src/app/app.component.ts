import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email_address: string;
  subscript: string;
  pw: string;
  defaultSubscription = 'advanced';

  onSubmit(form: NgForm) {
    this.email_address = form.value.email;
    this.subscript = form.value.subscription;
    this.pw = form.value.password;
    console.log(form);
  }
}
