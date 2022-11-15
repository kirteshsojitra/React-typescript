import React from "react";
type RandomType = {
  value: number;
};

type Positive = RandomType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type Negative = RandomType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type zero = RandomType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = Positive | Negative | zero;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
};

export default RandomNumber;
