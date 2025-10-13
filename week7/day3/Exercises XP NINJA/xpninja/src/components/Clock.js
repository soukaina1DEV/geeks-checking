import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().toLocaleString("default", { month: "short" }),
      week: this.getWeekNumber(),
      dayOfMonth: new Date().getDate(),
      dayOfWeek: new Date().toLocaleString("default", { weekday: "short" }),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    };
  }

  getWeekNumber() {
    const currentDate = new Date();
    const start = new Date(currentDate.getFullYear(), 0, 1);
    const diff =
      currentDate -
      start +
      (start.getTimezoneOffset() - currentDate.getTimezoneOffset()) * 60000;
    const oneWeek = 604800000;
    return Math.floor(diff / oneWeek) + 1;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      year: new Date().getFullYear(),
      month: new Date().toLocaleString("default", { month: "short" }),
      week: this.getWeekNumber(),
      dayOfMonth: new Date().getDate(),
      dayOfWeek: new Date().toLocaleString("default", { weekday: "short" }),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    });
  }

  render() {
    const { year, month, week, dayOfMonth, hour, minute, second } = this.state;

    return (
      <div className="clock-container">
        <div className="year">{year} / Year</div>
        <div className="center">
          <h2>
            {month} month &nbsp; week {week} &nbsp; {dayOfMonth} day &nbsp;
            {hour} hr &nbsp; {minute} min &nbsp; {second} sec
          </h2>
        </div>
        <div className="month">{month}</div>
      </div>
    );
  }
}

export default Clock;
