import Script from "next/script";
// // import { tns } from "tiny-slider";
// // import { tns } from "../../../public/dist/js/tiny-slider";
// import { useEffect } from "react";
// import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
export default function Scipts() {
  // useEffect(() => {
  //   tns({
  //     container: ".hero-slider",
  //     slideBy: "page",
  //     autoplay: true,
  //     autoplayButtonOutput: false,
  //     mouseDrag: true,
  //     gutter: 0,
  //     items: 1,
  //     nav: false,
  //     controls: true,
  //     controlsText: [
  //       '<i class="lni lni-chevron-left"></i>',
  //       '<i class="lni lni-chevron-right"></i>',
  //     ],
  //   });

  //   //======== Brand Slider
  //   tns({
  //     container: ".brands-logo-carousel",
  //     autoplay: true,
  //     autoplayButtonOutput: false,
  //     mouseDrag: true,
  //     gutter: 15,
  //     nav: false,
  //     controls: false,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       540: {
  //         items: 3,
  //       },
  //       768: {
  //         items: 5,
  //       },
  //       992: {
  //         items: 6,
  //       },
  //     },
  //   });
  // });

  return (
    <>
      <Script src="../public/dist/js/bootstrap.bundle.min.js" />
      <Script src="../public/dist/js/glightbox.min.js" />
      <Script src="../public/dist/js/main.js" />
      {/* <Script src="../public/dist/js/tiny-slider.js" /> */}
    </>
  );
}
