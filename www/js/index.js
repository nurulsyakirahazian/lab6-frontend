
$ (function() { 


if(!localStorage.datacount || localStorage.datacount == null)
    localStorage.datacount=0;

var link3=crossroads.addRoute('',function(){

    dataLength=localStorage.datacount;
    htmlText="";
    if(dataLength >0 ){
    for(var i=1; i<=dataLength; i++){
            myData=localStorage.getItem("data" + i);
            myData=JSON.parse(myData);
            htmlText=htmlText+"<tr onclick='trClick(this,"
                    +i+")'><td>"
                    +myData.nickname
                    +"</td><tr>";
        }
    }
    else{
        htmlText=htmlText+"<tr><td> no data found</td><tr>";
    }
    $('#maintable tbody').html(htmlText);

    $("#masterC").show();

    $("#divFrmAddKenalan").hide();
    $("#divFrmEditKenalan").hide();
});

var link4=crossroads.addRoute('btnAddKenalan',function(){
    $("#masterC").hide();

    $("#divFrmAddKenalan").show();
    $("#divFrmEditKenalan").hide();
});

$("#frmAddKenalan").submit(function(e){
    e.preventDefault();
    e.stopPropagation();
    var firstName=$("#firstname").val();
    var lastName=$("#lastname").val();
    var nickName=$("#nickname").val();
    var phoneNum=$("#phoneno").val();
    var emailAdd=$("#contactemail").val();

    mydata={firstname:"",lastname:"",nickname:"",mphone:"",email:""};
    mydata.firstname=firstName;
    mydata.lastname=lastName;
    mydata.nickname=nickName;
    mydata.phoneno=phoneNum;
    mydata.email=emailAdd;
    var i=localStorage.datacount
    i++;
    localStorage.setItem("data"+i, JSON.stringify(mydata));
    localStorage.datacount=i;

    alert('New data added');
    
});

function parseHash(newHash,oldHash){
    crossroads.parse(newHash);
}
hasher.initialized.add(parseHash);
hasher.changed.add(parseHash);
hasher.init();

});