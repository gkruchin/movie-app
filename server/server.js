const path = require('path');
const express = require('express');
const db = require('./db/markets');

const app = express();
const port = process.env.PORT || 3000;

