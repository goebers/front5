/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

function uploadJS(evt) {
    
    evt.preventDefault();
    
    const div = document.querySelector('div');

    const p = document.querySelector('p');
    
    p.innerHTML = "Uploading in process...";
    
// select input element where type is file
    const input = document.querySelector('input[type="file"]');
    // make FormData -object
    const data = new FormData();
    // add file to FormData -object.
    // Note that 'files' is an FileList object. This means that you can upload multiple files. 
    data.append('uploadtoservlet', input.files[0]);
    // make an object for settings
    const settings = {
            method: 'POST',
            credentials: 'same-origin', // this might be needed for some servers
            body: data
        };
        
    fetch('uploadtoservlet', settings).then((response) => {
        return response.text();
    }).then((text) => {
        console.log(text);
        div.innerHTML = text;
        p.innerHTML = "Upload done!";
    });
}

document.querySelector('form').addEventListener('submit', uploadJS);