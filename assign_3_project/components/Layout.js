/********************************************************************************
 * WEB422 – Test 04
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 * https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 * Name: Diego B Soares Student ID: ____145820239____ Date: __mar - 18 - 2025_______
 * Published URL: _________________https://github.com/dbarbozasoares/Assignment_3_fixed__________________________________________
 ********************************************************************************/
import MainNav from "./MainNav";
import { Container } from "react-bootstrap";
const Layout = (props) => {
  return (
    <div>
      <MainNav />
      <br />
      <Container>{props.children}</Container>
      <br />
    </div>
  );
};

export default Layout;
