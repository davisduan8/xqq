function navsel(num){
    for(var id = 1;id<=2;id++)
    {
        var ss="i_navcon"+id;
        if(id==num)
        document.getElementById(ss).style.display="block";
        else
        document.getElementById(ss).style.display="none";
    }
    for(var id = 1;id<=2;id++)
    {
        var bb="in_nav"+id;
        if(id==num)
        document.getElementById(bb).className="sel";
        else
        document.getElementById(bb).className="";
    } 
}






