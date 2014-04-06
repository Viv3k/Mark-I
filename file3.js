var l=0;
var m=0;
var n=0;
var p=0;
var q=0;
function cf()
{
if (m==0 && (n%2)==0 && (z==0 || z==391))
{p=p+1;
if((p-q)>0)
	l=(p-q)%4;

if((p-q)<0)
	l=4-((q-p)%4);
if((p-q)==0)
	l=0;
if (l==1)
	{
	document.getElementById("b").style.left="560px";
	document.getElementById("e").style.left="760px";
	document.getElementById("d").style.left="560px";
	document.getElementById("c").style.left="760px";
	document.getElementById("c").style.top="100px";
	document.getElementById("d").style.top="300px";
	document.getElementById("b").style.top="100px";
	document.getElementById("e").style.top="300px";
	}
if (l==2)
	{
	document.getElementById("d").style.left="560px";
	document.getElementById("c").style.left="760px";
	document.getElementById("e").style.left="560px";
	document.getElementById("b").style.left="760px";
	document.getElementById("b").style.top="100px";
	document.getElementById("e").style.top="300px";
	document.getElementById("d").style.top="100px";
	document.getElementById("c").style.top="300px";
	}
if (l==3)
	{
	document.getElementById("e").style.left="560px";
	document.getElementById("b").style.left="760px";
	document.getElementById("c").style.left="560px";
	document.getElementById("d").style.left="760px";
	document.getElementById("d").style.top="100px";
	document.getElementById("b").style.top="300px";
	document.getElementById("e").style.top="100px";
	document.getElementById("c").style.top="300px";
	}
if (l==0 || l==4)
	{
	document.getElementById("c").style.left="560px";
	document.getElementById("d").style.left="760px";
	document.getElementById("b").style.left="560px";
	document.getElementById("e").style.left="760px";
	document.getElementById("e").style.top="100px";
	document.getElementById("b").style.top="300px";
	document.getElementById("c").style.top="100px";
	document.getElementById("d").style.top="300px";
	}
cyc1();
return p;
}

if (m==0 && (n%2)==1 && (z==0 || z==391))
{p=p+1;
if((p-q)>0)
	l=(p-q)%4;

if((p-q)<0)
	l=4-((q-p)%4);
if((p-q)==0)
	l=0;
if (l==1)
	{
	document.getElementById("b").style.left="320px";
	document.getElementById("e").style.left="520px";
	document.getElementById("d").style.left="320px";
	document.getElementById("c").style.left="520px";
	document.getElementById("c").style.top="100px";
	document.getElementById("d").style.top="300px";
	document.getElementById("b").style.top="100px";
	document.getElementById("e").style.top="300px";
	}
if (l==2)
	{
	document.getElementById("d").style.left="320px";
	document.getElementById("c").style.left="520px";
	document.getElementById("e").style.left="320px";
	document.getElementById("b").style.left="520px";
	document.getElementById("b").style.top="100px";
	document.getElementById("e").style.top="300px";
	document.getElementById("d").style.top="100px";
	document.getElementById("c").style.top="300px";
	}
if (l==3)
	{
	document.getElementById("e").style.left="320px";
	document.getElementById("b").style.left="520px";
	document.getElementById("c").style.left="320px";
	document.getElementById("d").style.left="520px";
	document.getElementById("d").style.top="100px";
	document.getElementById("b").style.top="300px";
	document.getElementById("e").style.top="100px";
	document.getElementById("c").style.top="300px";
	}
if (l==0 || l==4)
	{
	document.getElementById("c").style.left="320px";
	document.getElementById("d").style.left="520px";
	document.getElementById("b").style.left="320px";
	document.getElementById("e").style.left="520px";
	document.getElementById("e").style.top="100px";
	document.getElementById("b").style.top="300px";
	document.getElementById("c").style.top="100px";
	document.getElementById("d").style.top="300px";
	}
cyc1();
return p;
}




}
function cyc1()
{m=m+1;
if(m<201 && l==1)
	{
	document.getElementById("b").style.left = parseInt(document.getElementById("b").style.left)+1;
	document.getElementById("d").style.top = parseInt(document.getElementById("d").style.top)-1;
	document.getElementById("c").style.top = parseInt(document.getElementById("c").style.top)+1;
	document.getElementById("e").style.left = parseInt(document.getElementById("e").style.left)-1;
	}
if(m<201 && l==2)
	{
	document.getElementById("d").style.left = parseInt(document.getElementById("d").style.left)+1;
	document.getElementById("e").style.top = parseInt(document.getElementById("e").style.top)-1;
	document.getElementById("b").style.top = parseInt(document.getElementById("b").style.top)+1;
	document.getElementById("c").style.left = parseInt(document.getElementById("c").style.left)-1;
	}
if(m<201 && l==3)
	{
	document.getElementById("e").style.left = parseInt(document.getElementById("e").style.left)+1;
	document.getElementById("c").style.top = parseInt(document.getElementById("c").style.top)-1;
	document.getElementById("d").style.top = parseInt(document.getElementById("d").style.top)+1;
	document.getElementById("b").style.left = parseInt(document.getElementById("b").style.left)-1;
	}
if(m<201 && (l==0 || l==4))
	{
	document.getElementById("c").style.left = parseInt(document.getElementById("c").style.left)+1;
	document.getElementById("b").style.top = parseInt(document.getElementById("b").style.top)-1;
	document.getElementById("e").style.top = parseInt(document.getElementById("e").style.top)+1;
	document.getElementById("d").style.left = parseInt(document.getElementById("d").style.left)-1;
	}
if(m==201){m=0;
return l;}
setTimeout(cyc1,1);
}

function cb()
{
if (m==0 && n%2==0 && (z==0 || z==391))
{q=q+1;
if((q-p)>0)
	l=(q-p)%4;

if((q-p)<0)
	l=4-((p-q)%4);
if((p-q)==0)
	l=0;
if (l==1)
	{
	document.getElementById("b").style.left="560px";
	document.getElementById("e").style.left="760px";
	document.getElementById("d").style.left="560px";
	document.getElementById("c").style.left="760px";
	document.getElementById("c").style.top="100px";
	document.getElementById("d").style.top="300px";
	document.getElementById("b").style.top="100px";
	document.getElementById("e").style.top="300px";
	}
if (l==2)
	{
	document.getElementById("c").style.left="560px";
	document.getElementById("e").style.left="760px";
	document.getElementById("b").style.left="560px";
	document.getElementById("d").style.left="760px";
	document.getElementById("c").style.top="100px";
	document.getElementById("b").style.top="300px";
	document.getElementById("e").style.top="100px";
	document.getElementById("d").style.top="300px";
	}
if (l==3)
	{
	document.getElementById("e").style.left="560px";
	document.getElementById("b").style.left="760px";
	document.getElementById("c").style.left="560px";
	document.getElementById("d").style.left="760px";
	document.getElementById("d").style.top="100px";
	document.getElementById("b").style.top="300px";
	document.getElementById("e").style.top="100px";
	document.getElementById("c").style.top="300px";
	}
if (l==0 || l==4)
	{
	document.getElementById("d").style.left="560px";
	document.getElementById("b").style.left="760px";
	document.getElementById("e").style.left="560px";
	document.getElementById("c").style.left="760px";
	document.getElementById("d").style.top="100px";
	document.getElementById("e").style.top="300px";
	document.getElementById("b").style.top="100px";
	document.getElementById("c").style.top="300px";
	}
cyc2();
return q;
}

if (m==0 && n%2==1 && (z==0 || z==391))
{q=q+1;
if((q-p)>0)
	l=(q-p)%4;

if((q-p)<0)
	l=4-((p-q)%4);
if((p-q)==0)
	l=0;
if (l==1)
	{
	document.getElementById("b").style.left="320px";
	document.getElementById("e").style.left="520px";
	document.getElementById("d").style.left="320px";
	document.getElementById("c").style.left="520px";
	document.getElementById("c").style.top="100px";
	document.getElementById("d").style.top="300px";
	document.getElementById("b").style.top="100px";
	document.getElementById("e").style.top="300px";
	}
if (l==2)
	{
	document.getElementById("c").style.left="320px";
	document.getElementById("e").style.left="520px";
	document.getElementById("b").style.left="320px";
	document.getElementById("d").style.left="520px";
	document.getElementById("c").style.top="100px";
	document.getElementById("b").style.top="300px";
	document.getElementById("e").style.top="100px";
	document.getElementById("d").style.top="300px";
	}
if (l==3)
	{
	document.getElementById("e").style.left="320px";
	document.getElementById("b").style.left="520px";
	document.getElementById("c").style.left="320px";
	document.getElementById("d").style.left="520px";
	document.getElementById("d").style.top="100px";
	document.getElementById("b").style.top="300px";
	document.getElementById("e").style.top="100px";
	document.getElementById("c").style.top="300px";
	}
if (l==0 || l==4)
	{
	document.getElementById("d").style.left="320px";
	document.getElementById("b").style.left="520px";
	document.getElementById("e").style.left="320px";
	document.getElementById("c").style.left="520px";
	document.getElementById("d").style.top="100px";
	document.getElementById("e").style.top="300px";
	document.getElementById("b").style.top="100px";
	document.getElementById("c").style.top="300px";
	}
cyc2();
return q;
}



}
function cyc2()
{m=m+1;
if(m<201 && l==1)
	{
	document.getElementById("d").style.left = parseInt(document.getElementById("d").style.left)+1;
	document.getElementById("e").style.top = parseInt(document.getElementById("e").style.top)-1;
	document.getElementById("b").style.top = parseInt(document.getElementById("b").style.top)+1;
	document.getElementById("c").style.left = parseInt(document.getElementById("c").style.left)-1;
	}
if(m<201 && l==2)
	{
	document.getElementById("b").style.left = parseInt(document.getElementById("b").style.left)+1;
	document.getElementById("d").style.top = parseInt(document.getElementById("d").style.top)-1;
	document.getElementById("c").style.top = parseInt(document.getElementById("c").style.top)+1;
	document.getElementById("e").style.left = parseInt(document.getElementById("e").style.left)-1;
	}
if(m<201 && l==3)
	{
	document.getElementById("c").style.left = parseInt(document.getElementById("c").style.left)+1;
	document.getElementById("b").style.top = parseInt(document.getElementById("b").style.top)-1;
	document.getElementById("e").style.top = parseInt(document.getElementById("e").style.top)+1;
	document.getElementById("d").style.left = parseInt(document.getElementById("d").style.left)-1;
	}
if(m<201 && (l==0 || l==4))
	{
	document.getElementById("e").style.left = parseInt(document.getElementById("e").style.left)+1;
	document.getElementById("c").style.top = parseInt(document.getElementById("c").style.top)-1;
	document.getElementById("d").style.top = parseInt(document.getElementById("d").style.top)+1;
	document.getElementById("b").style.left = parseInt(document.getElementById("b").style.left)-1;
	}
if(m==201){m=0;if (l==3) l=1;else if (l==1)l=3;  
return l;}
setTimeout(cyc2,1);
}