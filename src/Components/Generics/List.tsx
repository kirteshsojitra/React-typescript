import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends {id: number; first: string; last: string}>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>Items List</h2>
      {items.map((item) => {
        return (
          <div key={item.id}>
            {item.first} {item.last}
          </div>
        );
      })}
    </div>
  );
};

export default List;
