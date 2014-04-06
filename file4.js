var z=0;
function init1() {if (m==0){
if(z==0 && (l==0 || l==4))
{n=n+1;
document.getElementById('a').style.left ="320px";
document.getElementById("b").style.left="560px";
document.getElementById("c").style.left="760px";
document.getElementById("d").style.left="560px";
document.getElementById("e").style.left="760px";
document.getElementById("r").style.left="340px";
document.getElementById("h").style.left="400px";
document.getElementById("m").style.left="460px";
document.getElementById("o").style.left="380px";
document.getElementById("p").style.left="380px";
document.getElementById("q").style.left="380px";
document.getElementById("z").style.left="380px";
document.getElementById("ab").style.left="350px";
document.getElementById("bc").style.left="435px";
doMove1();
}
if(z==0 && l==1)
{n=n+1;
document.getElementById('a').style.left ="320px";
document.getElementById("b").style.left="760px";
document.getElementById("c").style.left="760px";
document.getElementById("d").style.left="560px";
document.getElementById("e").style.left="560px";
document.getElementById("r").style.left="340px";
document.getElementById("h").style.left="400px";
document.getElementById("m").style.left="460px";
document.getElementById("o").style.left="380px";
document.getElementById("p").style.left="380px";
document.getElementById("q").style.left="380px";
document.getElementById("z").style.left="380px";
document.getElementById("ab").style.left="350px";
document.getElementById("bc").style.left="435px";
doMove1();
}
if(z==0 && l==2)
{n=n+1;
document.getElementById('a').style.left ="320px";
document.getElementById("b").style.left="760px";
document.getElementById("c").style.left="560px";
document.getElementById("d").style.left="760px";
document.getElementById("e").style.left="560px";
document.getElementById("r").style.left="340px";
document.getElementById("h").style.left="400px";
document.getElementById("m").style.left="460px";
document.getElementById("o").style.left="380px";
document.getElementById("p").style.left="380px";
document.getElementById("q").style.left="380px";
document.getElementById("z").style.left="380px";
document.getElementById("ab").style.left="350px";
document.getElementById("bc").style.left="435px";
doMove1();
}
if(z==0 && l==3)
{n=n+1;
document.getElementById('a').style.left ="320px";
document.getElementById("b").style.left="560px";
document.getElementById("c").style.left="560px";
document.getElementById("d").style.left="760px";
document.getElementById("e").style.left="760px";
document.getElementById("r").style.left="340px";
document.getElementById("h").style.left="400px";
document.getElementById("m").style.left="460px";
document.getElementById("o").style.left="380px";
document.getElementById("p").style.left="380px";
document.getElementById("q").style.left="380px";
document.getElementById("z").style.left="380px";
document.getElementById("ab").style.left="350px";
document.getElementById("bc").style.left="435px";
doMove1();
}
}
}

function doMove1() {z=z+1;
if(z<391)
  {document.getElementById("a").style.left = parseInt(document.getElementById("a").style.left)+1;
document.getElementById("r").style.left = parseInt(document.getElementById("r").style.left)+1;
document.getElementById("h").style.left = parseInt(document.getElementById("h").style.left)+1;
document.getElementById("m").style.left = parseInt(document.getElementById("m").style.left)+1;
document.getElementById("o").style.left = parseInt(document.getElementById("o").style.left)+1;
document.getElementById("p").style.left = parseInt(document.getElementById("p").style.left)+1;
document.getElementById("q").style.left = parseInt(document.getElementById("q").style.left)+1;
document.getElementById("z").style.left = parseInt(document.getElementById("z").style.left)+1;
document.getElementById("ab").style.left = parseInt(document.getElementById("ab").style.left)+1;
document.getElementById("bc").style.left = parseInt(document.getElementById("bc").style.left)+1;
  }
if(z<241)
  {document.getElementById("b").style.left = parseInt(document.getElementById("b").style.left)-1;
document.getElementById("c").style.left = parseInt(document.getElementById("c").style.left)-1;
document.getElementById("d").style.left = parseInt(document.getElementById("d").style.left)-1;
document.getElementById("e").style.left = parseInt(document.getElementById("e").style.left)-1;
  }
if(z==391) return;
setTimeout(doMove1,1); 
}




function init2() {if(m==0){
if(z==391 && (l==0 || l==4))
{n=n+1;
document.getElementById("a").style.left="710px";
document.getElementById("b").style.left="320px";
document.getElementById("c").style.left="520px";
document.getElementById("d").style.left="320px";
document.getElementById("e").style.left="520px";
document.getElementById("r").style.left="730px";
document.getElementById("h").style.left="790px";
document.getElementById("m").style.left="850px";
document.getElementById("o").style.left="770px";
document.getElementById("p").style.left="770px";
document.getElementById("q").style.left="770px";
document.getElementById("z").style.left="770px";
document.getElementById("ab").style.left="740px";
document.getElementById("bc").style.left="825px";
doMove2();
}
if(z==391 && l==1)
{n=n+1;
document.getElementById("a").style.left="710px";
document.getElementById("d").style.left="320px";
document.getElementById("e").style.left="320px";
document.getElementById("b").style.left="520px";
document.getElementById("c").style.left="520px";
document.getElementById("r").style.left="730px";
document.getElementById("h").style.left="790px";
document.getElementById("m").style.left="850px";
document.getElementById("o").style.left="770px";
document.getElementById("p").style.left="770px";
document.getElementById("q").style.left="770px";
document.getElementById("z").style.left="770px";
document.getElementById("ab").style.left="740px";
document.getElementById("bc").style.left="825px";
doMove2();
}
if(z==391 && l==2)
{n=n+1;
document.getElementById("a").style.left="710px";
document.getElementById("b").style.left="520px";
document.getElementById("c").style.left="320px";
document.getElementById("d").style.left="520px";
document.getElementById("e").style.left="320px";
document.getElementById("r").style.left="730px";
document.getElementById("h").style.left="790px";
document.getElementById("m").style.left="850px";
document.getElementById("o").style.left="770px";
document.getElementById("p").style.left="770px";
document.getElementById("q").style.left="770px";
document.getElementById("z").style.left="770px";
document.getElementById("ab").style.left="740px";
document.getElementById("bc").style.left="825px";
doMove2();
}
if(z==391 && l==3)
{n=n+1;
document.getElementById("a").style.left="710px";
document.getElementById("d").style.left="520px";
document.getElementById("e").style.left="520px";
document.getElementById("b").style.left="320px";
document.getElementById("c").style.left="320px";
document.getElementById("r").style.left="730px";
document.getElementById("h").style.left="790px";
document.getElementById("m").style.left="850px";
document.getElementById("o").style.left="770px";
document.getElementById("p").style.left="770px";
document.getElementById("q").style.left="770px";
document.getElementById("z").style.left="770px";
document.getElementById("ab").style.left="740px";
document.getElementById("bc").style.left="825px";
doMove2();
}
}
}

function doMove2() {z=z-1;
if(z>0)
  {document.getElementById("a").style.left = parseInt(document.getElementById("a").style.left)-1;
  document.getElementById("r").style.left = parseInt(document.getElementById("r").style.left)-1;
  document.getElementById("h").style.left = parseInt(document.getElementById("h").style.left)-1;
  document.getElementById("m").style.left = parseInt(document.getElementById("m").style.left)-1;
  document.getElementById("o").style.left = parseInt(document.getElementById("o").style.left)-1;
  document.getElementById("p").style.left = parseInt(document.getElementById("p").style.left)-1;
  document.getElementById("q").style.left = parseInt(document.getElementById("q").style.left)-1;
  document.getElementById("z").style.left = parseInt(document.getElementById("z").style.left)-1;
  document.getElementById("ab").style.left = parseInt(document.getElementById("ab").style.left)-1;
  document.getElementById("bc").style.left = parseInt(document.getElementById("bc").style.left)-1;
  }
if(z>150)
  {document.getElementById("b").style.left = parseInt(document.getElementById("b").style.left)+1;
  document.getElementById("c").style.left = parseInt(document.getElementById("c").style.left)+1;
  document.getElementById("d").style.left = parseInt(document.getElementById("d").style.left)+1;
  document.getElementById("e").style.left = parseInt(document.getElementById("e").style.left)+1;
  }
  
if(z==0) return;
setTimeout(doMove2,1); 
}