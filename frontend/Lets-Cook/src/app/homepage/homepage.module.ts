import { NgModule } from "@angular/core";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon"
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [ 
        ToolbarComponent 
    ],
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatInputModule
    ],
    exports: [
        ToolbarComponent
    ]
})

export class Homepage{

}