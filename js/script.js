// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict";

document.addEventListener('DOMContentLoaded', (event) => {
  const cookie = document.getElementById('cookie');
  const counter = document.getElementById('counter');
  let count = localStorage.getItem('cookieCount') ? parseInt(localStorage.getItem('cookieCount')) : 0;

  counter.textContent = count;

  cookie.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    localStorage.setItem('cookieCount', count);
  });
});
