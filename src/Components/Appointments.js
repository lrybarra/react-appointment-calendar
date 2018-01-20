import React, { Component } from 'react';
import AppointmentItem from './AppointmentItem';

class Appointments extends Component {
  deleteAppointment(id){
    this.props.onDelete(id);
  }

  editAppointment(appt){
    this.props.onEdit(appt);
  }

  render() {
    let appointmentItems;
    if(this.props.appointments){
      appointmentItems = this.props.appointments.map(appointment => {
        return(
          <AppointmentItem onEdit={this.editAppointment.bind(this)} onDelete={this.deleteAppointment.bind(this)} key={appointment.date} appointment={appointment} />
        );
    });
    }
    return (
      <div className="Appointments">
        {appointmentItems}
      </div>
    );
  }
}

export default Appointments;
