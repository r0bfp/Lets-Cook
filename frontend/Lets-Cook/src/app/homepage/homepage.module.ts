import { NgModule } from "@angular/core";

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SearchBoxComponent } from "./searchbox/searchbox.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon"
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [ 
        ToolbarComponent,
        SearchBoxComponent
    ],
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatInputModule
    ],
    exports: [
        ToolbarComponent,
        SearchBoxComponent
    ]
})

export class Homepage{

}