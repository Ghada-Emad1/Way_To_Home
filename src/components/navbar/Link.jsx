
import AnchorLink from "react-anchor-link-smooth-scroll";




const Link = ({ page,selectedPage,setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") ;
  
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={()=>setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition-colors duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;