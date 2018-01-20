import React, { Component } from 'react';
import Appointments from './Components/Appointments';
import AddAppointment from './Components/AddAppointment';
import CalendarMonth from './Components/CalendarMonth'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      today: new Date().getDate(),
      appointments: [],
      calendar: []
    }
  }

  componentWillMount(){
    this.setState({
      appointments: [],
      calendar: [
        {
            monthName: 'January 2018',
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            days: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                          15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
                          29, 30, 31, -1, -2, -3 ],
            appointments: [],
            month: 1,
            year: 2018
        }
      ]
    });
  }

  handleAddAppointment(newAppointment){
    let appointments = this.state.appointments;
    let calendar = this.state.calendar;
    if(newAppointment.date >= this.state.today && newAppointment.date < 32){
      let index = appointments.findIndex(x => x.date === newAppointment.date);
      if(index === -1) {
        appointments.push(newAppointment);
        calendar[0].appointments[newAppointment.date] = newAppointment.name;
      }
      else alert('Appointment already exists on this date!');
    }
    else alert('Invalid Date!');
    this.setState({
      appointments:appointments,
      calendar: calendar
    });
  }

  handleEditAppointment(updatedAppointment){
    let appointments = this.state.appointments;
    let calendar = this.state.calendar;
    let index = appointments.findIndex(x => x.date === updatedAppointment.date);

    if(index === -1){
      alert("No appointment on this date, I went ahead and scheduled it for you")
      this.handleAddAppointment(updatedAppointment);
    }
    else {
      appointments[index].name = updatedAppointment.name;
      calendar[0].appointments[updatedAppointment.date] = updatedAppointment.name;
    }
    this.setState({
      appointments:appointments,
      calendar: calendar
    });
  }

  handleDeleteAppointment(id){
    let appointments = this.state.appointments;
    let calendar = this.state.calendar;
    let index = appointments.findIndex(x => x.id === id);
    let date = appointments[index].date;
    calendar[0].appointments[date] = null;
    appointments.splice(index, 1);
    this.setState({
      appointments:appointments,
      calendar: calendar
    });
  }

  handleEditClick(appt){
    console.log('yo')
  }

  render() {
    return (
      <div className="App">
      <CalendarMonth calendarData={this.state.calendar}/>
        <AddAppointment calendarData={this.state.calendar} addAppointment={this.handleAddAppointment.bind(this)}
        editAppointment={this.handleEditAppointment.bind(this)}/>
        <Appointments appointments={this.state.appointments}
        onEdit={this.handleEditClick.bind(this)} onDelete={this.handleDeleteAppointment.bind(this)} />
      </div>
    );
  }
}

export default App;
