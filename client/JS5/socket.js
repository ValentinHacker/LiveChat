"use strict";//auth
window.auth=function(a){window.sock=io.connect("/chat",{reconnectionAttempts:50,reconnectionDelay:1e3,reconnectionDelayMax:2e3,path:"/chat",query:{nick:a}}),sock.once("disallow",function(a){alert(a),location.reload()}),sock.once("allow",function(){return console.log("Successful Login.")}),sock.once("connect",function(){return sock.emit("auth",a)}),sock.on("connect_error",function(){alert("Could not connect. Refreshing..."),location.reload()}),sock.on("connect_timeout",function(){alert("Connection timed out. Refreshing..."),location.reload()}),sock.on("disconnect",function(){message("<font style='color: red'><b>You have been disconnected. Attempting reconnect...</font></b>","<b>SYSTEM</b>"),sock.open()}),sock.on("reconnecting",function(){return message("<font style='color: red'><b>Reconnecting...</font></b>","<b>SYSTEM</b>")}),sock.on("reconnect",function(){return message("<font style='color: green'><b>Reconnected.</font></b>","<b>SYSTEM</b>")}),sock.once("reconnect_error",function(){alert("Could not reconnect. Refreshing..."),location.reload()}),sock.once("reconnect_failed",function(){alert("Could not reconnect. Refreshing..."),location.reload()}),sock.on("ping",function(){return console.log("Pinging...")}),sock.on("pong",function(a){return console.log("Pong! Latency: "+a)})},console.log("Sockets Loaded."),window.message=function(){};