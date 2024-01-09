import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Card,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";

import { deleteUser, getUsers } from "../service/api";
import { Link, useNavigate } from "react-router-dom";

const CardStyle = styled(Card)`
  margin: 50px auto;
  width: 80%;
`;
const ButtonStyle = styled(Button)`
  margin-right: 10px;
`;
const TableHeadStyle = styled(TableHead)`
  background: #00000;
  & > th {
    font-weight: 700;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };
  const removeUser = async (id) => {
    await deleteUser(id);
    getAllUser();
  };

  return (
    <div>
      <CardStyle variant="outlined">
        <Table aria-label="simple table">
          <TableHeadStyle>
            <TableRow>
              <TableCell>Sr. no.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHeadStyle>
          <TableBody>
            {users.map((user, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell align="right">
                  <ButtonStyle
                    variant="outlined"
                    color="primary"
                    size="small"
                    component={Link}
                    to={`/edit/${user._id}`}
                  >
                    Edit
                  </ButtonStyle>
                  <Button
                    onClick={() => removeUser(user._id)}
                    variant="outlined"
                    color="error"
                    size="small"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardStyle>
    </div>
  );
};
export default AllUsers;
