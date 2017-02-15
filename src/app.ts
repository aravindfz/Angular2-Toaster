//our root app component
import {Component, NgModule, Inject} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { Toaster_Token } from './ToasterService';

declare let toastr : any; 

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <button class="btn btn-success" (click)="success()">Success</button> <br/><br/>
      <button class="btn btn-danger" (click)="error()">Error</button> <br/><br/>
      <button class="btn btn-warning" (click)="warning()">Warning</button> <br/><br/>
    </div>
  `,
})
export class App {
  name:string;
  constructor(@Inject( Toaster_Token ) private _toasterService : any) {
    this.name = 'Angular2'
  }
  success(){
  this._toasterService.success('This works');
  }
  error(){
    this._toasterService.error('This error also works');
  }
  warning(){
    this._toasterService.warning('This warning is working too!!');
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  providers :[
    { provide : Toaster_Token , useValue : toastr }
    ]
  bootstrap: [ App ]
})
export class AppModule {}