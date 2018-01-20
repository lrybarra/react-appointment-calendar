import React, { Component } from 'react';

class AppointmentItem extends Component {
  deleteAppointment(id){
    this.props.onDelete(id);
  }

  editAppointment(appt){
    this.props.onEdit(appt);
  }

  render() {
    return (
      <span className="Appointment">
        <b>Date:</b> {this.props.appointment.month}/{this.props.appointment.date}/{this.props.appointment.year} <b>Appointment:</b> {this.props.appointment.name}
        <button className="btn btn-sm btn-danger" onClick={this.deleteAppointment.bind(this, this.props.appointment.id)}>DELETE</button>
      </span>
    );
  }
}

export default AppointmentItem;
