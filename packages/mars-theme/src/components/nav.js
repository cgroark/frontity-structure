import { connect, styled } from "frontity";
// import Link from "./link";
import { Link, animateScroll as scroll } from "react-scroll";


/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {
  // console.log('nav', state.source.get(`/menu/${state.theme.menuUrl}`));
  const items = state.source.get(`/menu/${state.theme.menuURL}/`).items;
  // console.log('ITEMS:',items)
  return (
    <NavContainer>
    <ul>
    {items.map((item) => {
      console.log(item.url.split('#')[1])
        return (
          <li key={item.ID}>
            <Link activeClass="active" 
              to={item.url.split('#')[1]}
              spy={true} 
              smooth={true}
              duration={900}
              offset={-70}>
                {item.title}
            </Link>
          </li>
        );
      })}
    
      </ul>
      </NavContainer>
    // <NavContainer>
      // {items.map((item) => {
      //   return (
      //     <NavItem key={item.ID}>
      //       <Link to={item.url} >{item.title}</Link>
      //     </NavItem>
      //   );
      // })}
    // </NavContainer>
  );
};


export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
