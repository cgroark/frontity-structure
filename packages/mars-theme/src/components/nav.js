import { connect, styled } from "frontity";
import Link from "./link";

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
      {items.map((item) => {
        return (
          <NavItem key={item.ID}>
            <Link link={item.url} name={item.title}>{item.title}</Link>
          </NavItem>
        );
      })}
    </NavContainer>
  );
};
// const Nav = ({ state }) => (
//   <NavContainer>
     
//     {state.theme.menu.map(([name, link]) => {
//       // Check if the link matched the current page url
//       console.log('nav', state.source.get('/menu/primary/'))
//       const data = state.source.get(state.router.link);
//       const isCurrentPage = data.route === link;
//       return (
//         <NavItem key={name}>
//           {/* If link url is the current page, add `aria-current` for a11y */}
//           <Link link={link} aria-current={isCurrentPage ? "page" : undefined} >
//             {name}
//           </Link>
//         </NavItem>
//       );
//     })}
//   </NavContainer>
// );

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
