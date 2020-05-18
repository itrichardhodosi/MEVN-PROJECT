import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
//const express=require('express');
//const cors=require('cors')
//const morgan=require('morgan');
import path from 'path';

const app=express();
app.set('port',process.env.PORT || 3000);
app.listen(app.get('port'),()=>{
    console.log('server on port  ' + app.get('port'));
    console.log('ruta' + __dirname);
});
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));