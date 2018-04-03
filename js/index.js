{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".quan_item");
	// console.log(imgs,pagers);
	let banner=document.querySelector(".bannertu");
	console.log(banner);
	let prev=document.querySelector("#prev");
	let next=document.querySelector("#next");
	// console.log(prev,next);

	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");//可以把指定
				pagers[i].classList.remove("item4");//的类名移除
			}
			//ele this pagers[index]
			this.classList.add("active");
			this.classList.add("item4");
			imgs[index].classList.add("active");
			n=index;
		}
	});

	let flag=true;
	let n=0; 
	let t=setInterval(move,3000);
	function move(){
		// if(flag){

		// }else{

		// }
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("item4");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("item4");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};

	next.onclick=function(){
		move();
	};
	prev.onclick=function(){
		n=n-2;
		move();
	}

}

	// topBar部分开始
{
	let browerwidth=document.documentElement.clientWidth
	let browerheight=document.documentElement.clientHeight
	const topBar=document.querySelector(".topBar");
	const leftBar=document.querySelector(".leftBar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		// console.log(st);
		if(st>1000){
			topBar.style.display="block";		
		}else{
			topBar.style.display="none";
		}

		if(st>2500){
			leftBar.style.display="block";
			
		
		}else{
			leftBar.style.display="none";
		}


	}
}

	//左侧返回顶部开始
{
	let totop=document.querySelector(".item16");
	console.log(totop);
	totop.onclick=function(){
		// document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st=st-200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},20)
	}
}

	//原生jsleftBar开始
// {
// 	let tips=document.querySelectorAll(".tip");
// 	let containers=document.querySelectorAll(".container");

// 	tips.forEach(function(ele,index){
// 		ele.onclick=function(){
// 			let ot=containers[index].offsetTop-50;
// 			let now=document.documentElement.scrollTop;
// 			let speed=(ot-now)/8;
// 			let time=0;
// 			let t=setInterval(function(){
// 				time+=25;
// 				now+=speed;
// 				if(time===200){
// 					clearInterval(t);
// 				}
// 				document.documentElement.scrollTop=ot;
// 			},25)
			
// 		}
// 	});

// 	window.addEventListener("scroll",function(){
// 		let st=document.documentElement.scrollTop;
// 		let obj=tips[0];
// 		for(let i=0; i<containers.length;i++){
// 			if(st>containers[i].offsetTop-50){
// 				for(let i=0;i<tips.length;i++){
// 					 tips[i].classList.remove("lfactive");
// 				}
// 				 tips[i].classList.add("lfactive");
// 				// obj.classList.remove("lfactive");
// 				// tips[i].classList.add("lfactive");
// 				// obj=tips[i];

// 			}
// 		}
// 	});

	
// }

//jquery实现左侧跳楼
{
	$(".tip").click(function () {

	    let index=$(this).index(".tip");
	    console.log(index);
	    let ot=$(".container").eq(index).offset().top-50;
	    console.log(ot);
	    $("html,body").animate({scrollTop:ot},200)
	})

	$(window).scroll(function () {
	    let st= $(window).scrollTop();
	    $(".container").each(function (index,ele) {
	        if(st>$(this).offset().top-150){
	            $(".tip").removeClass("lfactive")
	                .eq(index).addClass("lfactive");
	        }
	    })
	})
}
//实现totop
{
	$("#db").click(function () {

   	 $("html,body").animate({scrollTop:0},500)
	})
}

// 大聚会部分   无缝轮播
{
	const jhprev=document.querySelector(".jhbtnleft");
	const jhnext=document.querySelector(".jhbtnright");
	const jhinner=document.querySelector(".jhinner");
	
	let m=1;
	let flag=true;

	jhnext.onclick=function(){
		if(flag){
			flag=false;
			m++;
			jhinner.style.transition="all .5s";
			jhinner.style.marginLeft=-1000*m+"px";
		}		
	}		
	jhprev.onclick=function(){
		if(flag){
			flag=false;
			m--;			
			jhinner.style.transition="all .5s";
			jhinner.style.marginLeft=-1000*m+"px";
		}		
	}
	
	jhinner.addEventListener("transitionend",function(){
		flag=true;
		if(m===0){
			jhinner.style.transition="none";
			jhinner.style.marginLeft=-3000+"px";
			m=3;
		}
		if(m===4){
			jhinner.style.transition="none";
			jhinner.style.marginLeft=-1000+"px";
			m=1;
		}
	});
		
}


//排行榜部分开始
{

    const phleftbtn = document.querySelector(".phleftbtn");
    const phrightbtn = document.querySelector(".phrightbtn");
    const phinner = document.querySelector(".phinner");
    const phbtns = document.querySelectorAll(".phtnitem");
    let flag=true;

    var m = 1;
    phleftbtn.onclick = function () {
    	if(flag){
    		flag=false;
    		 m--;
	        phinner.style.transition="all .5s";
	        phinner.style.marginLeft = -390 * m + "px";
	        // for(let i=0;i<phbtns.length;i++){
	        //     phbtns[i].classList.remove("phactive");
	        //     phbtns[i-1].classList.add("phactive");
	        // }
    	}
    }

    phrightbtn.onclick = function () {
    	if(flag){
    		flag=false;
    		 m++;
	        phinner.style.transition="all .5s";
	        phinner.style.marginLeft = -390 * m + "px";
	        //phbtns[m-1].classList.add("phactive");
	    	}
	       
    }

    phinner.addEventListener("transitionend",function(){
    	flag=true;
        if(m===4){
            phinner.style.transition="none";
            phinner.style.marginLeft=-390+"px";            
            m=1;
        }
        if(m===0){
            phinner.style.transition="none";
            phinner.style.marginLeft=-1170+"px";
            m=3;
        }
      
    })

    phbtns.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<phbtns.length;i++){
                phbtns[i].classList.remove("phactive");//的类名移除
            }
            phinner.style.marginLeft=(index+1)*-390+"px";
            phinner.style.transition="all 0.5s";
                console.log( phinner.style.marginLeft);
            //ele this pagers[index]
            this.classList.add("phactive");


        }
    });

}

//顶部导航部分


$(".topxiala").each(function (index,ele) {
	$(this).mouseenter(function () {
        $(".aa").eq(index).css("display","block");
    })

    $(this).mouseleave(function () {
        $(".aa").eq(index).css("display","none");
    })
})

//右侧导航
$(".message").each(function (index,ele) {
    $(this).mouseenter(function () {
        //$(".rignthide").eq(index).css("display","block");
        $(".rignthide").eq(index).animate({opacity:1},500);
        $(".rignthide").eq(index).animate({width:"70px"},400);
        $(".rignthide").eq(index).animate({left:"-70px"},300);
    })
    $(this).mouseleave(function () {
        $(".rignthide").eq(index).animate({opacity:"0"},500);
        $(".rignthide").eq(index).animate({width:"0px"},400);
        $(".rignthide").eq(index).animate({left:"35px"},300);
    })
})
   	

	