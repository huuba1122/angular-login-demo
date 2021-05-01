import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) 
    { }

  ngOnInit(): void {
  }

  logout(){
    if(confirm('Are you sure want to logout?')){
      this.authService.logout().subscribe((res) => {
        if(res.status){
          sessionStorage.clear();
          this.router.navigate(['home']);
          alert(res.message);
        }
      })
    }
  }
}
