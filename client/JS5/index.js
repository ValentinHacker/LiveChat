"use strict";var text={shift:!1,area:null,send:null},prefix="!!";for(window.nick="guest_"+Math.round(1e5*Math.random());!(nick=prompt("Insert a Nickname:",nick))||!/^[a-zA-Z0-9_\-()]+$/i.test(nick););function send(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:text.send.value;a.startsWith(prefix)||(a=a.trim(),sendMessage(a),text.send.value="")}//send
function load(){console.log("Index loaded"),text.area=document.getElementById("msgarea"),text.send=document.getElementById("txtarea"),auth(nick),sock.on("message",function(a,b){message(a,b)}),sock.once("connect",function(){text.area.innerHTML="",message("This is a Beta version of a chatting service, upcoming features are: profile picture support, message history view, spam defense, multiple chatrooms and more security!","<b>SYSTEM</b>"),message("<u>Please be kind and don't spam, we have means of banning aggitators.</u>","<b>SYSTEM</b>"),console.info("The prefix is !!, type !!help in chat for commands.")})}//load
function sendMessage(a){a?sock.connected&&!sock.disconnected?sock.send(a):message("<font style='color: red'><b>You cannot send messages while disconnected!</b></font>","<b>SYSTEM</b>"):message("<font style='color: red'><b>You cannot send an empty message!</b></font>","<b>SYSTEM</b>")}//sendMessage
function message(a,b){var c=document.createElement("p");c.innerHTML="<b>".concat(b,":</b> ").concat(a,"<br />"),text.area.appendChild(c),text.area.scrollHeight+=2*c.offsetHeight}//message
window.message=message;function shiftcheck(a){var b=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];"Shift"==a.key&&(text.shift=b),"Enter"!=a.key||text.shift||b||send()}//shiftcheck
function submit(){text.shift=!1,shiftcheck({key:"Enter"},!1)}//submit
function sanitize(a){return a=a.replace(/&/gmi,"&amp;").replace(/</gmi,"&lt;").replace(/>/gmi,"&gt;").replace(/"/gmi,"&quot;").replace(/'/gmi,"&#039;"),a}//sanitize
window.addEventListener("DOMContentLoaded",load);