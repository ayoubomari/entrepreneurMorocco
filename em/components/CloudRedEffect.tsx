export default function CloudRedEffect() {
  return (
    <>
      {/* Background Cloud Divs */}
      <div
        className="cloud-red left-[-50%] md:left-[-10%]"
        style={{
          position: "absolute",
          zIndex: 1,
          transform: "translateY(-50%)",
        }}
      ></div>
      <div
        className="cloud-red right-[-65%] md:right-[-25%]"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "400px",
          transform: "translateY(-50%)",
        }}
      ></div>
      <div
        className="cloud-red left-[-50%] md:left-[-25%]"
        style={{
          position: "absolute",
          zIndex: 1,
          pointerEvents: "none",
          top: "800px",
          transform: "translateY(-50%)",
        }}
      ></div>
      <div
        className="cloud-red right-[-50%] md:right-[-25%]"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "1400px",
          transform: "translateY(-50%)",
        }}
      ></div>
      <div
        className="cloud-red left-[-50%] md:left-[-25%]"
        style={{
          position: "absolute",
          zIndex: 1,
          pointerEvents: "none",
          top: "1800px",
          transform: "translateY(-50%)",
        }}
      ></div>
      <div
        className="cloud-red right-[-50%] md:right-[-25%]"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "2200px",
          transform: "translateY(-50%)",
        }}
      ></div>
      <div
        className="cloud-red left-[-50%] md:left-[-25%]"
        style={{
          position: "absolute",
          zIndex: 1,
          pointerEvents: "none",
          top: "2600px",
          transform: "translateY(-50%)",
        }}
      ></div>
      <div
        className="cloud-red right-[-50%] md:right-[-25%]"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "3000px",
          transform: "translateY(-50%)",
        }}
      ></div>
    </>
  );
}
