import "./style.css";

function IconApps(props) {
  console.log(props);
  return (
    <>
      <div
        className={
          "p-2 d-flex flex-column align-items-center" + " " + props.className
        }
        style={props.style}
      >
        <div className="logo rounded-circle overflow-hidden">
          <img src={props.src} className="w-100 h-100 ratio-1x1" />
        </div>
        <p>{props.title}</p>
      </div>
    </>
  );
}

export default IconApps;
