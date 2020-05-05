import React from "react";
import { Button } from "react-bootstrap";
import "./LoaderButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSpinner, fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas, faSpinner);

export default function LoaderButton({
  isLoading,
  disabled = false,
  ...props
}) {
  return (
    <Button disabled={disabled || isLoading} {...props}>
      {isLoading && (
        <FontAwesomeIcon icon={["fas", "spinner"]} pulse fixedWidth />
      )}
      {props.children}
    </Button>
  );
}
