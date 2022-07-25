import React from "react";
import { Dropdown, MenuButton, NavbarContainer, NavbarLink, NavbarDropdownItem } from "./Navbar.styled";

function Navbar(){
    const [visible, setVisible] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState(0);

    function toggleDropdown(value){
        if(activeDropdown === value){
            setActiveDropdown(0);
        }else{
            setActiveDropdown(value)
        }
    }
    return(
        <NavbarContainer visible={visible}>
            <MenuButton onClick={() => setVisible(prevVisible => !prevVisible)}>{visible ? "Close menu" : "Open menu"}</MenuButton>

            <NavbarLink onClick={() => setVisible(false)} to="/">Home</NavbarLink>
            <NavbarDropdownItem NavbarLink to="#" dropdown onClick={() => toggleDropdown(1)} active={activeDropdown === 1}>
                Newbie
                <Dropdown active={activeDropdown === 1}>
                    <NavbarLink onClick={() => setVisible(false)} to="main/card">Preview Card</NavbarLink>
                    <NavbarLink onClick={() => setVisible(false)} to="main/rating">Rating Component</NavbarLink>
                    <NavbarLink onClick={() => setVisible(false)} to="main/3columns">3 columns</NavbarLink>
                </Dropdown>
            </NavbarDropdownItem>
            
            <NavbarDropdownItem to="#" dropdown onClick={() => toggleDropdown(2)} active={activeDropdown === 2}>
                Junior
                <Dropdown active={activeDropdown === 2}>
                    <NavbarLink onClick={() => setVisible(false)} to="main/expenses">Expenses chart</NavbarLink>
                    <NavbarLink onClick={() => setVisible(false)} to="main/snap">Snap section</NavbarLink>
                    <NavbarLink onClick={() => setVisible(false)} to="main/advice">Advice generator</NavbarLink>
                    <NavbarLink onClick={() => setVisible(false)} to="main/tips">Tip calculator</NavbarLink>
                </Dropdown>
            </NavbarDropdownItem>

            <NavbarDropdownItem to="#" dropdown onClick={() => toggleDropdown(3)} active={activeDropdown === 3}>
                Intermediate
                <Dropdown active={activeDropdown === 3}>
                    <NavbarLink onClick={() => setVisible(false)} to="main/calculator">Calculator</NavbarLink>
                    <NavbarLink onClick={() => setVisible(false)} to="main/tracker">IP tracker</NavbarLink>
                </Dropdown>
            </NavbarDropdownItem>
        </NavbarContainer>
    )
}

export default Navbar;