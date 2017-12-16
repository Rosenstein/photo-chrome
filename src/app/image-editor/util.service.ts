import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class UtilService {

  // --------------------- Add Image To Canvas ------------------------------
  private addImageToCanvasSource = new Subject<any>();
  addImageToCanvas$ = this.addImageToCanvasSource.asObservable();
  addImageToCanvas = (url) => {
    this.addImageToCanvasSource.next(url)
  }

  // --------------------- Add Text to Canvas -------------------------------
  private addTextToCanvasSource = new Subject<any>();
  addTextToCanvas$ = this.addTextToCanvasSource.asObservable();
  addTextToCanvas = (textObj) => {
    this.addTextToCanvasSource.next(textObj)
  }

  // --------------------- Edit Text ----------------------------------------
  private onUpdateTextSource = new Subject<any>();
  onUpdateText$ = this.onUpdateTextSource.asObservable();
  onUpdateText = (textProps) => {
    this.onUpdateTextSource.next(textProps);
  }

  // --------------------- On Change Tool type ------------------------------
  private changeToolTypeSource = new Subject<any>();
  changeToolType$ = this.changeToolTypeSource.asObservable();
  changeToolType = (toolType,activeObjectProps) => {
    if(activeObjectProps){
      this.changeToolTypeSource.next({
        toolType:toolType,
        activeObjectProps:activeObjectProps
      })
    }
    else{
      this.changeToolTypeSource.next({
        toolType:toolType
      })
    }
  }

  // ----------------------- Object manipulation ----------------------------
  private onSelectionCreatedSource = new Subject<any>();
  onSelectionCreated$ = this.onSelectionCreatedSource.asObservable();
  onSelectionCreated = (selection) => {
    this.onSelectionCreatedSource.next(selection);
  }

  private onSelectionModifiedSource = new Subject<any>();
  onSelectionModified$ = this.onSelectionModifiedSource.asObservable();
  onSelectionModified = (modificationType) => {
    this.onSelectionModifiedSource.next(modificationType);
  }

}