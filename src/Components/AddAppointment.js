import React, { Component } from 'react';
import uuid from 'uuid';

class AddAppointment extends Component {

  constructor(){
    super();
    this.state = {
      newAppointment: {}
    }
  }

  handleSubmit(e) {
    this.setState({newAppointment: {
      id: uuid.v4(),
      date: this.refs.date.value,
      name: this.refs.name.value,
      month: this.refs.month.value,
      year: this.refs.year.value
    }}, function(){
      this.props.addAppointment(this.state.newAppointment);
    });
    this.refs.date.value = '';
    this.refs.name.value = '';
    e.preventDefault();
  }

  handleEdit(e){
    this.setState({updatedAppointment: {
      date: this.refs.date.value,
      name: this.refs.name.value
    }}, function(){
      this.props.editAppointment(this.state.updatedAppointment);
    });
    this.refs.date.value = '';
    this.refs.name.value = '';
    e.preventDefault();
  }

  render() {
    let data;
    if(this.props.calendarData){
      data = this.props.calendarData[0];
    }
    return (
      <div>
        <div className="col-md-10">
        <h5>Manage Appointments</h5>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="col-md-4">
            <label>Day of Month</label><br />
            <input className="form-control" type="number" ref="date" />
          </div>
          <div className="col-md-4">
            <label>Name</label><br />
            <input className="form-control" type="text" ref="name" />
            <input type="hidden" ref="month" value={data.month} />
            <input type="hidden" ref="year" value={data.year} />
          </div>
          <div className="col-md-4">
            <button className="btn btn-form btn-sm btn-primary" type="submit">Add</button>
            <button className="btn btn-form btn-sm btn-success" onClick={this.handleEdit.bind(this)}>Edit</button>
          </div>
        </form>
        <br /><br />
        </div>
      </div>
    );
  }
}

export default AddAppointment;
