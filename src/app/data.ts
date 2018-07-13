export class Data {
  private _wavelength: any[] = [];
  private _single_wavelength: any[] = [];
  private _single_depth: any[] = [];
  private _values: any[] = [];
  private _values_kd: any[] = [];
  private _depth: any[] = [];
  private _ed: any[] = [];
  private _lw: any[] = [];
  private _rrs: any[] = [];
  private _kd: any[] = [];
  private _zmid: any[] = [];
  private _calculated_kd: any[] = [];


  public constructor() { };

  get wavelength(): any {
    return this._wavelength;
  }

  set wavelength(wavelength : any) {
    this._wavelength.push(wavelength);
  }

  get single_wavelength(): any {
    return this._single_wavelength;
  }

  set single_wavelength(single_wavelength : any) {
    this._single_wavelength.push(single_wavelength);
  }

  get single_depth(): any {
    return this._single_depth;
  }

  set single_depth(single_depth : any) {
    this._single_depth.push(single_depth);
  }

  get depth(): any {
    return this._depth;
  }

  set depth(depth : any) {
    this._depth.push(depth);
  }

  get ed(): any {
    return this._ed;
  }

  set ed(ed : any) { 
    this._ed.push(ed);
  }

  get lw(): any {
    return this._lw;
  }

  set lw(lw : any) { 
    this._lw.push(lw);
  }

  get rrs(): any {
    return this._rrs;
  }

  set rrs(rrs : any) { 
    this._rrs.push(rrs);
  }

  get values(): any {
    return this._values;
  }

  set values(values : any) {
    this._values.push(values);
  }

  get values_kd(): any {
    return this._values_kd;
  }

  set values_kd(values_kd : any) {
    this._values_kd.push(values_kd);
  }

  get kd(): any {
    return this._kd;
  }

  set kd(kd : any) { 
    this._kd.push(kd);
  }

  get zmid(): any {
    return this._zmid;
  }

  set zmid(zmid : any) { 
    this._zmid.push(zmid);
  }

  get calculated_kd(): any {
    return this._calculated_kd;
  }

  set calculated_kd(calculated_kd : any) { 
    this._calculated_kd.push(calculated_kd);
  }

}