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

	
	let n=0; 
	let t=setInterval(move,3000);
	function move(){
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
	// console.log(topBar);
	// console.log(browerheight);
	// console.log(browerwidth);
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

	//leftBar开始
{
	let tips=document.querySelectorAll(".tip");
	let containers=document.querySelectorAll(".container");

	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=containers[index].offsetTop-50;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=ot;
			},25)
			
		}
	});

	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		let obj=tips[0];
		for(let i=0; i<containers.length;i++){
			if(st>containers[i].offsetTop-80){
				for(let i=0;i<tips.length;i++){
					 tips[i].classList.remove("lfactive");
				}
				 tips[i].classList.add("lfactive");
				// obj.classList.remove("lfactive");
				// tips[i].classList.add("lfactive");
				// obj=tips[i];

			}
		}
	});

	
}
// 大聚会部分
{
	const jhprev=document.querySelector(".jhbtnleft");
	const jhnext=document.querySelector(".jhbtnright");
	const jhinner=document.querySelector(".jhinner");
	
	let m=0;
	jhnext.onclick=function(){
		m++;
		jhprev.classList.remove("disable");
		if(m===2){
			this.classList.add("disable");
		}
		if(m===3){
			m=2;
			return;//终止函数的执行
		}
		jhinner.style.marginLeft=-1000*m+"px";
	}
	jhprev.onclick=function(){
		m--;
		jhnext.classList.remove("disable");
		if(m===0){
			jhprev.classList.add("disable");
		}
		if(m===-1){
			m=0;
			return;
		}
		jhinner.style.marginLeft=-1000*m+"px";
	}
}