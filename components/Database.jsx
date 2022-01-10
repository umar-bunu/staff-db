import React, { useEffect, useState } from "react";
import { Button, Grid, modal } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  CloudUpload,
  DeleteForeverRounded,
  UpdateRounded,
} from "@material-ui/icons";

import ShowModal from "./ShowModal";
import styles from "../styles/Database.module.css";

function Database() {
  const [dataset, setdataset] = useState({ columns: [], rows: [] });
  const [selectedRow, setselectedRow] = useState(null);
  const [shouldShowModal, setshouldShowModal] = useState(false);
  useEffect(() => {
    setdataset({
      columns: [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First name", width: 130 },
        { field: "lastName", headerName: "Last name", width: 130 },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          width: 90,
        },
        {
          field: "fullName",
          headerName: "Full name",
          description: "This column has a value getter and is not sortable.",
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue(params.id, "firstName") || ""} ${
              params.getValue(params.id, "lastName") || ""
            }`,
        },
        {
          field: "dept",
          headerName: "Department",

          width: 140,
        },
      ],
      rows: [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35, dept: "Finance" },
        {
          id: 2,
          lastName: "Lannister",
          firstName: "Cersei",
          age: 42,
          dept: "Marketing",
        },
        {
          id: 3,
          lastName: "Lannister",
          firstName: "Jaime",
          age: 45,
          dept: "Production",
        },
        {
          id: 4,
          lastName: "Stark",
          firstName: "Arya",
          age: 16,
          dept: "Finance",
        },
        {
          id: 5,
          lastName: "Targaryen",
          firstName: "Daenerys",
          age: 55,
          dept: "Finance",
        },
        {
          id: 6,
          lastName: "Melisandre",
          firstName: "Dangote",
          age: 150,
          dept: "Human Resources",
        },
        {
          id: 7,
          lastName: "Clifford",
          firstName: "Ferrara",
          age: 44,
          dept: "Production",
        },
        {
          id: 8,
          lastName: "Frances",
          firstName: "Rossini",
          age: 36,
          dept: "Marketing",
        },
        {
          id: 9,
          lastName: "Roxie",
          firstName: "Harvey",
          age: 65,
          dept: "Finance",
        },
      ],
    });
  }, []);

  useEffect(() => {
    setshouldShowModal(selectedRow);
  }, [selectedRow]);

  return (
    <div>
      <Grid justifyContent="center" p="5px" container spacing={2}>
        <Grid item>
          <Button variant="contained" color="info" endIcon={<CloudUpload />}>
            Add Staff
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="error"
            endIcon={<DeleteForeverRounded />}
          >
            Delete Selected
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<UpdateRounded />}
          >
            Update Selected
          </Button>
        </Grid>
      </Grid>
      <section className={styles.sectionDiv}>
        <DataGrid
          onRowClick={(params, event, details) => {
            setselectedRow(params);
          }}
          on
          rows={dataset.rows}
          columns={dataset.columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </section>

      {shouldShowModal && (
        <div>
          <ShowModal
            selectedRow={selectedRow}
            shouldShowModal={shouldShowModal}
            setshouldShowModal={setshouldShowModal}
          />
        </div>
      )}
    </div>
  );
}

export default Database;
