import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  CardContent,
  Card,
  CardActions,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { editUser, getUser } from "../service/api";

const CardStyle = styled(Card)`
  margin: 50px auto;
  width: 50%;
`;

const FormGroupStyle = styled(FormGroup)`
  margin: 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const TypographyStyle = styled(Typography)`
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);

  const onChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    // console.log(response.data);
    setUser(response.data);
  };
  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/");
  };

  return (
    <div>
      <CardStyle variant="outlined">
        <CardContent>
          <FormGroupStyle>
            <TypographyStyle variant="h4">Edit User</TypographyStyle>
            <FormControl>
              <InputLabel>Name</InputLabel>
              <Input
                onChange={(e) => onChangeInput(e)}
                name="name"
                value={user.name}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Username</InputLabel>
              <Input
                onChange={(e) => onChangeInput(e)}
                name="username"
                value={user.username}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Email</InputLabel>
              <Input
                onChange={(e) => onChangeInput(e)}
                name="email"
                value={user.email}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Phone</InputLabel>
              <Input
                onChange={(e) => onChangeInput(e)}
                name="phone"
                value={user.phone}
              />
            </FormControl>
          </FormGroupStyle>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            color="success"
            onClick={() => editUserDetails()}
          >
            EDIT USER
          </Button>
        </CardActions>
      </CardStyle>
    </div>
  );
};

export default EditUser;
