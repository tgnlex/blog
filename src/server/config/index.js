import express from 'express';
import path from 'path';
import helmet from 'helmet'
import cors from 'cors';

const VIEWS = path.resolve('../../views');
const plugins = [
  express.static('src/static'),
  express.urlencoded({extended: true}),
  express.json(),
  helmet(),
  cors()
];

const globals = [
  { key: 'app.name', value: 'Express Blog'},
  { key: 'app.host', value: '127.0.0.1'},
  { key: 'app.port', value: 4000},
  { key: 'app.version', value: '1.0.0'},
  { key: 'app.env', value: 'development' },
  { key: 'views', value: VIEWS },
  { key: 'view engine', value: "html" }
];


const config = { plugins, globals };
export default config;
