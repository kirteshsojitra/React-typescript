import {Name} from "./person.types";

type myArrListNew = {
  nameList: Name[];
};
   
const PersonList = (props: myArrListNew) => {
  return (
    <div>
      {props.nameList.map((name) => {
        return (
          <div>
            {name.first} {name.last}
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
