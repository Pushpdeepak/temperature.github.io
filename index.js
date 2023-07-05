let ele= document.getElementById("cel");
            let fer=document.getElementById("fer");
            
            ele.addEventListener("input",function(){
                let c=this.value;
                let ff=(c * 9/5) + 32;
                if(!Number.isInteger(ff)){
                    ff=ff.toFixed(4);
                }
                fer.value=ff;
            });
            fer.addEventListener("input",function(){
                let f=this.value;
                let cc=(f-32)*5/9;
                if(!Number.isInteger(cc)){
                    cc=cc.toFixed(4);
                }
                ele.value=cc;
            });
