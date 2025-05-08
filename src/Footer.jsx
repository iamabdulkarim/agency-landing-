import SubFooterOne from "./SubFooterOne";
import SubFooterTwo from "./SubFootertwo";

export default function Footer() {
  return (
    <>
      <footer class="bg-white dark:bg-gray-800">
        <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          {/* <!-- Sub Footer 1 --> */}
          <SubFooterOne />

          {/* <!-- Sub Footer 2 --> */}
          <SubFooterTwo />
        </div>
      </footer>
    </>
  );
}
