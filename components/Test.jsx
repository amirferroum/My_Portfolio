import * as React from "react";
import { useMouse } from "@uidotdev/usehooks";
import { useInView,motion } from "framer-motion";
const Test = () => {
  const [mouse, ref] = useMouse();

  const xIntersecting = mouse.elementX > 0 && mouse.elementX < 300;
  const yIntersecting = mouse.elementY > 0 && mouse.elementY < 300;
  const isIntersecting = xIntersecting && yIntersecting;

  return (
    <section className="relative pointer-events-none">
      <h1>useMouse</h1>
      <article
        ref={ref}
        style={{ width: "300px", height: "300px" }}
        className={isIntersecting ? "active" : ""}
      >
        Use a ref to add coords relative to the element
      </article>
      <h1>x: {mouse.elementX}</h1>
      <h1>y: {mouse.elementY}</h1>

<motion.div
transition = { {duration: 0.4, }}
animate={{
  x: mouse.elementX -20,
  y: mouse.elementY +5
}}


className="absolute w-10 h-10 bg-black top-0 rounded-full opacity-40 " >

</motion.div>
    </section>
  );
}

export default Test