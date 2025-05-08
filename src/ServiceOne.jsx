import SubServiceOne from "./SubServiceOne";
import SubServiceTwo from "./SubServiceTwo";

export default function ServiceOne() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* <!-- Sub Service 1 --> */}
          <SubServiceOne />

          {/* <!-- Sub Service 2 --> */}
          <SubServiceTwo />
        </div>
      </section>
    </>
  );
}
