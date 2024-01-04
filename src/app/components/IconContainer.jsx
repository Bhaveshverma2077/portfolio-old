const IconContainer = (props) => {
  return (
    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
      {props.children}
    </div>
  );
};

export default IconContainer;
