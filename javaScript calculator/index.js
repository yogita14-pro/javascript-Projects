let strnum="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        val=e.target.innerHTML;
        if(e.target.innerHTML=='='){
            strnum=eval(strnum);
            document.querySelector('input').value=strnum;
            if(strnum=='0'){
                strnum='';
            }
        }
        else if(e.target.innerHTML=='AC'){
            strnum="0";
            document.querySelector('input').value=strnum;
        }
        else if(e.target.innerHTML=='C'){
            strnum=strnum.substring(0,strnum.length-1);
            document.querySelector('input').value=strnum;
        }
        else{
            if(strnum.length<=1 && strnum=='0'){
                strnum=val;
                document.querySelector('input').value =strnum;
            }
            else{
            strnum=strnum+val;
            document.querySelector('input').value =strnum;
            }
        }
        if(strnum.length==0){
            strnum='0';
            document.querySelector('input').value=strnum;
        }else if(strnum.substring(0,1)=='*' || strnum.substring(0,1)=='/'||strnum.substring(0,1)=='-'||strnum.substring(0,1)=='+'){
            alert("The input value is wrong");
            strnum='0';
            document.querySelector('input').value=strnum;
        }
        
    })
})