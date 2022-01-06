import "./sideBarLink.css";

function SideBarLink({ text, Icon }) {
  return (
    <div className="sideBar_link">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SideBarLink;
