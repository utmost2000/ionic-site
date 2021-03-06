/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './searchbar';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../config/config';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/forms/src/directives/ng_control';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '../button/button';
import * as import13 from '../button/button.ngfactory';
import * as import14 from '../icon/icon.ngfactory';
import * as import15 from '../icon/icon';
export class Wrapper_Searchbar {
  /*private*/ _eventHandler:Function;
  context:import0.Searchbar;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  subscription3:any;
  subscription4:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this.context = new import0.Searchbar(p0,p1,p2,p3);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
    this._expr_16 = import1.UNINITIALIZED;
    this._expr_17 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
    (this.subscription3 && this.subscription3.unsubscribe());
    (this.subscription4 && this.subscription4.unsubscribe());
  }
  check_color(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.color = currValue;
      this._expr_0 = currValue;
    }
  }
  check_mode(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.mode = currValue;
      this._expr_1 = currValue;
    }
  }
  check_cancelButtonText(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.cancelButtonText = currValue;
      this._expr_2 = currValue;
    }
  }
  check_showCancelButton(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.showCancelButton = currValue;
      this._expr_3 = currValue;
    }
  }
  check_debounce(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.debounce = currValue;
      this._expr_4 = currValue;
    }
  }
  check_placeholder(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.placeholder = currValue;
      this._expr_5 = currValue;
    }
  }
  check_autocomplete(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.autocomplete = currValue;
      this._expr_6 = currValue;
    }
  }
  check_autocorrect(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.autocorrect = currValue;
      this._expr_7 = currValue;
    }
  }
  check_spellcheck(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.spellcheck = currValue;
      this._expr_8 = currValue;
    }
  }
  check_type(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.type = currValue;
      this._expr_9 = currValue;
    }
  }
  check_animated(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.animated = currValue;
      this._expr_10 = currValue;
    }
  }
  check_value(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.value = currValue;
      this._expr_11 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_12:any = this.context._animated;
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      view.renderer.setElementClass(el,'searchbar-animated',currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this.context._value;
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      view.renderer.setElementClass(el,'searchbar-has-value',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this.context._isActive;
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      view.renderer.setElementClass(el,'searchbar-active',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this.context._showCancelButton;
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      view.renderer.setElementClass(el,'searchbar-show-cancel',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this.context._shouldAlignLeft;
    if (import3.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      view.renderer.setElementClass(el,'searchbar-left-aligned',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this.context._sbHasFocus;
    if (import3.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      view.renderer.setElementClass(el,'searchbar-has-focus',currVal_17);
      this._expr_17 = currVal_17;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean,emit3:boolean,emit4:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.ionInput.subscribe(_eventHandler.bind(view,'ionInput'))); }
    if (emit1) { (this.subscription1 = this.context.ionBlur.subscribe(_eventHandler.bind(view,'ionBlur'))); }
    if (emit2) { (this.subscription2 = this.context.ionFocus.subscribe(_eventHandler.bind(view,'ionFocus'))); }
    if (emit3) { (this.subscription3 = this.context.ionCancel.subscribe(_eventHandler.bind(view,'ionCancel'))); }
    if (emit4) { (this.subscription4 = this.context.ionClear.subscribe(_eventHandler.bind(view,'ionClear'))); }
  }
}
var renderType_Searchbar_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Searchbar_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.Searchbar>;
  _Searchbar_0_3:Wrapper_Searchbar;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Searchbar_Host0,renderType_Searchbar_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ion-searchbar',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Searchbar0(this.viewUtils,this,0,this._el_0);
    this._Searchbar_0_3 = new Wrapper_Searchbar(this.injectorGet(import8.Config,this.parentIndex),new import9.ElementRef(this._el_0),this.renderer,this.injectorGet(import10.NgControl,this.parentIndex,(null as any)));
    this.compView_0.create(this._Searchbar_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._Searchbar_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Searchbar) && (0 === requestNodeIndex))) { return this._Searchbar_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Searchbar_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Searchbar_0_3.context.ngAfterContentInit(); } }
    this._Searchbar_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._Searchbar_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SearchbarNgFactory:import7.ComponentFactory<import0.Searchbar> = new import7.ComponentFactory<import0.Searchbar>('ion-searchbar',View_Searchbar_Host0,import0.Searchbar);
const styles_Searchbar:any[] = ([] as any[]);
var renderType_Searchbar:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_Searchbar,{});
export class View_Searchbar0 extends import2.AppView<import0.Searchbar> {
  _viewQuery_searchbarInput_0:import11.QueryList<any>;
  _viewQuery_searchbarIcon_1:import11.QueryList<any>;
  _viewQuery_cancelButton_2:import11.QueryList<any>;
  _el_0:any;
  _el_1:any;
  compView_1:import2.AppView<import12.Button>;
  _Button_1_3:import13.Wrapper_Button;
  _el_2:any;
  _Icon_2_3:import14.Wrapper_Icon;
  _el_3:any;
  _el_4:any;
  _el_5:any;
  compView_5:import2.AppView<import12.Button>;
  _Button_5_3:import13.Wrapper_Button;
  _el_6:any;
  compView_6:import2.AppView<import12.Button>;
  _Button_6_3:import13.Wrapper_Button;
  _text_7:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Searchbar0,renderType_Searchbar,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_18 = import1.UNINITIALIZED;
    this._expr_19 = import1.UNINITIALIZED;
    this._expr_20 = import1.UNINITIALIZED;
    this._expr_21 = import1.UNINITIALIZED;
    this._expr_22 = import1.UNINITIALIZED;
    this._expr_23 = import1.UNINITIALIZED;
    this._expr_24 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_searchbarInput_0 = new import11.QueryList<any>();
    this._viewQuery_searchbarIcon_1 = new import11.QueryList<any>();
    this._viewQuery_cancelButton_2 = new import11.QueryList<any>();
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','searchbar-input-container'),(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'button',new import3.InlineArray16(12,'class','searchbar-md-cancel','clear','','color','dark','ion-button','','mode','md','type','button'),(null as any));
    this.compView_1 = new import13.View_Button0(this.viewUtils,this,1,this._el_1);
    this._Button_1_3 = new import13.Wrapper_Button('',this.parentView.injectorGet(import8.Config,this.parentIndex),new import9.ElementRef(this._el_1),this.renderer);
    this._el_2 = import3.createRenderElement(this.renderer,(null as any),'ion-icon',new import3.InlineArray4(4,'name','md-arrow-back','role','img'),(null as any));
    this._Icon_2_3 = new import14.Wrapper_Icon(this.parentView.injectorGet(import8.Config,this.parentIndex),new import9.ElementRef(this._el_2),this.renderer);
    this.compView_1.create(this._Button_1_3.context);
    this._el_3 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','searchbar-search-icon'),(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_0,'input',new import3.InlineArray2(2,'class','searchbar-input'),(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'button',new import3.InlineArray8(8,'class','searchbar-clear-icon','clear','','ion-button','','type','button'),(null as any));
    this.compView_5 = new import13.View_Button0(this.viewUtils,this,5,this._el_5);
    this._Button_5_3 = new import13.Wrapper_Button('',this.parentView.injectorGet(import8.Config,this.parentIndex),new import9.ElementRef(this._el_5),this.renderer);
    this.compView_5.create(this._Button_5_3.context);
    this._el_6 = import3.createRenderElement(this.renderer,parentRenderNode,'button',new import3.InlineArray16(10,'class','searchbar-ios-cancel','clear','','ion-button','','mode','ios','type','button'),(null as any));
    this.compView_6 = new import13.View_Button0(this.viewUtils,this,6,this._el_6);
    this._Button_6_3 = new import13.Wrapper_Button('',this.parentView.injectorGet(import8.Config,this.parentIndex),new import9.ElementRef(this._el_6),this.renderer);
    this._text_7 = this.renderer.createText((null as any),'',(null as any));
    this.compView_6.create(this._Button_6_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray4(4,'click',(null as any),'mousedown',(null as any)),this.eventHandler(this.handleEvent_1));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray8(6,'input',(null as any),'blur',(null as any),'focus',(null as any)),this.eventHandler(this.handleEvent_4));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray4(4,'click',(null as any),'mousedown',(null as any)),this.eventHandler(this.handleEvent_5));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_6,new import3.InlineArray4(4,'click',(null as any),'mousedown',(null as any)),this.eventHandler(this.handleEvent_6));
    this._viewQuery_searchbarInput_0.reset([new import9.ElementRef(this._el_4)]);
    this.context._searchbarInput = this._viewQuery_searchbarInput_0.first;
    this._viewQuery_searchbarIcon_1.reset([new import9.ElementRef(this._el_3)]);
    this.context._searchbarIcon = this._viewQuery_searchbarIcon_1.first;
    this._viewQuery_cancelButton_2.reset([new import9.ElementRef(this._el_6)]);
    this.context._cancelButton = this._viewQuery_cancelButton_2.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._el_2,
      this._el_3,
      this._el_4,
      this._el_5,
      this._el_6,
      this._text_7
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.Icon) && (2 === requestNodeIndex))) { return this._Icon_2_3.context; }
    if (((token === import12.Button) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._Button_1_3.context; }
    if (((token === import12.Button) && (5 === requestNodeIndex))) { return this._Button_5_3.context; }
    if (((token === import12.Button) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Button_6_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = '';
    this._Button_1_3.check_clear(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = 'md';
    this._Button_1_3.check_mode(currVal_1_0_1,throwOnChange,false);
    const currVal_1_0_2:any = 'dark';
    this._Button_1_3.check_color(currVal_1_0_2,throwOnChange,false);
    if (this._Button_1_3.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_2_0_0:any = 'md-arrow-back';
    this._Icon_2_3.check_name(currVal_2_0_0,throwOnChange,false);
    this._Icon_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_5_0_0:any = '';
    this._Button_5_3.check_clear(currVal_5_0_0,throwOnChange,false);
    const currVal_5_0_1:any = this.context._mode;
    this._Button_5_3.check_mode(currVal_5_0_1,throwOnChange,false);
    if (this._Button_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    const currVal_6_0_0:any = '';
    this._Button_6_3.check_clear(currVal_6_0_0,throwOnChange,false);
    const currVal_6_0_1:any = 'ios';
    this._Button_6_3.check_mode(currVal_6_0_1,throwOnChange,false);
    if (this._Button_6_3.ngDoCheck(this,this._el_6,throwOnChange)) { this.compView_6.markAsCheckOnce(); }
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Button_1_3.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_5_3.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_6_3.context.ngAfterContentInit(); }
    }
    this._Icon_2_3.checkHost(this,this,this._el_2,throwOnChange);
    const currVal_18:any = this.context.placeholder;
    if (import3.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementAttribute(this._el_4,'placeholder',((currVal_18 == null)? (null as any): currVal_18.toString()));
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this.context.type;
    if (import3.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementAttribute(this._el_4,'type',((currVal_19 == null)? (null as any): currVal_19.toString()));
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this.context._autocomplete;
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementAttribute(this._el_4,'autocomplete',((currVal_20 == null)? (null as any): currVal_20.toString()));
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this.context._autocorrect;
    if (import3.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementAttribute(this._el_4,'autocorrect',((currVal_21 == null)? (null as any): currVal_21.toString()));
      this._expr_21 = currVal_21;
    }
    const currVal_22:any = this.context._spellcheck;
    if (import3.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setElementAttribute(this._el_4,'spellcheck',((currVal_22 == null)? (null as any): currVal_22.toString()));
      this._expr_22 = currVal_22;
    }
    const currVal_23:any = (this.context._isActive? 1: (0 - 1));
    if (import3.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementProperty(this._el_6,'tabIndex',currVal_23);
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = import3.inlineInterpolate(1,'',this.context.cancelButtonText,'');
    if (import3.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setText(this._text_7,currVal_24);
      this._expr_24 = currVal_24;
    }
    this.compView_1.detectChanges(throwOnChange);
    this.compView_5.detectChanges(throwOnChange);
    this.compView_6.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_1.destroy();
    this.compView_5.destroy();
    this.compView_6.destroy();
    this._Icon_2_3.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) { cb(this._el_2,ctx); }
    if (((nodeIndex == 5) && (ngContentIndex == 0))) {  }
    if (((nodeIndex == 6) && (ngContentIndex == 0))) { cb(this._text_7,ctx); }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.cancelSearchbar($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'mousedown')) {
      const pd_sub_1:any = ((<any>this.context.cancelSearchbar($event)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'input')) {
      const pd_sub_0:any = ((<any>this.context.inputChanged($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'blur')) {
      const pd_sub_1:any = ((<any>this.context.inputBlurred($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'focus')) {
      const pd_sub_2:any = ((<any>this.context.inputFocused($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.clearInput($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'mousedown')) {
      const pd_sub_1:any = ((<any>this.context.clearInput($event)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
  handleEvent_6(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.cancelSearchbar($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'mousedown')) {
      const pd_sub_1:any = ((<any>this.context.cancelSearchbar($event)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
}