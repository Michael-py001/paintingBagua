let move = (function(){
    let text = document.getElementById("text")
    let style = document.getElementById("style")
    let box = document.getElementById("box")
    let string = `
    /*你好，我是一名前端工程师
    接下来我将会画一个八卦
    首先画一个圆
    */
   #box{
    border-radius:50%;
    border: 1px solid rgb(0, 0, 0);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,250,250,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
   }
   /*
    接下来添加两个小圆
   */
   #box::before{
    border-radius:50%;
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform: translate(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,250,250,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    }
    #box::after{
        border-radius:50%;
        width:100px;
        height:100px;
        bottom:0;
        left:50%;
        transform: translate(-50%);
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,250,250,1) 25%, rgba(255,255,255,1) 100%);
    }
    /*
        八卦已经画好啦
    */
    `
    let i = 1;
    let step= function(){
        setTimeout(()=>{
            let str = string[i]
            if(string[i]!=undefined){
                if(str=="\n"){//如果是回车，则在HTML添加</br>
                    text.innerHTML += str+"</br>".replace(/(\/|\*)/g,"")
                }
                else if(str==" "){//如果是空格，则添加&nbsp;
                    text.innerHTML += "&nbsp;".replace(/(\/|\*)/g,"")
                }
                else{
                    text.innerHTML += str.replace(/(\/|\*)/g,"")
                }
                // Style标签的内容
                style.innerHTML += str
                step() //递归调用
                // 每次都把滚动条拖到底部
                window.scrollTo(0,99999)
                // 移动端text的滚动条跟着动
                text.scrollTo(0,99999)
                i+=1
            }
            else{
                return
            }

        },50)
           
        
    }
    return {
        init(){
            step()
        }
    }
})()
move.init()
