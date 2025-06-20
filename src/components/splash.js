export default function Splash() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-around bg-white">
      <img
        src="/d39926b2b0d4065ffd4b2705393dcc34bd5a59f4.png"
        alt="Logo"
        className="w-24 mb-8"
      />
      <div className="w-[60px] h-[60px]  rounded-full animate-spin">
        <img
          src="/7c224091a5f928834f88695ec93bf40bd6ea3102.png"
          alt="Logo"
          className="w-[60px] mb-9"
        />
      </div>
    </div>
  );
}
