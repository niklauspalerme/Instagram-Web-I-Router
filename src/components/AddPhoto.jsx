import React, { Component, Fragment } from 'react';

class AddPhoto extends Component {
  constructor(props) {
    super(props);

    this.HandleFormSubmit=this.HandleFormSubmit.bind(this);
  }

  HandleFormSubmit(event){
    event.preventDefault();
    let image= event.target.image.value;
    let description=event.target.description.value;
    this.props.onAddPhoto(image,description)
  }

  render (){
    return (
      <Fragment>
          <h1>Photowall</h1>
          <div className="form">
            <form onSubmit={e=>this.HandleFormSubmit(e)}>
              <input type="text" placeholder='Link' name='image'/>
              <input type='text' placeholder='Description' name='description'/>
              <button>Post</button>
            </form>
          </div>
      </Fragment>
    );
  }

}

export default  AddPhoto;