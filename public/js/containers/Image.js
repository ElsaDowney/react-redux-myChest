import React, {Component} from 'react';
import {render} from 'react';
import {connect} from 'react-redux';

class Image extends Component {


  uploadImage() {
    const imageFile = this.refs.image.files[0];
    this.props.onUpload(imageFile);
  }

  render() {
    return (
      <div>
        <label for="uploadFile">上传宝贝：</label>
        <input ref="image" id="uploadFile" type="file" className="form-control"/>
        <button onClick={this.uploadImage.bind(this)}
                className="btn btn-primary btn-sm">确定上传</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUpload: (imageFile) => {
      dispatch({type: 'UPLOADIMAGE', imageFile})
    }
  }
}

export default connect(()=> {return {}}, mapDispatchToProps)(Image);
