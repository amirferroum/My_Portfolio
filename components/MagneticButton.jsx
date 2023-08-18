import React, { useEffect, useRef } from 'react';

const MagneticButton = ({ item }) => {
const btnRef = useRef(null);
useEffect(() => {
if (btnRef && btnRef.current) {
const btn = btnRef.current;
btn.addEventListener('mousemove', onMouseMove);
btn.addEventListener('mouseout', onMouseOut);
return () => {
btn.removeEventListener('mousemove', onMouseMove);
btn.removeEventListener('mouseout', onMouseOut);
}
}
}, [])
const onMouseMove = (e) => {
const btn = btnRef.current;
const bounds = btn.getBoundingClientRect();
const x = e.pageX - bounds.left - bounds.width / 2;
const y = e.pageY - bounds.top - bounds.height / 2;
btn.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)"
}
const onMouseOut = (e) => {
const btn = btnRef.current;
btn.children[0].style.transform = "translate(0px, 0px)"
}
return (
<a href="#!" ref={btnRef} className="flex justify-center items-center select-none cursor-pointer m-[4rem]">
<span className='w-[200px] bg-black text-white h-[200px] flex items-center justify-center botder rounded-full duration-500 ease-linear' >
{item.text}
</span>
</a>
)
}
export default MagneticButton;