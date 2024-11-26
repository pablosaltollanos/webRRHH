/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
            window.addEventListener("load",mostrarord);
            function mostrarord() {
                var x = document.getElementById('licord');
                var x2 = document.getElementById('licest');
                var x3 = document.getElementById('licvar');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                    x3.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }
            window.addEventListener("load",mostrardis);
            function mostrardis() {
                var x = document.getElementById('licest');
                var x2 = document.getElementById('licord');
                var x3 = document.getElementById('licvar');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                    x3.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }
            window.addEventListener("load",mostrarmat);
            function mostrarmat() {                
                var x = document.getElementById('licvar');
                var x2 = document.getElementById('licest');
                var x3 = document.getElementById('licord');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                    x3.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }
            
            
            window.addEventListener("load",humcap);
            function humcap() {
                var x = document.getElementById('FHumCap');
                var x2 = document.getElementById('FHumSug');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }
            window.addEventListener("load",humsug);
            function humsug() {
                var x = document.getElementById('FHumSug');
                var x2 = document.getElementById('FHumCap');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }
            
            window.addEventListener("load",recacc);
            function recacc() {
                var x = document.getElementById('RMedAcc');
                var x2 = document.getElementById('RMedFam');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }
            window.addEventListener("load",reccui);
            function reccui() {
                var x = document.getElementById('RMedFam');
                var x2 = document.getElementById('RMedAcc');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }
            
            window.addEventListener("load",prenov);
            function prenov() {
                var x = document.getElementById('PSalNov');
                var x2 = document.getElementById('PSalDie');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }
            window.addEventListener("load",predie);
            function predie() {
                var x = document.getElementById('PSalDie');
                var x2 = document.getElementById('PSalNov');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }
          
            window.addEventListener("load",utpret);
            function utpret() {
                var x = document.getElementById('utpRRet');
                var x2 = document.getElementById('utpRPen');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }
            window.addEventListener("load",utppen);
            function utppen() {
                var x = document.getElementById('utpRPen');
                var x2 = document.getElementById('utpRRet');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                    x2.style.display = 'none';
                } else {
                    x.style.display = 'none';
                }
            }

