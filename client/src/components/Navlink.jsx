import { NavLink } from "react-router-dom";

const NavUnlisted = styled.ul`
  display: flex;
  a {
    text-decoration: none;
  }
  li {
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;


const links = [
  {name: "Home",path:"/"},
  {name: "About",path:"/about"},
];

function Nav() {
  return (
    <NavUnlisted>
      {links.map((link,index) => (
        <NavLink key={index} to={link.path} exact activeClassName="current">
          <li>{link.name}</li>
        </NavLink>
      ))}

    {/* <NavLink to="/" activeClassName="current" exact>
    <li>Home</li>
    </NavLink>
    <NavLink to="/about" activeClassName="current" exact>
    <li>About</li>
    </NavLink> */}

    </NavUnlisted>
  );
}