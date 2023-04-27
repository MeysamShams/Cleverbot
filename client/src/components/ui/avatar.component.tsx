export const PlaceholderAvatar = (props: { name: string }) => {
  return (
    <div className="avatar placeholder">
      <div className="bg-neutral-focus text-neutral-content pt-1 rounded-full w-10">
        <span className="text-xl">
          {props.name.substring(0, 1).toUpperCase()}
        </span>
      </div>
    </div>
  );
};
export const ImageAvatar = (props: { src: string }) => {
  return (
    <div className="avatar placeholder">
      <div className="w-10 p-1 bg-neutral rounded-full">
        <img src={props.src} />
      </div>
    </div>
  );
};
