import React from 'react';
//Simport './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import ReviewPage from './pages/ReviewPage'
import DoctorPage from './pages/DoctorPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/"   component={HomePage} />
      <Route path="/contact"  component={ContactPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/review"   component={ReviewPage} />
      <Route path="/meet"   component={DoctorPage} />
    </Switch>
  )}
