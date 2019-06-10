//import Vue from 'vue';

window.onload=function()
{
    var d =new Date();
    var time=d.getHours()+':'+d.getMinutes();
    console.log(time);
    document.getElementById("weather-time").innerHTML=time;
    //alert("this is window onload event!");
    var record = new Vue({
        el:'#record',
        data:{
            items:[
                {
                    nickname:'zvs',
                    number:'00001',
                    type:'审查员',
                    name:'zvx',
                    show:false
                },
                {
                    nickname:'sfss',
                    number:'00002',
                    type:'用户',
                    name:'爱的是',
                    show:false
                }
            ]
        },
        methods:{
            selectActive(index,$event){
                $event.currentTarget.className="single_record_active";
                this.items[index].show=true;
            },
            removeActive(index,$event){
                $event.currentTarget.className="single_record";
                this.items[index].show=false;
            },
            record_click(index,$event){
                console.log(index);
                console.log(this);
            }
        }
    });
    var complain = new Vue({
        el:'#complain',
        data:{
            items:[
                {
                    nickname:'小明',
                    ID:'01',
                    text:'买错了',
                    result:'x',
                    show:false
                },
                {
                    nickname:'杀手',
                    ID:'02421',
                    text:'不好看',
                    result:'x',
                    show:false
                }
            ]
        },
        methods:{
            selectActive(index,$event){
                $event.currentTarget.className="complain_record_active";
                this.items[index].show=true;
            },
            removeActive(index,$event){
                $event.currentTarget.className="complain_record";
                this.items[index].show=false;
            },
            complain_click(index,$event){
                console.log(index);
                console.log(this);
            }
        }
    });
    return;
}
var onSearch=false;
var search_name,search_number,search_nickname,search_type;
function onUserQuery(){
    var div=document.getElementById("search_pad");
    var check=document.getElementById("complain_page_id");
    if(check.style.display!='flex'){
        if(div.style.display!='flex'){
            div.style.display='flex';
        }
        else{
            div.style.display='none';
        }
    }
}
function onSearchUserinfo(){
    var search = document.getElementById("search_pad");
    search.style.display='none';
    var search_result=document.getElementById('search_result_pad');
    //console.log(search_result);
    search_result.style.display='flex';
    search_name=document.getElementById('search_name').value;
    search_number=document.getElementById('search_number').value;
    search_nickname=document.getElementById('search_nickname').value;
    search_type=document.getElementById('search_type').value;
}
function onSearch_resultBack(){
    var search = document.getElementById("search_pad");
    search.style.display=='flex';
    var search_result=document.getElementById('search_result_pad');
    //console.log(search_result);
    search_result.style.display='none';
    document.getElementById('search_name').value=search_name;
    document.getElementById('search_number').value=search_number;
    document.getElementById('search_nickname').value=search_nickname;
    document.getElementById('search_type').value=search_type;
}
function onArbitrateManagment(){
    var div=document.getElementById("complain_page_id");
    var check=document.getElementById("search_pad");
    if(check.style.display!='flex'){
        if(div.style.display!='flex'){
            div.style.display='flex';
        }
        else{
            div.style.display='none';
        }
    }
   
}