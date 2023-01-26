interface Props {
  width: number;
  height: number;
}

export const Tab: React.FC<Props> = ({ width, height }) => {
  return (
    <div
      style={{ width: width, height: height }}
      className={` -mt-10  rounded-3xl bg-white  shadow-lg`}
    ></div>
  );
};
