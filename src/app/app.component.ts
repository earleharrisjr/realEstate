import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'realEstate';
}

// speed up development
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selector-name'
})

export class NamePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {

  }
}
