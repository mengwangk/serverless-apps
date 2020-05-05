import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import "./ChangePassword.css";

export default function ChangePassword() {
  const history = useHistory();
  const [fields, handleFieldChange] = useFormFields({
    password: "",
    oldPassword: "",
    confirmPassword: "",
  });
  const [isChanging, setIsChanging] = useState(false);

  function validateForm() {
    return (
      fields.oldPassword.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleChangeClick(event) {
    event.preventDefault();

    setIsChanging(true);

    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
        currentUser,
        fields.oldPassword,
        fields.password
      );

      history.push("/settings");
    } catch (error) {
      onError(error);
      setIsChanging(false);
    }
  }

  return (
    <div className="ChangePassword">
      <Form onSubmit={handleChangeClick}>
        <Form.Group size="lg" controlId="oldPassword">
          <Form.Label>Old Password</Form.Label>
          <Form.Control
            type="password"
            autoFocus
            onChange={handleFieldChange}
            value={fields.oldPassword}
          />
        </Form.Group>
        <hr />
        <Form.Group size="lg" controlId="password">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            onChange={handleFieldChange}
            value={fields.password}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </Form.Group>
        <LoaderButton
          block
          type="submit"
          size="lg"
          disabled={!validateForm()}
          isLoading={isChanging}
        >
          Change Password
        </LoaderButton>
      </Form>
    </div>
  );
}
