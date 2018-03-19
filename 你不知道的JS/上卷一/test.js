var obj={
    id: "awesome",
    cool:function coolFn(){
        var self=this;
        // setTimeout(function(){

        //     console.log(this.id);
        // }, 100);
        setTimeout(self.cool,100);
    }
};

var id="not awesome";

obj.cool();

