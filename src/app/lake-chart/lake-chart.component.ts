import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LakeService } from '../lake.service';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';

import { Lake } from '../lake';
import { Data } from '../data';

@Component({
  selector: 'app-lake-chart',
  templateUrl: './lake-chart.component.html',
  styleUrls: ['./lake-chart.component.css']
})

export class LakeChartComponent implements OnInit {

  @ViewChild('chartEd') elEd: ElementRef;
  @ViewChild('chartKd') elKd: ElementRef;
  @ViewChild('chartCalculateKdfromEd') elCalcKd: ElementRef;
  @ViewChild('chartLw') elLw: ElementRef;
  @ViewChild('chartRrs') elRrs: ElementRef;

  dataList: Data[];
  data: Data;

  constructor(
    private route: ActivatedRoute,
    private lakeService: LakeService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  generatePlot() {
    this.processData();
    this.EdChart();
    this.KdChart();
    this.CalculatedKdChart();
    this.LwChart();
    this.RrsChart();
  }

  processData() {
    this.data = new Data();

    let depth = [], zmid = [];
    let ed = [], kd = [];

    let i, val, value, j = 0, k = 0;

    for (i of this.dataList) {
      this.data.wavelength = [+i.wavelength, +i.wavelength + 20];
      this.data.single_wavelength = i.wavelength;
      this.data.values = i.values;
      this.data.values_kd = i.values_Kd;
    }

    for (i of this.data.wavelength) {
      var water_leaving = 0;
      var remote_sensing_reflectance = 0;
      var calculated_kd_from_ed = 0;

      for (val of this.data.values[j]) {
        ed.push([val.Ed, val.Ed]);
        depth.push([+val.depth, +val.depth]);
        this.data.single_depth = +val.depth;

        if (val.Lw && val.Lw != "NaN") {
          water_leaving = val.Lw;
          //this.data.calculated_kd = val.calculated_Kd;
        }
        if (val.Rrs && val.Rrs != "NaN") {
          remote_sensing_reflectance = val.Rrs;
        }
        if (val.depth == 0) {
          this.data.calculated_kd = val.calculated_Kd;// * (-1) * +val.depth + val.calculated_intercept;
        }
      }
      j += 1;
      this.data.ed = ed;
      this.data.depth = depth;
      this.data.lw = water_leaving;
      this.data.rrs = remote_sensing_reflectance;
      //this.data.calculated_kd = calculated_kd_from_ed;

      ed = [];
      depth = [];

      for (value of this.data.values_kd[k]) {
        kd.push([value.Kd, value.Kd]);
        zmid.push([+value.zmid, +value.zmid]);
      }
      k += 1;
      this.data.kd = kd;
      this.data.zmid = zmid;
      kd = [];
      zmid = [];
    }
  }

  EdChart() {


    let traces = [];
    let i;
    const element = this.elEd.nativeElement;

    for (i in this.data.wavelength) {
      let trace = {};
      trace['x'] = this.data.wavelength[i],
        trace['z'] = this.data.ed[i],
        trace['y'] = this.data.depth[i],
        trace['colorscale'] = [
          [
            0,
            'rgb(255,255,255)'
          ],
          [
            '0.2',
            this.wavelengthToColor(this.data.wavelength[i])
          ],
          [
            '0.4',
            this.wavelengthToColor(this.data.wavelength[i])
          ],
          [
            '0.6',
            this.wavelengthToColor(this.data.wavelength[i])
          ],
          [
            '0.8',
            this.wavelengthToColor(this.data.wavelength[i])
          ],
          [
            '1',
            this.wavelengthToColor(this.data.wavelength[i])
          ]
        ],
        trace['name'] = "",
        trace['type'] = 'surface',
        trace['showscale'] = false,
        traces.push(trace);
    }

    const data = traces;

    const layout = {
      title: 'Ed plot',
      showlegend: false,
      autosize: true,
      width: 800,
      height: 800,
      scene: {
        xaxis: { autorange: 'reversed', title: 'Wavelength (nm)' },
        yaxis: { title: 'Depth z (m)' },
        zaxis: { title: 'Irradiance Ed (W/m^2 nm)' }
      }
    };

    Plotly.plot(element, data, layout);
  }

  KdChart() {


    let traces = [];
    let i;
    const element = this.elKd.nativeElement;

    for (i in this.data.wavelength) {
      let trace = {};
      trace['x'] = this.data.wavelength[i],
        trace['z'] = this.data.kd[i],
        trace['y'] = this.data.zmid[i],
        trace['colorscale'] = [
          [
            0,
            'rgb(70,70,255)'
          ],
          [
            1,
            'rgb(70,70,255)'
          ]
        ],
        /*[
          [
            0,
            'rgb(255,255,255)'
          ],
          [
            '0.2',
            this.wavelengthToColor(this.data.wavelength[i])
          ],
          [
            '0.4',
            this.wavelengthToColor(this.data.wavelength[i])
          ],
          [
            '0.6',
            this.wavelengthToColor(this.data.wavelength[i])
          ],
          [
            '0.8',
            this.wavelengthToColor(this.data.wavelength[i])
          ],
          [
            '1',
            this.wavelengthToColor(this.data.wavelength[i])
          ]
        ],*/
        trace['name'] = "",
        trace['type'] = 'surface',
        trace['showscale'] = false,
        traces.push(trace);
    }

    const data = traces;

    const layout = {
      title: 'Kd plot',
      showlegend: false,
      autosize: true,
      width: 800,
      height: 800,
      scene: {
        xaxis: { autorange: 'reversed', title: 'Wavelength (nm)' },
        yaxis: { title: 'Depth z (m)' },
        zaxis: { title: 'Kd(z) (1/m)' }
      }
    };

    Plotly.plot(element, data, layout);
  }

  CalculatedKdChart() {
    const element = this.elCalcKd.nativeElement;

    console.log(this.data.calculated_kd)
    var trace = {
      x: this.data.single_wavelength,
      y: this.data.calculated_kd,
      mode: 'lines+markers',
      name: 'Scatter',
      line: {
        color: 'rgb(255, 217, 102)',
        width: 3
      },
      marker: {
        color: 'rgb(255, 217, 102)',
        size: 8
      },
    };

    var data = [trace];

    var layout = {
      width: 800,
      height: 500,
      title: 'Calculate Kd from Ed ',
      xaxis: {
        title: 'Wavelength (nm)',
      },
      yaxis: {
        title: 'ln Ed',
      }
    };

    Plotly.newPlot(element, data, layout);
  }

  LwChart() {
    const element = this.elLw.nativeElement;

    var trace = {
      x: this.data.single_wavelength,
      y: this.data.lw,
      mode: 'lines+markers',
      name: 'Scatter',
      line: {
        color: 'rgb(55, 128, 191)',
        width: 3
      },
      marker: {
        color: 'rgb(55, 128, 191)',
        size: 8
      },
    };

    var data = [trace];

    var layout = {
      width: 800,
      height: 500,
      title: 'Water Leaving Radiance(z) ',
      xaxis: {
        title: 'Wavelength (nm)',
      },
      yaxis: {
        title: 'Lw(z) (nadir)',
      }
    };

    Plotly.newPlot(element, data, layout);
  }

  RrsChart() {
    const element = this.elRrs.nativeElement;

    var trace = {
      x: this.data.single_wavelength,
      y: this.data.rrs,
      mode: 'lines+markers',
      name: 'Scatter',
      line: {
        color: 'rgb(234, 153, 153)',
        width: 3
      },
      marker: {
        color: 'rgb(234, 153, 153)',
        size: 8
      },
    };

    var data = [trace];

    var layout = {
      width: 800,
      height: 500,
      title: 'Remote Sensing Reflectance(z) ',
      xaxis: {
        title: 'Wavelength (nm)',
      },
      yaxis: {
        title: 'Rrs = Lw/Ed (1/sr)',
      }
    };

    Plotly.newPlot(element, data, layout);
  }

  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.lakeService.getDataList(id)
      .subscribe(lake => this.dataList = lake);

  }

  wavelengthToColor(wavelength) {
    var R,
      G,
      B,
      r,
      g,
      b,
      alpha,
      colorSpace,
      wl = wavelength[0],
      gamma = 1;


    if (wl >= 380 && wl < 440) {
      R = -1 * (wl - 440) / (440 - 380);
      G = 0;
      B = 1;
    } else if (wl >= 440 && wl < 490) {
      R = 0;
      G = (wl - 440) / (490 - 440);
      B = 1;
    } else if (wl >= 490 && wl < 510) {
      R = 0;
      G = 1;
      B = -1 * (wl - 510) / (510 - 490);
    } else if (wl >= 510 && wl < 580) {
      R = (wl - 510) / (580 - 510);
      G = 1;
      B = 0;
    } else if (wl >= 580 && wl < 645) {
      R = 1;
      G = -1 * (wl - 645) / (645 - 580);
      B = 0.0;
    } else if (wl >= 645 && wl <= 780) {
      R = 1;
      G = 0;
      B = 0;
    } else {
      R = 0;
      G = 0;
      B = 0;
    }

    colorSpace = "rgb(" + (R * 100) + "," + (G * 100) + "," + (B * 100) + ")"
    // colorSpace is an array with 5 elements.
    // The first element is the complete code as a string.  
    // Use colorSpace[0] as is to display the desired color.  
    // use the last four elements alone or together to access each of the individual r, g, b and a channels.  

    return colorSpace;

  }


}
