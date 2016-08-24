import React, {Component} from 'react';
import {render} from 'react';
import connect from 'react-redux';

class Image extends Component{
  onFileSelect(e){
    imageFile = e.target.value.files[0];
    console.log(imageFile);
  }

  render(){
    let imageFile;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form-group">
          <label for="uploadFile">上传宝贝：</label>
          <input id="uploadFile" type="file" onChange={this.onFileSelect} name="image" className="form-control"/>
          <span className="input-group-btn">

                    <input type="submit" value="确定上传" className="btn btn-primary btn-sm"/>
                </span>
        </form>
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch){
//   return {
//     onSubmit:(imageFile) => {dispatch({type:'UPLOADIMAGE',imageFile})}
//   }
// }

export default connect(()=>{return {}}, ()=>{return {}})(Image);