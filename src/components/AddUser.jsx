import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
import { addUser } from "../service/api";

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

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);

  const onChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const addUserDetails = async () => {
    await addUser(user);
    navigate("/");
  };

  return (
    <div>
      <CardStyle variant="outlined">
        <CardContent>
          <FormGroupStyle>
            <TypographyStyle variant="h4">Add User</TypographyStyle>
            <FormControl>
              <InputLabel>Name</InputLabel>
              <Input onChange={(e) => onChangeInput(e)} name="name" />
            </FormControl>
            <FormControl>
              <InputLabel>Username</InputLabel>
              <Input onChange={(e) => onChangeInput(e)} name="username" />
            </FormControl>
            <FormControl>
              <InputLabel>Email</InputLabel>
              <Input onChange={(e) => onChangeInput(e)} name="email" />
            </FormControl>
            <FormControl>
              <InputLabel>Phone</InputLabel>
              <Input onChange={(e) => onChangeInput(e)} name="phone" />
            </FormControl>
          </FormGroupStyle>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            color="success"
            onClick={() => addUserDetails()}
          >
            ADD USER
          </Button>
        </CardActions>
      </CardStyle>
    </div>
  );
};

export default AddUser;
