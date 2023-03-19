import Script from "next/script";
import { useEffect } from "react";
export default function Scipts() {
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
      //======== Brand Slider
      // let brand_slider = tns.tns({
      //   container: ".brands-logo-carousel",
      //   autoplay: true,
      //   autoplayButtonOutput: false,
      //   mouseDrag: true,
      //   gutter: 15,
      //   nav: false,
      //   controls: false,
      //   responsive: {
      //     0: {
      //       items: 1,
      //     },
      //     540: {
      //       items: 3,
      //     },
      //     768: {
      //       items: 5,
      //     },
      //     992: {
      //       items: 6,
      //     },
      //   },
      // });
    });
  });

  return (
    <>
      <Script src="../public/dist/js/bootstrap.bundle.min.js" />
      <Script src="../public/dist/js/glightbox.min.js" />
      <Script src="../public/dist/js/main.js" />
      <Script src="../public/dist/js/tiny-slider.js" />
    </>
  );
}
