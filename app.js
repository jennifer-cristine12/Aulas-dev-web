const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require ("body-parser")
const {initializeApp, applicationDefault, cert} =   require('firebase-admin/app')
const {getFirestore, Timestamp, FieldValue} = require('firebase-admin/firestore')

const serviceAccount = require('./projeto-web-227f1-firebase-adminsdk-ghrz1-5b0f0ff896.json')

initializeApp({

    credential: cert(serviceAccount)
})
var admin = require("firebase-admin");
console.log("rodou")
const db = getFirestore()

app.listen(8081, function(){
    console.log("Servidor ativo!")
})
app.get('/', function(req,res){//funciona
    res.send("rodando")
})/*
app.get('/', function(req, res){
    res.render("./view/primeira_pagina")
})/*
app.post('/cadastrar', function(req,res){
    var res = db.collection('agendamentos').add({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.cep,
        observacao: req.body.observacao
    }).then(function(){
        console.log('added document');
        res.redirect('/')
    })
   
})

app.get('/consulta', function(req, res){
    post.findAll().then(function(post){
        res.render("consulta", {post})
    }).catch(function(erro){
        console.log("Erro ao carregar dados do banco: " + erro)
    })
})
*/
