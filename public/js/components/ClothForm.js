import React, {Component} from 'react';
import {render} from 'react';
import Image from '../containers/Image'

let cloItem = {
  "season": '',
  "color": [],
  "style": '',
  "sort": ''
}
class ClothForm extends Component {

  selectSeason(e) {
    cloItem.season = e.target.value;
  }

  selectColor() {
    cloItem.color = $('#selectColor').val();
  }

  selectStyle(e) {
    cloItem.style = e.target.value;
  }

  selectSort(e) {
    cloItem.sort = e.target.value;
    console.log(cloItem);
  }

  onFileSelect(e){
    const image =  e.target.files[0];
    console.log(image);
  }

  render() {
    return (
      <div>
        <div>
          <label for="selectReason">选择季节：</label>
          <select id="selectReason" multiple="multiple"
                  name="select-reason" onChange={this.selectSeason} className="form-control">
            <option value="spring">春</option>
            <option value="summer">夏</option>
            <option value="autumn">秋</option>
            <option value="winter">冬</option>
          </select>
        </div>

        <div>
          <label for="selectColor">选择颜色(按住Ctrl键可多选)：</label>
          <select id="selectColor" multiple="multiple" onChange={this.selectColor} className="form-control">
            <option value="红色">红色</option>
            <option value="黑色">黑色</option>
            <option value="黄色">黄色</option>
            <option value="蓝色">蓝色</option>
            <option value="绿色">绿色</option>
            <option value="灰色">灰色</option>
            <option value="紫色">紫色</option>
          </select>
        </div>

        <div>
          <label for="selectStyle">选择风格：</label>
          <select id="selectStyle" multiple="multiple" onChange={this.selectStyle} className="form-control">
            <option value="小清新">小清新</option>
            <option value="森女风">森女风</option>
            <option value="欧美风">欧美风</option>
            <option value="淑女风">淑女风</option>
          </select>
        </div>

        <div>
          <label for="seleteSort">选择类别：</label>
          <select id="seleteSrt" multiple="multiple" onChange={this.selectSort} className="form-control">
            <option value="coat">上衣</option>
            <option value="pants">裤子</option>
            <option value="T-shirt">T恤</option>
            <option value="skirt">裙子</option>
          </select>
        </div>

        <Image/>

      </div>


    )
  }
}

export default ClothForm;