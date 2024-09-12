// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FlipCard(props: any) {
  return (
    <div className="flip-card w-full h-full fade-in">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-base-100 shadow-xl rounded-sm p-2 overflow-y-auto">
          {props.front}
        </div>
        <div className="flip-card-back bg-base-200 shadow-lg rounded-sm p-2 overflow-y-auto">
          {props.back}
        </div>
      </div>
    </div>
  );
}
