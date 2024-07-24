interface props {
  title?: string;
  content?: string;
  imgUrl?: string;
  buttonText?: string;
  width?: string;
  height?: string;
  padding?: string;
}

export default function Card(props: props) {
  const { title, content, imgUrl, buttonText, width, height, padding } = props;
  const sty = {
    width: width || "100%",
    height: height || "auto",
    padding: padding || "0",
  };

  return (
    <div className="overflow-hidden shadow-lg bg-white flex flex-col p-6" style={sty}>
      <div className="font-bold text-xl mb-2 text-black" style={{ height: "50px", maxHeight: "50px" }}>
        {title}
      </div>
      <div className="text-gray-700 text-base flex-1">{content}</div>
      {buttonText && (
        <div className=" pt-4 pb-2" style={{ height: "70px", maxHeight: "70px" }}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{buttonText}</button>
        </div>
      )}
    </div>
  );
}
