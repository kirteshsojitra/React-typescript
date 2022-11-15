import {ObjType} from "./person.types";

const Person = (props: ObjType) => {
  return (
    <div>
      Hello {props.names.first} {props.names.last}
    </div>
  );
};

export default Person;
