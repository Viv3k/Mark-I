var x=0;
var y=0;
var k=0;
function sf()
{
x=x+1;
if((x-y)>0)
	k=(x-y)%4;

if((x-y)<0)
	k=4-((y-x)%4);
if((x-y)==0)
	k=0;
if (k==1)
{
    document.getElementById("b").style.background="green";
    document.getElementById("c").style.background="red";
    document.getElementById("d").style.background="yellow";
    document.getElementById("e").style.background="blue";
    return x;
}
if (k==2)
{
    document.getElementById("b").style.background="yellow";
    document.getElementById("c").style.background="green";
    document.getElementById("d").style.background="blue";
    document.getElementById("e").style.background="red";
    return x;
}
if (k==3)
{
    document.getElementById("b").style.background="blue";
    document.getElementById("c").style.background="yellow";
    document.getElementById("d").style.background="red";
    document.getElementById("e").style.background="green";
    return x;
}
if (k==0 || k==4)
{
    document.getElementById("b").style.background="red";
    document.getElementById("c").style.background="blue";
    document.getElementById("d").style.background="green";
    document.getElementById("e").style.background="yellow";
    return x;
}

}

function sb()
{
y=y+1;
if((y-x)>0)
	k=(y-x)%4;

if((y-x)<0)
	k=4-((x-y)%4);
if((x-y)==0)
	k=0;
if (k==1)
{
    document.getElementById("b").style.background="blue";
    document.getElementById("c").style.background="yellow";
    document.getElementById("d").style.background="red";
    document.getElementById("e").style.background="green";
    return y;
}
if (k==0 || k==4)
{
    document.getElementById("b").style.background="red";
    document.getElementById("c").style.background="blue";
    document.getElementById("d").style.background="green";
    document.getElementById("e").style.background="yellow";
    return y;
}
if (k==3)
{
    document.getElementById("b").style.background="green";
    document.getElementById("c").style.background="red";
    document.getElementById("d").style.background="yellow";
    document.getElementById("e").style.background="blue";
    return y;
}
if (k==2)
{
    document.getElementById("b").style.background="yellow";
    document.getElementById("c").style.background="green";
    document.getElementById("d").style.background="blue";
    document.getElementById("e").style.background="red";
    return y;
}
}