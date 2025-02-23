/*!

=========================================================
* Argon Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function AdminFooter() {
  return (
    <>
      <Container fluid>
        <footer className="footer pt-0">
          <Row className="align-items-center justify-content-lg-between">
            <Col lg="6">
              {/* <div className="copyright text-center text-lg-left text-muted"> */}
                {/* © {new Date().getFullYear()}{" "} */}
                {/* <a className="font-weight-bold ml-1" href="#" target="_blank">
                  All Rights Reserved
                </a> */}
                {/* <h3 className="font-weight-bold ml-1">
                  © {new Date().getFullYear()} Design & Developed by{" "}
                  <a
                    href=" https://www.linkedin.com/in/kuldeep-singh-panwar-b12486210
"
                    target="_blank"
                  >
                    Kuldeep Panwar
                  </a>
                  ,{" "}
                  <a
                    href=" https://www.linkedin.com/in/shobhitchoudhary
"
                    target="_blank"
                  >
                    Shobhit Choudhary
                  </a>{" "}
                  &{" "}
                  <a
                    href=" https://www.linkedin.com/in/raghav-sharma-159487210
"
                    target="_blank"
                  >
                    Raghav Sharma
                  </a>
                </h3>
              </div> */}
            </Col>
          </Row>
        </footer>
      </Container>
    </>
  );
}

export default AdminFooter;
