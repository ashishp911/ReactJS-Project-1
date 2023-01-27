import React from 'react'

class AddItem extends React.Component{
  render() {
    const styles = {
        border: '3px solid rgba(0, 0, 0, 0.3)', 
   };
    return (
      <div>
        <form>
          <div className="col-6">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="name"
              placeholder="Enter your name"
              style={styles}
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
