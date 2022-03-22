import { connect, useConnect } from "frontity";
import React, {useState, useEffect, useRef} from 'react';
import Link from "@frontity/components/link";
import { animateScroll as scroll } from "react-scroll";


/**
 * The MarsLink component, which is a wrapper on top of the {@link Link}
 * component.
 *
 * @param props - It accepts the same props than the {@link Link} component.
 *
 * @example
 * ```js
 * <MarsLink link="/some-post">
 *   <div>Some Post</div>
 * </MarsLink>
 * ```
 *
 * @returns A {@link Link} component, which returns an HTML anchor element.
 */



const MarsLink = ({ children, ...props }) => {
  console.log('childs', props.link)
  const { state, actions } = useConnect();
  // const [height, setHeight] = useState(0);
  // const elementRef = useRef(null);
  /**
   * A handler that closes the mobile menu when a link is clicked.
   */

  return (
    <Link {...props} >
      {children}
    </Link>
  );
};

export default connect(MarsLink, { injectProps: false });
