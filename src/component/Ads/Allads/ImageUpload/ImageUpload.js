import * as React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./ImageUpload.css";
import { FaCut } from "react-icons/fa";
import AddProduct from "../AddProduct";
// import fontawesome from '@fortawesome/fontawesome'
class ImageUpload extends React.Component {
  state = {
    files: [],
  };

  componentDidUpdate() {
    localStorage.setItem("imageData", this.state.files);
  }

  fileSelectedHandler = (e) => {
    this.setState({ files: [...this.state.files, ...e.target.files] });
    console.log("state", this.state.files);
    let valueProps = this.state.files;
    AddProduct(valueProps);
  };
  removeItem(evalue) {
    let filteredArray = this.state.files.filter((item) => item !== evalue);
    this.setState({ files: filteredArray });
  }
  servercall() {}
  render() {
    return (
      <div>
        <form className="padingmanage">
          <input type="file" multiple onChange={this.fileSelectedHandler} />
        </form>
        <Container>
          <Row>
            {this.state.files.map((result) => {
              return (
                <Col xs={2} md={3}>
                  {" "}
                  <a alt="" href="" className="block-icon">
                    <Image src={URL.createObjectURL(result)} thumbnail />

                    <FaCut
                      className=" icon-tag"
                      onClick={(e) => {
                        e.preventDefault();
                        this.removeItem(result);
                      }}
                    />
                  </a>{" "}
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ImageUpload;
