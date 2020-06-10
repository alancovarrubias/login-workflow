import React from "react";
import styled from "@emotion/styled";

const DisplayContainer = styled.div(
  {
    position: "relative",
    flex: "1",
  },
  ({ theme }) => ({
    color: theme.displayTextColor,
    background: theme.displayBackgroundColor,
  })
);

function LoginForm() {
  return (
    <DisplayContainer>
      <form>
        <label>Login</label>
      </form>
    </DisplayContainer>
  );
}

export default LoginForm;
