import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                template: "<h1>\n  <ng-content></ng-content>\n</h1>",
                styles: ["h1{color:red}"]
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    HeaderComponent
                ],
                declarations: [HeaderComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HeaderModule, HeaderComponent as ɵa };

//# sourceMappingURL=nglibexample.js.map