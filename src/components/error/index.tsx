import logo from '../../assets/logo.png';

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-[#f0f0f0]">
      <img src={logo} alt="Seedex Logo" className="w-12 h-12 mb-4 filter grayscale" />
      <h1 className="text-xl font-bold mb-2">No Data Available</h1>
      <span className="text-sm text-[#f3f3f3]">We couldn't find any results. Please try again later!</span>
    </div>
  );
}
