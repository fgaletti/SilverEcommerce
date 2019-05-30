import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { User } from '../_models/user';
import { UserService } from '../services/user.service';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  registerForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';


  constructor( private alertify: AlertifyService,
    private fb: FormBuilder , private userService: UserService,  private router: Router) { }

  ngOnInit() {
     this.createRegisterForm();
    /*this.registerForm = new FormGroup({

      firstname: new FormControl('', Validators.required ),
      lastname: new FormControl('', Validators.required ),
      email: new FormControl('', Validators.required ),

      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', Validators.required)
    }, this.passwordMatchValidator); */ // 123 passwordMatchValidator


  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator} );
  }

  register () {
    if (this.registerForm.valid) {
      // move the vslues from this.registerForm.value to {}
      this.user = Object.assign({}, this.registerForm.value) ;
      this.userService.register(this.user).subscribe( () => {
        this.alertify.success('Registration successful');
      }, error => {
        this.alertify.error(error);
      }, () => { // third part , complete, we nee to redirect the user once they have register
       console.log('login after register');
          this.userService.login(this.user).subscribe ( () => {
                this.router.navigate(['/product-list']);
                console.log('login/member');
              }
          );
      });
    }
  }

  // 123
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }


}
