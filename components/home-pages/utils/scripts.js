import Script from "next/script";
import { useEffect } from "react";
export default function Scripts() {
  useEffect(() => {
    window.JQuery = require("../../../public/dist/js/jquery.min.js");
    window.$ = window.JQuery;
    $('#pesanKantor').on('shown.bs.modal', function () {
      $('#pesanKantor').trigger('focus')
    });
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
      <Script src="../public/dist/js/bootstrap.bundle.min.js" />
      <Script src="../public/dist/js/glightbox.min.js" />
      <Script src="../public/dist/js/main.js" />
      <Script src="../public/dist/js/tiny-slider.js" />
      <Script src="../public/dist/js/jquery.min.js" />
    </>
  );
}
