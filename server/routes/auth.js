const express = require('express');
const router = express.Router();
const jwt =require('jsonwebtoken');
const bcrypt = require('bycrptjs');
const mysql = require('mysql2');
require('dotenv').config();