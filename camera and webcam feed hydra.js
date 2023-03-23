//Camera first
s0.initCam()
s1.initScreen()

src(s0)
	.out(o0) 

src(s1)
.layer(src(s1)
      )
	.out(o1) 


src(o0).diff(o1).out(o2) 
render(o2) 
//render(o1)
---------------------------------------------------
//Screen first
s0.initScreen()
s1.initCam()

src(s0)
.layer(src(s0)
      )
	.out(o0) 

src(s1)
	.out(o1) 


src(o0).diff(o1).out(o2) 
render(o2) 
//render(o1)