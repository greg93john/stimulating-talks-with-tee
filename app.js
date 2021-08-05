require('dotenv').config();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const express = require("express");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();
