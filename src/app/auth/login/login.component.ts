import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    user:['',Validators.required],
    password:['',Validators.required]
  });

  constructor(private fb:FormBuilder, private router:Router){}
  
  ngOnInit(): void {
    
  }

  login(){
    try{
      if(this.loginForm.value.user === "jesus" && this.loginForm.value.password === "123"){       
        this.router.navigateByUrl('dashboard');
      }
    }catch(error){
      console.log(error);
    }
  }

}
