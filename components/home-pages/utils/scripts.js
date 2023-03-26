import Script from "next/script";
export default function Scripts() {
  return (
    <>
      <Script defer src="../../../dist/js/jquery.min.js" />
      <Script defer src="../../../dist/js/bootstrap.bundle.min.js" />
      <Script defer src="../../../dist/js/glightbox.min.js" />
      {/* <Script defer src="../../../dist/js/main.js" /> */}
      <Script defer src="../../../dist/js/tiny-slider.js" />
    </>
  );
}
