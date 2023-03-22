import Script from "next/script";
import { useEffect } from "react";
export default function Scripts() {
  useEffect(() => {
    import("tiny-slider").then(tns => {
      tns.tns({
        container: ".hero-slider",
        slideBy: "page",
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        gutter: 0,
        items: 1,
        nav: false,
        controls: true,
        controlsText: [
          '<i class="lni lni-chevron-left"></i>',
          '<i class="lni lni-chevron-right"></i>',
        ],
      });
    });
  });

  return (
    <>
      {/* <Script defer src="../../../dist/js/jquery.min.js" /> */}
      <Script defer src="../../../dist/js/bootstrap.bundle.min.js" />
      <Script defer src="../../../dist/js/glightbox.min.js" />
      {/* <Script defer src="../../../dist/js/main.js" /> */}
      <Script defer src="../../../dist/js/tiny-slider.js" />
    </>
  );
}
