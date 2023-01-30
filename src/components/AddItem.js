import React from 'react'

class AddItem extends React.Component{
    // To use props in a class component, we use this.props
    constructor(props){
        super(props);
        this.state = {
            productName : "",
            productPrice : 0
        };
    };
  render() {
    const styles = {
        border: '3px solid rgba(0, 0, 0, 0.3)', 
   };
    return (
      <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            this.props.addItem(this.state.productName, Number(this.state.productPrice));
          }}>
          <div className="col-6">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="name"
              placeholder="Enter your name"
              style={styles}
              name = "productName"
              onChange={(e) => {
                this.setState({productName : e.currentTarget.value})
              }}
              value = {this.state.productName}
            />
          </div>

          <div className="mb-3 col-6">
            <label htmlFor="inputPrice">Price</label>
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              placeholder="Enter price"
              style={styles}
              name = "productPrice"
              onChange={(e) => {
                this.setState({productPrice: Number(e.currentTarget.value)})
              }}
              value = {this.state.productPrice}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
