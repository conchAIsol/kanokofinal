const template = document.createElement('template');
template.innerHTML = `
<aside class="folders_sidebar">
      <ul class="start_panel_button" style="padding: 5px;">
	          <nav>
              <label for="touch"><span class="dropdown"><img src="arts/UI/folder.png" widht="20" height="20">2D Art</span></label>       
              <input type="checkbox" id="touch" checked> 
              <ul class="slide">
                <a href="artsnew.html"><li><img src="arts/UI/folder.png" widht="20" height="20">New</li></a>
                <a href="arts1.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Old</li></a>
                <a href="arts2.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Silly stuff</li></a>
                <a href="arts3.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Ink</li></a>
                <a href="arts4.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Lupin III</li></a>
                <a href="arts5.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Pencil</li></a>
                <a href="arts6.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Frutiger Aero</li></a>
                <a href="arts7.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Tamagotchi</li></a>
                <a href="arts8.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Bug Meadow</li></a>
                <a href="arts9.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Flash Girls Games</li></a>
                <a href="arts10.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Neopets</li></a>
                <a href="moonbunny.html"><li><img src="arts/UI/folder.png" widht="20" height="20">Moon Bunny</li></a>
              </ul>
            </nav> 
	   </ul>
    </aside>
`
document.body.appendChild(template.content);