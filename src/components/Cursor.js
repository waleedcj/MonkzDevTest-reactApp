import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={11}
        outerSize={11}
        color="221,64,64"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2.8}
        trailingSpeed={1}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "itemspec",
          "titleSpec",
        ]}
      />
    </>
  );
};

export default Cursor;
