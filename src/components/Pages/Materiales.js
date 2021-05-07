import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  /*traer los datos desde la api*/
  {
    id: 1,
    titulo: "infografia1",
    autor: "autor1",
    fechaPub: "10/4/2021",
    tipo: "Infografia",
    tema: "Economia",
  },
  {
    id: 2,
    titulo: "infografia2",
    autor: "autor2",
    fechaPub: "10/4/2021",
    tipo: "Taller",
    tema: "Solidaridad",
  },
  {
    id: 3,
    titulo: "infografia3",
    autor: "autor3",
    fechaPub: "10/4/2021",
    tipo: "Video",
    tema: "Economia"
  },
];

class Infografia extends Component {
  state = {
    data: data,
  };

  render() {
    return (
      <>
          <h1>Materiales</h1>
        <Container>
          <br />
          <div>
            <Button color="primary">Agregar</Button>
          </div>

          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Fecha Publicacion</th>
                <th>Material</th>
                <th>Tema</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.titulo}</td>
                  <td>{item.autor}</td>
                  <td>{item.fechaPub}</td>
                  <td>{item.tipo}</td>
                  <td>{item.tema}</td>
                  <td>
                    <Button color="primary">Editar</Button>
                  </td>
                  <td>
                    <Button color="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default Infografia;
