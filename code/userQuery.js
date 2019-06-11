//import Vue from 'vue';
var record_nickname,record_number,record_type,record_name;
window.onload=function()
{
    var d =new Date();
    var time=d.getHours()+':'+d.getMinutes();
    console.log(time);
    document.getElementById("weather-time").innerHTML=time;
    //alert("this is window onload event!");

    
    var arbitrate_record = new Vue({
        el:'#arbitrate_record',
        data:{
            items:[
                {
                    name:'zvs',
                    shop:'是金佛山',
                    detail:'水电费水电费及老公我讴歌红带你飞国际快递逢年过节款到发货规定或发给你的反馈了',
                    show:false
                },
                {
                    name:'爱的是',
                    shop:'胜多负少的',
                    detail:'但是事实所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所',
                    show:false
                }
            ]
        },
        methods:{
            selectArbitrateActive(index,$event){
                $event.currentTarget.className="single_arbitrate_record_active";
                this.items[index].show=true;
                console.log(this.$refs.child[index].id);
                this.$refs.child[index].id="arbitrate_detail_active";
                console.log(this.$refs.child[index].id);
            },
            removeActive(index,$event){
                $event.currentTarget.className="single_record";
                this.items[index].show=false;
                this.$refs.child[index].id="arbitrate_detail";
            },
            record_click(index,$event){
                console.log(index);
                console.log(this);
                console.log($event.currentTarget);
            },
            record_change(){
                console.log(index);
                //console.log(this);
                console.log($event.currentTarget);
            },
        }
    });
    var record = new Vue({
        el:'#record',
        data:{
            records:[
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
                this.records[index].show=true;
            },
            removeActive(index,$event){
                $event.currentTarget.className="single_record";
                this.records[index].show=false;
            },
            record_click(index,$event){
                console.log(index);
                console.log(this);
                record_nickname=this.records[index].nickname;
                record_number=this.records[index].number;
                record_type=this.records[index].type;
                record_name=this.records[index].name;
                console.log(record_nickname);
                if(onChange==true){
                    document.getElementById("change_nickname").value=record_nickname;
                    document.getElementById("change_number").innerHTML=record_number;
                    document.getElementById("change_type").value=record_type;
                    document.getElementById("change_name").value=record_name;
                }
            }
        }
    });
    return;
}

var onSearch=false;
var onChange=false;
var search_name,search_number,search_nickname,search_type;
function onUserQuery(){
    
    console.log(onSearch,"1");
    var div=document.getElementById("search_pad");
    console.log(div);
    div.style.display='flex';
    div=document.getElementById("arbitrate_pad");
    console.log(div);
    div.style.display='none';
    div=document.getElementById("search_result_pad");
    console.log(div);
    div.style.display='none';
}
function onArbitrateManagment(){
    var div=document.getElementById("arbitrate_pad");
    //console.log(div);
    div.style.display='flex';
    div=document.getElementById("search_pad");
    console.log(div);
    div.style.display='none';
    var search_result=document.getElementById('search_result_pad');
    //console.log(search_result);
    search_result.style.display='none';
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
    search.style.display='flex';
    var search_result=document.getElementById('search_result_pad');
    //console.log(search_result);
    search_result.style.display='none';
    document.getElementById('search_name').value=search_name;
    document.getElementById('search_number').value=search_number;
    document.getElementById('search_nickname').value=search_nickname;
    document.getElementById('search_type').value=search_type;
}
function record_change(index){
    //console.log(record.items)
    var change_pad=document.getElementById("change_pad");
    change_pad.style.display="flex";
    var black_pad=document.getElementById("black_pad");
    black_pad.style.display="flex";
    //console.log(record_nickname);
    onChange=true;
    //console.log("!",index);
}
function onChangeYes(){

}
function onChangeNo(){
    //var change_pad=document.getElementById("change_pad");
    //change_pad.style.display="none";
    var black_pad=document.getElementById("black_pad");
    black_pad.style.display="none";
    console.log("修改取消");
    onChange=false;
}