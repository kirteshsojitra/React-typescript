type StatusProps = {
  status: "sucess" | "failure" | "none";
};

const Advanced = (props: StatusProps) => {
  let message;
  if (props.status === "sucess") {
    message = "sucess";
  } else if (props.status == "failure") {
    message = "failure";
  } else if (props.status === "none") {
    message = "any";
  }
  return <div>{message}</div>;
};

export default Advanced;
