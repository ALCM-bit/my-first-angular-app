//Import necessário para o decorator
import { Component } from "@angular/core";

//Decorator essa notação é necessária para indicar ao Angular que
//se trata de um componente além de permitir a adição de algumas configurações.
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{

}