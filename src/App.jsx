import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Navbar_component } from './All.components/navbar_component';
import { Menu_component } from './All.components/menu_component';
import img4 from "./images/header_3.png";
import { Slider_component } from './All.components/slider_component';
import { Section_01_component } from './All.components/Section_01_component';
import { Section_03_component } from './All.components/Section_03_component';
import { Section_05_component } from './All.components/Section_05_component';
import { Section_07_component } from './All.components/Section_07_component';
import { Category_component } from './All.components/Category_component';
import { Futter_component } from './All.components/futter_component';

function App() {


  return (
  <div>
  <Navbar_component />
  <Menu_component />
  <img src={img4} width="100%" />
  <Slider_component />
  <Category_component />
  <Section_01_component />
  <Section_05_component />
  <Section_07_component />
  <Section_03_component />
  <Futter_component/>
  </div>
  )
}
export default App
