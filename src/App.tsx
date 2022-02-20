import React, { Component } from 'react'
import { render } from 'react-dom'
import './App.css';
import KDECRoute from './KDEC/KDECRoute'

const app = document.getElementById('app')
// console.log("client.js");

render(
  <KDECRoute />, app
)
