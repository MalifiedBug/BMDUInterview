export default function Blocks(){
    return(
        <div className="blocks h-screen max-w-full grid lg:grid-cols-4 justify-items-stretch p-2">
            <div className="col-span-2">
                <img className="h-screen w-full object-bottom scale-100 transition" alt="" src="https://images.pexels.com/photos/92664/pexels-photo-92664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                </img>
            </div>           
            <div className="grid grid-rows-2 grid-cols-1">
                <div className="h-full w-full">
                    <img className="h-full" alt="" src="https://wallpaperboat.com/wp-content/uploads/2022/03/01/80854/soothing-neutral-13.jpg"></img>
                </div>
                <div className="scale-100 relative">
                    <img className="h-full" alt="" src="https://wallpaperboat.com/wp-content/uploads/2019/11/smooth-15.jpg"></img>
                    <div className="absolute bottom-8 text-stone-700 w-full flex justify-between px-4 h-12">
                        <p className="text-2xl text-left px-11">Achieve goals & coach fast.</p>
                        <p className="text-2xl text-white p-2 hover:translate-x-2 hover:transition">|&gt;</p>
                    </div> 
                </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-1">
                <div className="relative">
                    <img className="h-full relative" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPWbGmNmMYHfU3mCNWSWX9APHn8GQaONX-oBSQjBskKzELOCx0GkbHI_WJuvJeszsAgM&usqp=CAU">                      

                    </img>
                    <div className="absolute bottom-8 text-white w-full flex justify-between px-4 h-12">
                        <p className="text-2xl text-left px-11">Start business with mentors</p>
                        <p className="text-2xl hover:translate-x-2 p-2 hover:transition">|&gt;</p>
                    </div>                    
                </div>
                <div>
                    <img className="h-full" src="https://wallup.net/wp-content/uploads/2016/07/20/26472-sunset-mountain-peaceful-evening.jpg" alt=""></img>
                </div>
            </div>
        </div>
    )
}