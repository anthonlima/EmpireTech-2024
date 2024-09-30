import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component {

  constructor(private router: Router) {}

  irParaPagina2() {
    this.router.navigate(['/pagina2']); 
  }
}
