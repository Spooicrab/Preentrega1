import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ItemListContainer/ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div class="card">
      <div class="card-header">Hola Coder</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{greeting}</p>
        </blockquote>
      </div>
    </div>
  );
};

export default ItemListContainer;
