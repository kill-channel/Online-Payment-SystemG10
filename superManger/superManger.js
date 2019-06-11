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
                    show:false
                },
                {
                    nickname:'sfss',
                    number:'00002',
                    type:'用户',
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
    })
    var record1 = new Vue({
        el:'#record1',
        data:{
            items:[
                {
                    L_time:'20190105',
                    L_type:'m_del',
                    L_m_id:'00001',
                    L_u_id:'00002',
                    show:false
                },
                {
                    L_time:'20180115',
                    L_type:'m_add',
                    L_m_id:'00011',
                    L_u_id:'00012',
                    show:false
                }
            ]
        },
        methods:{
            selectActive(index,$event){
                $event.currentTarget.className="single_record1_active";
                this.items[index].show=true;
            },
            removeActive(index,$event){
                $event.currentTarget.className="single_record1";
                this.items[index].show=false;
            },
            record1_click(index,$event){
                console.log(index);
                console.log(this);
            }
        }
    })
    return;
}
var onSearch=false;
var search_name,search_number,search_nickname,search_type;
function onMangerQuery(){
    console.log(onSearch,"1");
    var div=document.getElementById("search_pad");
    console.log(div);
    div.style.display='flex';
    //var search = document.getElementById("search_pad");
    //search.style.display='none';
    var search_result=document.getElementById('search_result_pad');
    search_result.style.display='none';
    var add = document.getElementById("add_pad");
    add.style.display = 'none';
    var log = document.getElementById("log_pad");
    log.style.display = 'none';
    var modify = document.getElementById("modify_pad");
    modify.style.display = 'none';
}
function addManger(){
    console.log(onSearch,"1");
    var div=document.getElementById("add_pad");
    console.log(div);
    div.style.display='flex';
    var search = document.getElementById("search_pad");
    search.style.display='none';
    var search_result=document.getElementById('search_result_pad');
    search_result.style.display='none';
    var log = document.getElementById("log_pad");
    log.style.display = 'none';
    //var add = document.getElementById("add_pad");
    //add.style.display = 'none';
    var modify = document.getElementById("modify_pad");
    modify.style.display = 'none';
}
function onSearchMangerinfo(){
    var search = document.getElementById("search_pad");
    search.style.display='none';
    var search_result=document.getElementById('search_result_pad');
    //console.log(search_result);
    console.log(search_result);
    search_result.style.display='flex';
    search_name=document.getElementById('search_name').value;
    search_number=document.getElementById('search_number').value;
    search_type=document.getElementById('search_type').value;
    var log = document.getElementById("log_pad");
    log.style.display = 'none';
    var add = document.getElementById("add_pad");
    add.style.display = 'none';
    var modify = document.getElementById("modify_pad");
    modify.style.display = 'none';
}
function back(){
    var search = document.getElementById("search_pad");
    search.style.display='none';
    var search_result=document.getElementById('search_result_pad');
    search_result.style.display='none';
    var add = document.getElementById("add_pad");
    add.style.display = 'none';
    var log = document.getElementById("log_pad");
    log.style.display = 'none';
    var modify = document.getElementById("modify_pad");
    modify.style.display = 'none';
    
}
function log(){
    var search = document.getElementById("search_pad");
    search.style.display='none';
    var search_result=document.getElementById('search_result_pad');
    search_result.style.display='none';
    var add = document.getElementById("add_pad");
    add.style.display = 'none';
    var log = document.getElementById("log_pad");
    log.style.display = 'flex';
    var modify = document.getElementById("modify_pad");
    modify.style.display = 'none';
    window.open ('test.html', 'newwindow', 'height=100, width=400, top=0,left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no,status=no') 
}
function modify(){
    var search = document.getElementById("search_pad");
    search.style.display='none';
    var search_result=document.getElementById('search_result_pad');
    search_result.style.display='none';
    var add = document.getElementById("add_pad");
    add.style.display = 'none';
    var log = document.getElementById("log_pad");
    log.style.display = 'none';
    var modify = document.getElementById("modify_pad");
    modify.style.display = 'flex';
}