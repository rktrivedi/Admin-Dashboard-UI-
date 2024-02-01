import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo"></img>
        <span>Admin-Pannel</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt=""></img>
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://content.tupaki.com/twdata/2021/0221/news/Ram-s-Bilingual-To-Cost-More-Than-His-Market--1614075453-107.jpg"
            alt=""
          />
          <span>Sourabh</span>
        </div>
        <img src="/settings.svg" alt="" className="icon"></img>
      </div>
    </div>
  );
};

export default Navbar;
