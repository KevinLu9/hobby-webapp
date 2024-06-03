// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FlipCard(props: any) {
  return (
    <div className="flip-card w-[300px] h-[200px] fade-in">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-blue-900 text-white rounded-md p-2 ">
          {props.front}
        </div>
        <div className="flip-card-back bg-gray-600 text-white rounded-md p-2">
          {props.back}
        </div>
      </div>
    </div>
  );
}
