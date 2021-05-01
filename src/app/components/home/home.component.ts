import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName = '';
  constructor(
    private router: Router,
    private authService: AuthService
    ) {
    this.userName = sessionStorage.getItem('user_name')!;
   }

  ngOnInit(): void {
  }

  logout(){
    if(confirm('Are you sure want to logout?')){
      this.authService.logout().subscribe((res) => {
        console.log(res);
        if(res.status === 'success'){
          sessionStorage.clear();
          this.router.navigate(['home']);
          alert(res.message);
        }
      })
    }
  }

}
