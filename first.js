// const express = require('express')
// const app = express();
// const util = require('util');
// const fet = require('node-fetch')

// import { resolve } from "dns";
"use strict"

function word(){
    let base_url = 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key='
    let api_key = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
    let final_url = base_url+api_key;
    
    $.ajax({
        type: 'GET',
        url: final_url,
        dataType: "json",
        success: function(data){
            // console.log(data)
            let temp = data.word
            let word = temp[0].toUpperCase() + temp.slice(1);
            $('#pazzaz').append('<em><strong>'+word+'</strong></h1>')
            $('#button').click(function(){
                meaning(word.toLowerCase())
                $('#meaning').remove();
            })
        }
    })
}

function meaning(newWord){
    let defU = `https://api.wordnik.com/v4/word.json/${newWord}/definitions?limit=200&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=`
    let api_key = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
    let fin = defU+api_key
    // console.log(fin)

    $.ajax({
        type:'GET',
        url:fin,
        dataType:'json',
        success: function(data){
            // console.log(data)
            // data.forEach(element=>{
            //     $('#mean').append('<li>'+element.text+'</li>')
            // })
            let i = 0;
            for(i=0;i<3;i++){
                $('#mean').append('<p>'+data[i].text+'<p>')
            }
        }
    })
}

async function loop(){
    word();
    $('#reload').click(function(){
        location.reload(true);
    })
}

$(document).ready(function(){
    loop()
});